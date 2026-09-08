export function Emotional() {
  return (
    <section className="relative py-28 md:py-40 bg-sky-50 overflow-hidden">
      {/* Airplane crossing the section */}
      <div className="absolute top-12 left-0 right-0 flex items-center pointer-events-none opacity-60">
        <svg width="100%" height="40" viewBox="0 0 1200 40" fill="none" preserveAspectRatio="none">
          <path
            d="M50 30 Q200 8 400 18 T800 14 T1150 8"
            stroke="#8EB5CC"
            strokeWidth="1.5"
            strokeDasharray="2 5"
            strokeLinecap="round"
          />
          <path d="M1146 5 L1156 8 L1150 14 Z" fill="#6B9BB8" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center relative z-10">
        <div className="reveal">
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-sky-800 leading-[1.15] text-balance">
            Para eles, cada detalhe.
          </h2>
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-rose-400 italic mt-4 leading-tight">
            Para você, cada escolha.
          </p>
          <div className="w-16 h-px bg-sky-300 mx-auto my-10" />
          <p className="font-sans text-base md:text-lg text-sky-700 leading-relaxed max-w-xl mx-auto">
            A Primeira Classe busca unir estilo, delicadeza e praticidade para acompanhar
            a infância — porque cada fase merece ser vestida com o mesmo cuidado
            que você dedica a cada escolha.
          </p>
        </div>
      </div>

      {/* Bottom airplane trail */}
      <div className="absolute bottom-12 left-0 right-0 flex items-center pointer-events-none opacity-50">
        <svg width="100%" height="40" viewBox="0 0 1200 40" fill="none" preserveAspectRatio="none">
          <path
            d="M50 10 Q200 30 400 20 T800 24 T1150 30"
            stroke="#D0A8A0"
            strokeWidth="1.5"
            strokeDasharray="2 5"
            strokeLinecap="round"
          />
          <path d="M1146 33 L1156 30 L1150 24 Z" fill="#C08A80" />
        </svg>
      </div>
    </section>
  );
}
