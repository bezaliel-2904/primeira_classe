import { useEffect, useState } from 'react';
import { Airplane } from './Airplane';

interface IntroAnimationProps {
  onComplete: () => void;
}

const INTRO_DURATION = 5200;

const ROUTE = 'M -90 430 C 80 120, 250 80, 390 285 C 455 380, 575 430, 610 285 C 645 140, 470 105, 475 285 C 480 440, 690 445, 820 255 C 900 140, 1000 150, 1090 215';

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [phase, setPhase] = useState<'flight' | 'split' | 'done'>('flight');

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      const timer = window.setTimeout(() => onComplete(), 500);
      return () => window.clearTimeout(timer);
    }

    const splitTimer = window.setTimeout(() => setPhase('split'), 4050);
    const finishTimer = window.setTimeout(() => {
      setPhase('done');
      onComplete();
    }, INTRO_DURATION);

    return () => {
      window.clearTimeout(splitTimer);
      window.clearTimeout(finishTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden bg-[#F4EFE6] transition-opacity duration-700 ${
        phase === 'done' ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      aria-label="Primeira Classe Kids"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_43%,rgba(224,236,242,0.62),transparent_34%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_72%,rgba(238,211,211,0.22),transparent_26%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_28%,rgba(210,226,235,0.28),transparent_25%)]" />

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="relative z-20 -translate-y-2 text-center">
          <div className="mb-3 flex items-baseline justify-center gap-2 leading-none">
            <span className="font-script text-5xl text-sky-700 md:text-7xl">Primeira</span>
            <span className="font-script text-5xl text-rose-500 md:text-7xl">Classe</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <span className="font-sans text-[10px] font-semibold tracking-[0.42em] text-sky-800 md:text-xs">KIDS</span>
            <span className="h-px w-12 bg-sky-300/80" />
            <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-ink-500">Moda Infantil</span>
          </div>
        </div>

        <svg
          className="absolute inset-0 z-10 h-full w-full"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d={ROUTE}
            pathLength="1"
            stroke="#78A6BD"
            strokeWidth="2.1"
            strokeDasharray="3 9"
            strokeLinecap="round"
            filter="url(#softGlow)"
            className="pc-route"
          />

          <path
            d="M 0 300 H 1000"
            stroke="#78A6BD"
            strokeWidth="1.8"
            strokeDasharray="2 9"
            strokeLinecap="round"
            className={`pc-split-line ${phase === 'split' || phase === 'done' ? 'pc-split-line-open' : ''}`}
          />

          <g className="pc-airplane">
            <animateMotion
              dur="3.9s"
              begin="0.25s"
              fill="freeze"
              rotate="auto"
              path={ROUTE}
            />
            <Airplane size={58} />
          </g>
        </svg>

        <div className="absolute bottom-9 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap">
          <span className="h-px w-8 bg-sky-300/70" />
          <span className="font-sans text-[9px] uppercase tracking-[0.34em] text-ink-500">Embarque nessa história</span>
          <span className="h-px w-8 bg-sky-300/70" />
        </div>

        <div
          className={`pointer-events-none absolute inset-x-0 top-0 z-30 h-1/2 bg-[#F4EFE6] transition-transform duration-[950ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
            phase === 'split' || phase === 'done' ? '-translate-y-full' : 'translate-y-0'
          }`}
        >
          <div className="absolute bottom-0 left-0 right-0 h-px bg-sky-300/80" />
        </div>
        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 z-30 h-1/2 bg-[#F4EFE6] transition-transform duration-[950ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
            phase === 'split' || phase === 'done' ? 'translate-y-full' : 'translate-y-0'
          }`}
        >
          <div className="absolute left-0 right-0 top-0 h-px bg-sky-300/80" />
        </div>

        <div
          className={`pointer-events-none absolute left-1/2 top-1/2 z-40 h-0.5 w-0 -translate-x-1/2 -translate-y-1/2 bg-sky-500/80 shadow-[0_0_18px_rgba(120,166,189,0.28)] transition-all duration-[950ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
            phase === 'split' || phase === 'done' ? 'w-full' : 'w-0'
          }`}
        />
      </div>
    </div>
  );
}
