import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import SlideRenderer from '@/components/SlideRenderer';
import SlideNav from '@/components/SlideNav';
import { getSlidesForDay, DAYS } from '@/data/slides';

export default function Index() {
  const [activeDay, setActiveDay] = useState(1);
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const slides = getSlidesForDay(activeDay);
  const currentSlide = slides[activeSlide];

  const goNext = useCallback(() => {
    setDirection(1);
    if (activeSlide < slides.length - 1) {
      setActiveSlide(prev => prev + 1);
    } else if (activeDay < 7) {
      setActiveDay(prev => prev + 1);
      setActiveSlide(0);
    }
  }, [activeSlide, slides.length, activeDay]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    if (activeSlide > 0) {
      setActiveSlide(prev => prev - 1);
    } else if (activeDay > 1) {
      const prevDay = activeDay - 1;
      const prevSlides = getSlidesForDay(prevDay);
      setActiveDay(prevDay);
      setActiveSlide(prevSlides.length - 1);
    }
  }, [activeSlide, activeDay]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'Space') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  const handleDayChange = (day: number) => {
    setDirection(day > activeDay ? 1 : -1);
    setActiveDay(day);
    setActiveSlide(0);
  };

  const handleSlideChange = (idx: number) => {
    setDirection(idx > activeSlide ? 1 : -1);
    setActiveSlide(idx);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
    }),
  };

  return (
    <div className="dark flex h-screen w-screen overflow-hidden bg-background text-foreground">
      {/* Sidebar */}
      <Sidebar
        activeDay={activeDay}
        activeSlide={activeSlide}
        onDayChange={handleDayChange}
        onSlideChange={handleSlideChange}
      />

      {/* Main area */}
      <div className="flex flex-col flex-1 min-w-0 h-full">
        {/* Slide canvas */}
        <div className="flex-1 relative overflow-hidden min-h-0">
          {/* Subtle background gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 70% 20%, oklch(0.72 0.18 160 / 0.06) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, oklch(0.68 0.20 25 / 0.05) 0%, transparent 60%)',
            }}
          />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide?.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 35 }}
              className="absolute inset-0 flex flex-col"
            >
              {currentSlide && (
                <div className="flex-1 h-full overflow-y-auto">
                  <SlideRenderer slide={currentSlide} />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation bar */}
        <SlideNav
          activeDay={activeDay}
          activeSlide={activeSlide}
          totalSlides={slides.length}
          onPrev={goPrev}
          onNext={goNext}
        />
      </div>

      {/* Keyboard hint */}
      <div className="fixed bottom-16 right-4 text-xs text-muted-foreground/40 pointer-events-none hidden lg:block">
        ← → arrow keys to navigate
      </div>
    </div>
  );
}
