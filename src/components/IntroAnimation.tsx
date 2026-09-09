import { useEffect, useState } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const INTRO_DURATION = 6200;
const FLIGHT_DURATION = 5000;

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [phase, setPhase] = useState<'flight' | 'split' | 'done'>('flight');

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      const timer = window.setTimeout(() => onComplete(), 500);
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(226,238,243,0.72),transparent_34%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_75%,rgba(238,205,207,0.22),transparent_28%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_25%,rgba(215,229,235,0.28),transparent_25%)]" />

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
          viewBox="0 0 1200 700"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <filter id="routeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* O trace começa fora da tela, faz uma volta elegante no centro e termina fora da tela. */}
          <path
            d="M -90 505 C 70 115, 255 95, 425 330 C 520 462, 685 458, 685 285 C 685 135, 500 135, 500 285 C 500 452, 740 470, 900 275 C 1000 150, 1110 165, 1290 220"
            pathLength="1"
            stroke="#79A5BA"
            strokeWidth="2.4"
            strokeDasharray="3 10"
            strokeLinecap="round"
            filter="url(#routeGlow)"
            className="pc-route"
          />

          <path
            d="M 0 350 H 1200"
            stroke="#79A5BA"
            strokeWidth="1.7"
            strokeDasharray="2 9"
            strokeLinecap="round"
            className={`pc-split-line ${phase === 'split' || phase === 'done' ? 'pc-split-line-open' : ''}`}
          />

          {/* Avião inspirado no pequeno avião rosa da foto de perfil enviada. */}
          <g className="pc-airplane">
            <g transform="translate(-34 -30) scale(.62)">
              <path d="M14 49 C25 45 36 43 48 42 L74 27 C78 25 83 27 84 30 C85 33 83 36 79 38 L57 48 L79 54 C83 55 85 58 83 61 C81 64 77 64 73 62 L49 53 C36 56 25 56 15 54 C11 53 10 51 14 49 Z" fill="#E59EAD" />
              <path d="M48 42 L38 25 C36 22 38 19 42 20 L58 27 L74 27 L57 48 Z" fill="#E59EAD" opacity=".95" />
              <path d="M48 42 L58 27 L66 30 L57 48 Z" fill="#D98599" opacity=".72" />
              <path d="M49 53 L40 68 C38 71 34 70 34 66 L36 55 Z" fill="#D98599" opacity=".82" />
            </g>
          </g>
        </svg>

        <div className="absolute bottom-9 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap">
          <span className="h-px w-8 bg-sky-300/70" />
          <span className="font-sans text-[9px] uppercase tracking-[0.34em] text-ink-500">Embarque nessa história</span>
          <span className="h-px w-8 bg-sky-300/70" />
        </div>

        <div
          className={`pointer-events-none absolute inset-x-0 top-0 z-30 h-1/2 bg-[#EFE5D5] transition-transform duration-[1100ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
            phase === 'split' || phase === 'done' ? '-translate-y-full' : 'translate-y-0'
          }`}
        >
          <div className="absolute bottom-0 left-0 right-0 h-px bg-sky-300/80" />
        </div>
        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 z-30 h-1/2 bg-[#EFE5D5] transition-transform duration-[1100ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
            phase === 'split' || phase === 'done' ? 'translate-y-full' : 'translate-y-0'
          }`}
        >
          <div className="absolute left-0 right-0 top-0 h-px bg-sky-300/80" />
        </div>

        <div
          className={`pointer-events-none absolute left-1/2 top-1/2 z-40 h-0.5 -translate-x-1/2 -translate-y-1/2 bg-sky-500/80 shadow-[0_0_18px_rgba(120,166,189,0.28)] transition-all duration-[1100ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
            phase === 'split' || phase === 'done' ? 'w-full' : 'w-0'
          }`}
        />
      </div>
    </div>
  );
}
