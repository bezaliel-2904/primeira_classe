import { useEffect, useState } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const INTRO_DURATION = 7000;
const FLIGHT_DURATION = 5700;

const ROUTE_PATH = 'M -90 505 C 70 115, 255 95, 425 330 C 520 462, 685 458, 685 285 C 685 135, 500 135, 500 285 C 500 452, 740 470, 900 275 C 1000 150, 1110 165, 1290 220';

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [phase, setPhase] = useState<'flight' | 'split' | 'done'>('flight');

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      const timer = window.setTimeout(() => onComplete(), 700);
      return () => window.clearTimeout(timer);
    }

    const splitTimer = window.setTimeout(() => setPhase('split'), FLIGHT_DURATION);
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
      className={`fixed inset-0 z-[100] overflow-hidden bg-[#EFE5D5] transition-opacity duration-700 ${
        phase === 'done' ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      aria-label="Primeira Classe Kids"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(226,238,243,0.62),transparent_34%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_75%,rgba(238,205,207,0.22),transparent_28%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_25%,rgba(215,229,235,0.28),transparent_25%)]" />

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 z-10 h-1/2 bg-[#EFE5D5] transition-transform duration-[1100ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
            phase === 'split' || phase === 'done' ? '-translate-y-full' : 'translate-y-0'
          }`}
        >
          <div className="absolute bottom-0 left-0 right-0 h-px bg-sky-300/80" />
        </div>
        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/2 bg-[#EFE5D5] transition-transform duration-[1100ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
            phase === 'split' || phase === 'done' ? 'translate-y-full' : 'translate-y-0'
          }`}
        >
          <div className="absolute left-0 right-0 top-0 h-px bg-sky-300/80" />
        </div>

        <svg
          className="absolute inset-0 z-20 h-full w-full"
          viewBox="0 0 1200 700"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <filter id="routeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.1" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* A máscara revela a rota progressivamente, exatamente atrás do avião. */}
            <mask id="routeRevealMask" maskUnits="userSpaceOnUse" x="0" y="0" width="1200" height="700">
              <path
                d={ROUTE_PATH}
                pathLength="1000"
                stroke="white"
                strokeWidth="34"
                strokeLinecap="round"
                fill="none"
                className="pc-route-mask"
              />
            </mask>
          </defs>

          {/* A rota só existe onde o avião já passou; ela é desenhada progressivamente durante o voo. */}
          <path
            d={ROUTE_PATH}
            stroke="#79A5BA"
            strokeWidth="2.4"
            strokeDasharray="3 10"
            strokeLinecap="round"
            opacity="0.95"
            filter="url(#routeGlow)"
            mask="url(#routeRevealMask)"
            className="pc-route"
          />
        </svg>

        <div
          className={`pc-airplane-html ${phase === 'split' || phase === 'done' ? 'pc-airplane-finished' : ''}`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 100 100" width="58" height="58" fill="none">
            <path d="M14 49 C25 45 36 43 48 42 L74 27 C78 25 83 27 84 30 C85 33 83 36 79 38 L57 48 L79 54 C83 55 85 58 83 61 C81 64 77 64 73 62 L49 53 C36 56 25 56 15 54 C11 53 10 51 14 49 Z" fill="#E59EAD" />
            <path d="M48 42 L38 25 C36 22 38 19 42 20 L58 27 L74 27 L57 48 Z" fill="#E59EAD" opacity=".95" />
            <path d="M48 42 L58 27 L66 30 L57 48 Z" fill="#D98599" opacity=".72" />
            <path d="M49 53 L40 68 C38 71 34 70 34 66 L36 55 Z" fill="#D98599" opacity=".82" />
          </svg>
        </div>

        <div className="relative z-40 -translate-y-2 text-center">
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

        <div
          className={`pointer-events-none absolute left-1/2 top-1/2 z-30 h-px -translate-x-1/2 -translate-y-1/2 bg-sky-400/70 shadow-[0_0_18px_rgba(120,166,189,0.25)] transition-all duration-[1100ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
            phase === 'split' || phase === 'done' ? 'w-full opacity-100' : 'w-0 opacity-0'
          }`}
        />

        <div
          className={`absolute bottom-9 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap transition-opacity duration-500 ${
            phase === 'split' || phase === 'done' ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <span className="h-px w-8 bg-sky-300/70" />
          <span className="font-sans text-[9px] uppercase tracking-[0.34em] text-ink-500">Embarque nessa história</span>
          <span className="h-px w-8 bg-sky-300/70" />
        </div>
      </div>
    </div>
  );
}
