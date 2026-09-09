import { useEffect, useState } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const FLIGHT_DURATION = 5600;
const OPEN_DURATION = 1250;
const INTRO_DURATION = FLIGHT_DURATION + OPEN_DURATION + 500;

// Um único caminho controla tanto o avião quanto o rastro.
const ROUTE_PATH = 'M -80 535 C 75 135, 255 105, 420 315 C 520 440, 665 455, 690 300 C 715 145, 520 115, 505 275 C 490 425, 690 485, 875 320 C 995 215, 1110 175, 1280 215';

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
      className={`fixed inset-0 z-[100] overflow-hidden bg-[#EFE5D5] transition-opacity duration-500 ${
        phase === 'done' ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      aria-label="Primeira Classe Kids"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(226,238,243,0.72),transparent_36%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_78%,rgba(238,205,207,0.24),transparent_30%)]" />

      {/* A abertura acontece somente depois que o avião termina o percurso. */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 z-50 h-1/2 bg-[#EFE5D5] transition-transform duration-[1250ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isOpening ? '-translate-y-full' : 'translate-y-0'
        }`}
      />
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 z-50 h-1/2 bg-[#EFE5D5] transition-transform duration-[1250ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
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
          <filter id="pcRouteGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* O mask começa totalmente fechada e abre na mesma duração do voo. */}
          <mask id="pcRouteMask" maskUnits="userSpaceOnUse" x="0" y="0" width="1200" height="700" mask-type="luminance">
            <rect x="0" y="0" width="1200" height="700" fill="black" />
            <path
              d={ROUTE_PATH}
              pathLength="1000"
              stroke="white"
              strokeWidth="38"
              strokeLinecap="round"
              fill="none"
              className="pc-route-mask"
            />
          </mask>

          <path id="pcFlightPath" d={ROUTE_PATH} pathLength="1000" fill="none" />
        </defs>

        {/* O rastro não existe pronto: somente a parte já percorrida pelo avião é revelada. */}
        <path
          d={ROUTE_PATH}
          pathLength="1000"
          stroke="#729CAF"
          strokeWidth="2.5"
          strokeDasharray="2.5 10"
          strokeLinecap="round"
          opacity="0.95"
          filter="url(#pcRouteGlow)"
          mask="url(#pcRouteMask)"
        />

        {/* Avião de papel elegante. Ele usa EXATAMENTE o mesmo path do rastro. */}
        <g className="pc-airplane-svg">
          <g transform="translate(-25 -25) scale(0.5)">
            <path d="M9 48.5 L92 8 L63 92 L43 59 L9 48.5 Z" fill="#FCFDFD" stroke="#66879A" strokeWidth="2.8" strokeLinejoin="round" />
            <path d="M9 48.5 L92 8 L43 59 L9 48.5 Z" fill="#E9F1F5" stroke="#66879A" strokeWidth="2.8" strokeLinejoin="round" />
            <path d="M43 59 L92 8 L63 92 L43 59 Z" fill="#D6E5EB" stroke="#66879A" strokeWidth="2.8" strokeLinejoin="round" />
            <path d="M43 59 L63 92" stroke="#A0B8C4" strokeWidth="2" strokeLinecap="round" />
          </g>
          <animateMotion dur="5.6s" begin="0s" fill="freeze" rotate="auto">
            <mpath href="#pcFlightPath" />
          </animateMotion>
        </g>
      </svg>

      {/* O nome fica completamente fora da cena durante o voo. Só aparece depois da abertura. */}
      <div
        className={`absolute inset-0 z-[70] flex items-center justify-center px-6 text-center transition-all duration-700 ease-out ${
          isOpening ? 'translate-y-0 opacity-100 delay-[850ms]' : 'translate-y-4 opacity-0'
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
