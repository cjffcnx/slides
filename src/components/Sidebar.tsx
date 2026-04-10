import { DAYS, DAY_TITLES, DAY_ICONS, getSlidesForDay } from '@/data/slides';

interface Props {
  activeDay: number;
  activeSlide: number;
  onDayChange: (day: number) => void;
  onSlideChange: (slideIndex: number) => void;
}

export default function Sidebar({ activeDay, activeSlide, onDayChange, onSlideChange }: Props) {
  return (
    <aside className="w-72 shrink-0 flex flex-col border-r border-border bg-sidebar h-full overflow-hidden">
      {/* Header */}
      <div className="px-5 py-5 border-b border-sidebar-border">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-xl">💻</span>
          <span className="font-black text-base text-sidebar-foreground tracking-tight">HTML Bootcamp</span>
        </div>
        <p className="text-xs text-muted-foreground ml-7">7-Day Crash Course</p>
      </div>

      {/* Day list */}
      <nav className="flex-1 overflow-y-auto py-3 px-3 space-y-1">
        {DAYS.map(day => {
          const slides = getSlidesForDay(day);
          const isActive = day === activeDay;
          return (
            <div key={day}>
              <button
                onClick={() => { onDayChange(day); onSlideChange(0); }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-150 group ${
                  isActive
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
                }`}
              >
                <span className="text-xl w-7 text-center">{DAY_ICONS[day]}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{day === 0 ? 'Intro' : `Day ${day}`}</div>
                  <div className="text-sm font-medium truncate">{DAY_TITLES[day]}</div>
                </div>
                <span className="text-xs text-muted-foreground font-mono shrink-0">{slides.length}</span>
              </button>

              {/* Slide sub-list when day is active */}
              {isActive && (
                <div className="mt-1 ml-10 space-y-0.5">
                  {slides.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => onSlideChange(idx)}
                      className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs transition-all duration-100 truncate ${
                        idx === activeSlide
                          ? 'bg-accent/20 text-accent font-semibold'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                    >
                      <span className="font-mono opacity-50 mr-1">{String(idx + 1).padStart(2, '0')}</span>
                      {slide.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-sidebar-border">
        <p className="text-xs text-muted-foreground leading-relaxed">
          Built for curious humans 🚀<br />
          Total slides: 64 across 8 sessions
        </p>
      </div>
    </aside>
  );
}
