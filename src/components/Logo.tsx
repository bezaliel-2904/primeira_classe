interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export function Logo({ className = '', showTagline = false }: LogoProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-baseline gap-1.5 leading-none">
        <span className="font-script text-sky-600 text-3xl md:text-4xl">Primeira</span>
        <span className="font-script text-rose-500 text-3xl md:text-4xl">Classe</span>
      </div>
      <div className="flex items-center gap-1.5 mt-0.5">
        <span className="font-sans text-sky-700 text-[10px] md:text-xs tracking-ultra-wide font-medium">
          KIDS
        </span>
        <svg width="16" height="10" viewBox="0 0 24 12" fill="none" className="text-sky-500">
          <path
            d="M2 8 Q8 3 14 6 T22 4"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="1.5 3"
            strokeLinecap="round"
          />
          <path d="M20 3 L23 4 L21 6 Z" fill="currentColor" />
        </svg>
      </div>
      {showTagline && (
        <p className="font-sans text-ink-400 text-[9px] tracking-extra-wide mt-1.5 uppercase">
          Moda Infantil
        </p>
      )}
    </div>
  );
}
