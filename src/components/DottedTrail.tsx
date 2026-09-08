interface DottedTrailProps {
  className?: string;
  color?: string;
  width?: number;
  variant?: 'horizontal' | 'curve' | 'wave';
}

export function DottedTrail({
  className = '',
  color = '#8EB5CC',
  width = 1.5,
  variant = 'horizontal',
}: DottedTrailProps) {
  const paths: Record<string, string> = {
    horizontal: 'M0 10 L200 10',
    curve: 'M0 20 Q50 5 100 12 T200 8',
    wave: 'M0 10 Q25 2 50 10 T100 10 T150 10 T200 10',
  };

  return (
    <svg
      className={className}
      viewBox="0 0 200 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d={paths[variant]}
        stroke={color}
        strokeWidth={width}
        strokeDasharray="2 6"
        strokeLinecap="round"
      />
    </svg>
  );
}
