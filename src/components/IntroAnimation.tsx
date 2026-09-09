import { useEffect, useState } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const INTRO_DURATION = 7600;
const FLIGHT_DURATION = 5700;

const ROUTE_PATH = 'M -90 505 C 70 115, 255 95, 425 330 C 520 462, 685 458, 685 285 C 685 135, 500 135, 500 285 C 500 452, 740 470, 900 275 C 1000 150, 1110 165, 1290 220';

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [phase, setPhase] = useState<'flight' | 'split' | 'done'>('flight');

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      const timer = window.setTimeout(onComplete, 700);
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

  const isOpening = phase === 'split' || phase === 'done';

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

      {/* A tela permanece limpa durante o voo. O conteúdo só aparece quando a abertura começa. */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 z-50 h-1/2 bg-[#EFE5D5] transition-transform duration-[1100ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isOpening ? '-translate-y-full' : 'translate-y-0'
        }`}
      />
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 z-50 h-1/2 bg-[#EFE5D5] transition-transform duration-[1100ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isOpening ? 'translate-y-full' : 'translate-y-0'
        }`}
      />

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

        {/* A mesma rota controla o avião e o rastro. Assim, não há dois percursos diferentes. */}
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

        <g className="pc-airplane-svg">
          {/* Avião de papel: desenho leve, elegante e minimalista. */}
          <g transform="translate(-30 -30) scale(0.60)">
            <path d="M12 49.5 91 9 64 91 46 59 12 49.5Z" fill="#F9FBFC" stroke="#6D8FA3" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M12 49.5 91 9 46 59 12 49.5Z" fill="#E7F0F4" stroke="#6D8FA3" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M46 59 91 9 64 91 46 59Z" fill="#D4E3EA" stroke="#6D8FA3" strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M46 59 64 91" stroke="#9CB5C3" strokeWidth="2" strokeLinecap="round" />
          </g>
          <animateMotion dur="5.7s" begin="0.15s" fill="freeze" rotate="auto">
            <mpath href="#flightPath" />
          </animateMotion>
        </g>

        {/* Caminho invisível usado exclusivamente pelo movimento do avião. */}
        <path id="flightPath" d={ROUTE_PATH} pathLength="1000" fill="none" opacity="0" />
      </svg>

      {/* Nome da loja: só entra depois que a tela abre. */}
      <div
        className={`absolute inset-0 z-[70] flex items-center justify-center px-6 text-center transition-all duration-[900ms] ease-out ${
          isOpening ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
        }`}
        aria-hidden={!isOpening}
      >
        <div>
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
      </div>

      {!isOpening && (
        <div className="absolute bottom-9 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap">
          <span className="h-px w-8 bg-sky-300/70" />
          <span className="font-sans text-[9px] uppercase tracking-[0.34em] text-ink-500">Embarque nessa história</span>
          <span className="h-px w-8 bg-sky-300/70" />
        </div>
      )}
    </div>
  );
}
