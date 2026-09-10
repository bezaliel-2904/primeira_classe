import { useEffect, useState } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const FLIGHT_DURATION = 5600;
const OPEN_DURATION = 1250;
const INTRO_DURATION = FLIGHT_DURATION + OPEN_DURATION + 900;

// Percursos desenhados em proporções reais, sem esticar o SVG.
// O trecho central faz um loop/retorno visível antes de o avião seguir para a saída.
const DESKTOP_ROUTE = 'M -80 555 C 20 210, 180 95, 350 255 C 455 355, 480 555, 365 610 C 255 660, 220 505, 300 415 C 390 315, 575 350, 650 455 C 735 570, 900 530, 1020 300 C 1080 185, 1170 175, 1280 225';
const MOBILE_ROUTE = 'M -35 675 C 15 475, 45 230, 145 180 C 235 135, 285 255, 280 390 C 275 505, 225 610, 145 630 C 75 648, 58 575, 105 510 C 165 425, 300 430, 335 545 C 365 640, 335 735, 285 790';

function PaperPlane() {
  return (
    <g transform="translate(-30 -30) scale(0.60)">
      <path d="M12 49.5 91 9 64 91 46 59 12 49.5Z" fill="#F9FBFC" stroke="#6D8FA3" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M12 49.5 91 9 46 59 12 49.5Z" fill="#E7F0F4" stroke="#6D8FA3" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M46 59 91 9 64 91 46 59Z" fill="#D4E3EA" stroke="#6D8FA3" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M46 59 64 91" stroke="#9CB5C3" strokeWidth="2" strokeLinecap="round" />
    </g>
  );
}

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
    <div className={`pc-intro-layer fixed inset-0 z-[100] overflow-hidden bg-[#EFE5D5] transition-opacity duration-700 ${phase === 'done' ? 'pointer-events-none opacity-0' : 'opacity-100'}`} aria-label="Primeira Classe Kids">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_42%,rgba(226,238,243,0.62),transparent_34%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_15%_75%,rgba(238,205,207,0.22),transparent_28%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_85%_25%,rgba(215,229,235,0.28),transparent_25%)]" />

      <div className={`pointer-events-none absolute inset-x-0 top-0 z-20 h-1/2 bg-[#EFE5D5] transition-transform duration-[1250ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${isOpening ? '-translate-y-full' : 'translate-y-0'}`} />
      <div className={`pointer-events-none absolute inset-x-0 bottom-0 z-20 h-1/2 bg-[#EFE5D5] transition-transform duration-[1250ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${isOpening ? 'translate-y-full' : 'translate-y-0'}`} />

      <svg className="pc-flight-svg pc-flight-desktop absolute inset-0 z-30 h-full w-full" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid meet" fill="none" aria-hidden="true">
        <defs>
          <mask id="routeRevealDesktop" maskUnits="userSpaceOnUse" x="0" y="0" width="1200" height="700" mask-type="luminance">
            <rect x="0" y="0" width="1200" height="700" fill="black" />
            <path d={DESKTOP_ROUTE} pathLength="1000" stroke="white" strokeWidth="34" strokeLinecap="round" fill="none" className="pc-route-mask" />
          </mask>
        </defs>
        <path d={DESKTOP_ROUTE} pathLength="1000" stroke="#79A5BA" strokeWidth="2.5" strokeDasharray="3 10" strokeLinecap="round" opacity="0.95" mask="url(#routeRevealDesktop)" />
        <g className="pc-airplane-svg">
          <PaperPlane />
          <animateMotion dur="5.6s" begin="0s" fill="freeze" rotate="auto"><mpath href="#desktopFlightPath" /></animateMotion>
        </g>
        <path id="desktopFlightPath" d={DESKTOP_ROUTE} fill="none" opacity="0" />
      </svg>

      <svg className="pc-flight-svg pc-flight-mobile absolute inset-0 z-30 h-full w-full" viewBox="0 0 390 844" preserveAspectRatio="xMidYMid meet" fill="none" aria-hidden="true">
        <defs>
          <mask id="routeRevealMobile" maskUnits="userSpaceOnUse" x="0" y="0" width="390" height="844" mask-type="luminance">
            <rect x="0" y="0" width="390" height="844" fill="black" />
            <path d={MOBILE_ROUTE} pathLength="1000" stroke="white" strokeWidth="30" strokeLinecap="round" fill="none" className="pc-route-mask" />
          </mask>
        </defs>
        <path d={MOBILE_ROUTE} pathLength="1000" stroke="#79A5BA" strokeWidth="2.5" strokeDasharray="3 10" strokeLinecap="round" opacity="0.95" mask="url(#routeRevealMobile)" />
        <g className="pc-airplane-svg">
          <PaperPlane />
          <animateMotion dur="5.6s" begin="0s" fill="freeze" rotate="auto"><mpath href="#mobileFlightPath" /></animateMotion>
        </g>
        <path id="mobileFlightPath" d={MOBILE_ROUTE} fill="none" opacity="0" />
      </svg>

      <div className={`pointer-events-none absolute inset-0 z-[70] flex items-center justify-center px-5 text-center transition-all duration-[900ms] ease-out ${isOpening ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} aria-hidden={!isOpening}>
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

      {!isOpening && <div className="absolute bottom-[clamp(1.5rem,7vh,2.25rem)] left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap max-[380px]:gap-1.5"><span className="h-px w-5 bg-sky-300/70 sm:w-8" /><span className="font-sans text-[8px] uppercase tracking-[0.22em] text-ink-500 sm:text-[9px] sm:tracking-[0.34em]">Embarque nessa história</span><span className="h-px w-5 bg-sky-300/70 sm:w-8" /></div>}
    </div>
  );
}
