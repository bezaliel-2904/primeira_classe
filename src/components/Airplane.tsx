interface AirplaneProps {
  className?: string;
  size?: number;
  flip?: boolean;
}

export function Airplane({ className = '', size = 48, flip = false }: AirplaneProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
      aria-hidden="true"
    >
      <path
        d="M15 50 C20 47 25 46 30 47 L52 38 L58 36 C62 35 66 36 67 39 C68 42 66 45 62 46 L58 47 L52 48 L40 55 C35 58 30 59 25 58 L18 56 C15 55 13 52 15 50 Z"
        fill="#6B9BB8"
        opacity="0.9"
      />
      <path
        d="M58 36 L72 30 C76 28 80 29 81 32 C82 35 80 38 76 39 L62 45"
        fill="#8EB5CC"
        opacity="0.85"
      />
      <path
        d="M30 47 L25 55 C23 58 20 59 18 57 L16 55"
        fill="#8EB5CC"
        opacity="0.8"
      />
      <path
        d="M62 46 L58 47 L52 48 L40 55 C37 57 34 58 31 58 L33 52 L52 48 L58 47 Z"
        fill="#4E7B94"
        opacity="0.6"
      />
      <circle cx="55" cy="42" r="1.5" fill="#FDFBF7" opacity="0.7" />
      <path
        d="M15 50 C20 47 25 46 30 47"
        stroke="#FDFBF7"
        strokeWidth="0.5"
        opacity="0.4"
      />
    </svg>
  );
}
