import { useEffect, useState } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const FLIGHT_DURATION = 5600;
const OPEN_DURATION = 1250;
const INTRO_DURATION = FLIGHT_DURATION + OPEN_DURATION + 900;

const ROUTE_PATH = 'M -90 505 C 70 115, 255 95, 425 330 C 520 462, 685 458, 685 285 C 685 135, 500 135, 500 285 C 500 452, 740 470, 900 275 C 1000 150, 1110 165, 1290 220';

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [phase, setPhase] = useState<'flight' | 'opening' | 'done'>('flight');

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      const timer = window.setTimeout(onComplete, 500);
      return () => window.clearTimeout(timer);
    }

    const openTimer = window.setTimeout(() => setPhase('opening'), FLIGHT_DURATION);
    const finishTimer = window.setTimeout(() => {
      setPhase('done');
      onComplete();
    }, INTRO_DURATION);

    return () => {
      window.clearTimeout(openTimer);
      window.clearTimeout(finishTimer);
    };
  }, [onComplete]);

  const isOpening = phase === 'opening' || phase === 'done';

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden bg-[#EFE5D5] transition-opacity duration-700 ${phase === 'done' ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
      aria-label="Primeira Classe Kids"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_42%,rgba(226,238,243,0.62),transparent_34%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_15%_75%,rgba(238,205,207,0.22),transparent_28%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_85%_25%,rgba(215,229,235,0.28),transparent_25%)]" />

      {/* As portas cobrem apenas a área da abertura e ficam atrás do avião/rastro. */}
      <div className={`pointer-events-none absolute inset-x-0 top-0 z-20 h-1/2 bg-[#EFE5D5] transition-transform duration-[1250ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${isOpening ? '-translate-y-full' : 'translate-y-0'}`} />
      <div className={`pointer-events-none absolute inset-x-0 bottom-0 z-20 h-1/2 bg-[#EFE5D5] transition-transform duration-[1250ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${isOpening ? 'translate-y-full' : 'translate-y-0'}`} />

      <svg
        className="absolute inset-0 z-30 h-full w-full"
        viewBox="0 0 1200 700"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <filter id="routeGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.9" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <mask id="routeRevealMask" maskUnits="userSpaceOnUse" x="0" y="0" width="1200" height="700" mask-type="luminance">
            <rect x="0" y="0" width="1200" height="700" fill="black" />
            <path d={ROUTE_PATH} pathLength="1000" stroke="white" strokeWidth="34" strokeLinecap="round" fill="none" className="pc-route-mask" />
          </mask>
        </defs>

        {/* O único caminho visual da animação. */}
        <path
          d={ROUTE_PATH}
          pathLength="1000"
          stroke="#79A5BA"
          strokeWidth="2.5"
          strokeDasharray="3 10"
          strokeLinecap="round"
          opacity="0.95"
          filter="url(#routeGlow)"
          mask="url(#routeRevealMask)"
        />

        {/* Avião de papel: permanece no mesmo caminho do rastro. */}
        <g className="pc-airplane-svg">
          <g transform="translate(-30 -30) scale(0.60)">
            <path d="M12 49.5 91 9 64 91 46 59 12 49.5Z" fill="#F9FBFC" stroke="#6D8FA3" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M12 49.5 91 9 46 59 12 49.5Z" fill="#E7F0F4" stroke="#6D8FA3" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M46 59 91 9 64 91 46 59Z" fill="#D4E3EA" stroke="#6D8FA3" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M46 59 64 91" stroke="#9CB5C3" strokeWidth="2" strokeLinecap="round" />
          </g>
          <animateMotion dur="5.6s" begin="0s" fill="freeze" rotate="auto">
            <mpath href="#flightPath" />
          </animateMotion>
        </g>

        <path id="flightPath" d={ROUTE_PATH} fill="none" opacity="0" />
      </svg>

      {/* O nome fica completamente fora da tela durante o voo e só aparece quando as portas começam a abrir. */}
      <div
        className={`pointer-events-none absolute inset-0 z-[70] flex items-center justify-center px-5 text-center transition-all duration-[900ms] ease-out ${isOpening ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
        aria-hidden={!isOpening}
      >
        <div className="w-full max-w-[92vw]">
          <div className="mb-3 flex items-baseline justify-center gap-2 leading-none max-[380px]:gap-1.5">
            <span className="font-script text-[clamp(2.7rem,12vw,4.5rem)] text-sky-700">Primeira</span>
            <span className="font-script text-[clamp(2.7rem,12vw,4.5rem)] text-rose-500">Classe</span>
          </div>
          <div className="flex items-center justify-center gap-2 max-[380px]:gap-1.5">
            <span className="font-sans text-[9px] font-semibold tracking-[0.34em] text-sky-800 sm:text-xs sm:tracking-[0.42em]">KIDS</span>
            <span className="h-px w-8 bg-sky-300/80 sm:w-12" />
            <span className="font-sans text-[8px] uppercase tracking-[0.2em] text-ink-500 sm:text-[9px] sm:tracking-[0.3em]">Moda Infantil</span>
          </div>
        </div>
      </div>

      {!isOpening && (
        <div className="absolute bottom-[clamp(1.5rem,7vh,2.25rem)] left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap max-[380px]:gap-1.5">
          <span className="h-px w-5 bg-sky-300/70 sm:w-8" />
          <span className="font-sans text-[8px] uppercase tracking-[0.22em] text-ink-500 sm:text-[9px] sm:tracking-[0.34em]">Embarque nessa história</span>
          <span className="h-px w-5 bg-sky-300/70 sm:w-8" />
        </div>
      )}
    </div>
  );
}
