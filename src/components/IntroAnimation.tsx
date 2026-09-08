import { useEffect, useRef, useState } from 'react';
import { Airplane } from './Airplane';

interface IntroAnimationProps {
  onComplete: () => void;
}

const INTRO_DURATION = 3200;

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [phase, setPhase] = useState<'start' | 'fly' | 'exit'>('start');
  const completedRef = useRef(false);

  useEffect(() => {
    const finish = () => {
      if (completedRef.current) return;
      completedRef.current = true;
      onComplete();
    };

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      const timer = window.setTimeout(finish, 450);
      return () => window.clearTimeout(timer);
    }

    const startTimer = window.setTimeout(() => setPhase('fly'), 350);
    const exitTimer = window.setTimeout(() => setPhase('exit'), 2550);
    const finishTimer = window.setTimeout(finish, INTRO_DURATION);

    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(exitTimer);
      window.clearTimeout(finishTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden bg-creme-50 transition-opacity duration-700 ${
        phase === 'exit' ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      aria-label="Primeira Classe Kids"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(232,240,245,0.9),transparent_48%)]" />
      <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-sky-100/60 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-rose-100/50 blur-3xl" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <div
          className={`relative z-20 transition-all duration-1000 ease-out ${
            phase === 'start' ? 'translate-y-4 scale-95 opacity-0' : 'translate-y-0 scale-100 opacity-100'
          } ${phase === 'exit' ? 'scale-105 opacity-0' : ''}`}
        >
          <div className="flex items-baseline justify-center gap-2 leading-none">
            <span className="font-script text-5xl text-sky-600 md:text-7xl">Primeira</span>
            <span className="font-script text-5xl text-rose-500 md:text-7xl">Classe</span>
          </div>
          <div className="mt-2 flex items-center justify-center gap-3">
            <span className="font-sans text-xs font-medium tracking-[0.35em] text-sky-700 md:text-sm">KIDS</span>
            <span className="h-px w-10 bg-sky-300" />
            <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-ink-400">Moda Infantil</span>
          </div>
        </div>

        <div className="absolute inset-x-0 top-[56%] h-24 md:top-1/2 md:h-32">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="none" aria-hidden="true">
            <path
              d="M-20 92 C 180 10, 360 18, 560 78 S 930 102, 1220 20"
              stroke="#8EB5CC"
              strokeWidth="2"
              strokeDasharray="3 8"
              strokeLinecap="round"
              pathLength="1"
              className={`transition-[stroke-dashoffset] duration-[2200ms] ease-in-out ${
                phase === 'start' ? '[stroke-dashoffset:1]' : '[stroke-dashoffset:0]'
              }`}
            />
          </svg>

          <div
            className={`absolute left-[-5%] top-[72%] z-30 transition-all duration-[2200ms] ease-in-out ${
              phase === 'start'
                ? 'translate-x-0 -translate-y-1/2 rotate-[-20deg] opacity-0'
                : phase === 'fly'
                  ? 'translate-x-[108vw] -translate-y-[130%] rotate-[-8deg] opacity-100'
                  : 'translate-x-[108vw] -translate-y-[130%] rotate-[-8deg] opacity-0'
            }`}
          >
            <Airplane size={54} />
          </div>
        </div>

        <div
          className={`absolute bottom-10 flex items-center gap-3 transition-opacity duration-700 ${
            phase === 'start' ? 'opacity-0' : phase === 'exit' ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <span className="h-px w-8 bg-sky-200" />
          <span className="font-sans text-[9px] uppercase tracking-[0.28em] text-ink-400">Embarque nessa história</span>
          <span className="h-px w-8 bg-sky-200" />
        </div>
      </div>
    </div>
  );
}
