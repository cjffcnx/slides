import { getSlidesForDay, DAY_TITLES, DAYS } from '@/data/slides';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  activeDay: number;
  activeSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function SlideNav({ activeDay, activeSlide, totalSlides, onPrev, onNext }: Props) {
  const slides = getSlidesForDay(activeDay);
  const current = slides[activeSlide];
  const slideNumber = current?.id ?? 0;
  const firstDay = DAYS[0];
  const lastDay = DAYS[DAYS.length - 1];
  const sessionLabel = activeDay === 0 ? 'Intro' : `Day ${activeDay}`;

  return (
    <div className="flex items-center justify-between px-6 py-3 border-t border-border bg-background/80 shrink-0">
      {/* Left: slide info */}
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <span className="font-mono text-xs">
          {sessionLabel} · {activeSlide + 1}/{totalSlides}
        </span>
        <span className="text-border">|</span>
        <span className="truncate max-w-[240px]">{DAY_TITLES[activeDay]}</span>
      </div>

      {/* Center: dot indicators */}
      <div className="flex items-center gap-1.5">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-200 ${
              i === activeSlide
                ? 'w-4 h-1.5 bg-accent'
                : 'w-1.5 h-1.5 bg-muted-foreground/30'
            }`}
          />
        ))}
      </div>

      {/* Right: prev/next */}
      <div className="flex items-center gap-2">
        <button
          onClick={onPrev}
          disabled={activeDay === firstDay && activeSlide === 0}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground hover:border-accent/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
          Prev
        </button>
        <span className="text-xs text-muted-foreground font-mono">
          #{String(slideNumber).padStart(2, '0')}
        </span>
        <button
          onClick={onNext}
          disabled={activeDay === lastDay && activeSlide === totalSlides - 1}
          className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground hover:border-accent/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
