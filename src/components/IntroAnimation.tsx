import { useEffect, useState, useRef } from 'react';
import { Airplane } from './Airplane';

interface IntroAnimationProps {
  onComplete: () => void;
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [phase, setPhase] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<SVGSVGElement>(null);
  const reducedMotion = useRef(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (reducedMotion.current) {
      const t = setTimeout(() => onComplete(), 300);
      return () => clearTimeout(t);
    }

    const timers: ReturnType<typeof setTimeout>[] = [];

    timers.push(setTimeout(() => setPhase(1), 200));
    timers.push(setTimeout(() => setPhase(2), 600));
    timers.push(setTimeout(() => setPhase(3), 2800));
    timers.push(setTimeout(() => {
      setIsExiting(true);
    }, 3200));
    timers.push(setTimeout(() => onComplete(), 3700));

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  useEffect(() => {
    if (phase < 2 || !trailRef.current || !planeRef.current) return;

    const svg = trailRef.current;
    const plane = planeRef.current;
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const W = rect.width;
    const H = rect.height;

    const startX = W * 0.08;
    const startY = H * 0.72;
    const cp1x = W * 0.25;
    const cp1y = H * 0.2;
    const cp2x = W * 0.55;
    const cp2y = H * 0.85;
    const endX = W * 0.92;
    const endY = H * 0.28;

    const pathD = `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`;
    const pathEl = svg.querySelector('#trail-path') as SVGPathElement;
    if (pathEl) {
      pathEl.setAttribute('d', pathD);
      const length = pathEl.getTotalLength();
      pathEl.style.strokeDasharray = `2 6`;
      pathEl.style.strokeDashoffset = `${length}`;
      pathEl.getBoundingClientRect();
      pathEl.style.transition = `stroke-dashoffset 2.2s cubic-bezier(0.45, 0, 0.55, 1)`;
      pathEl.style.strokeDashoffset = `0`;
    }

    plane.style.transition = 'left 2.2s cubic-bezier(0.45, 0, 0.55, 1), top 2.2s cubic-bezier(0.45, 0, 0.55, 1)';
    plane.style.left = `${endX}px`;
    plane.style.top = `${endY}px`;

    let angle = 0;
    let raf = 0;
    const startTime = performance.now();
    const duration = 2200;

    const animateAngle = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      if (pathEl) {
        const point = pathEl.getPointAtLength(t * (pathEl.getTotalLength()));
        const next = pathEl.getPointAtLength(Math.min((t + 0.01) * pathEl.getTotalLength(), pathEl.getTotalLength()));
        angle = Math.atan2(next.y - point.y, next.x - point.x) * (180 / Math.PI);
        plane.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      }
      if (t < 1) raf = requestAnimationFrame(animateAngle);
    };
    raf = requestAnimationFrame(animateAngle);

    return () => cancelAnimationFrame(raf);
  }, [phase]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-[100] bg-creme-50 flex items-center justify-center overflow-hidden transition-opacity duration-500 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Logo text */}
      <div
        className={`absolute z-10 flex flex-col items-center transition-all duration-1000 ${
          phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        } ${phase >= 3 ? 'scale-110' : 'scale-100'}`}
      >
        <div className="flex items-baseline gap-2 leading-none">
          <span className="font-script text-sky-600 text-5xl md:text-7xl">Primeira</span>
          <span className="font-script text-rose-500 text-5xl md:text-7xl">Classe</span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="font-sans text-sky-700 text-sm md:text-base tracking-ultra-wide font-medium">
            KIDS
          </span>
        </div>
      </div>

      {/* Trail SVG */}
      <svg
        ref={trailRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        fill="none"
      >
        <path
          id="trail-path"
          stroke="#8EB5CC"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Airplane */}
      <div
        ref={planeRef}
        className="absolute z-5 pointer-events-none"
        style={{
          left: phase >= 2 ? undefined : '8%',
          top: phase >= 2 ? undefined : '72%',
          transform: 'translate(-50%, -50%)',
          opacity: phase >= 2 ? 1 : 0,
          transition: 'opacity 0.3s ease-out',
        }}
      >
        <Airplane size={44} />
      </div>
    </div>
  );
}
