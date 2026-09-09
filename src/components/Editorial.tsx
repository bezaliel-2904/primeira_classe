const EDITORIAL_IMAGE = 'https://images.pexels.com/photos/30640424/pexels-photo-30640424.jpeg?auto=compress&cs=tinysrgb&w=1200';
const EDITORIAL_FALLBACK = 'https://images.pexels.com/photos/33327417/pexels-photo-33327417.jpeg?auto=compress&cs=tinysrgb&w=1400';

export function Editorial() {
  return (
    <section className="py-20 md:py-28 bg-creme-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 reveal">
            <div className="overflow-hidden rounded-sm aspect-[16/11] bg-sky-50 shadow-lg shadow-ink-900/5">
              <img
                src={EDITORIAL_IMAGE}
                alt="Crianças caminhando vestindo moda da Primeira Classe Kids"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(event) => {
                  if (event.currentTarget.src !== EDITORIAL_FALLBACK) event.currentTarget.src = EDITORIAL_FALLBACK;
                }}
              />
            </div>
          </div>

          <div className="lg:col-span-5 reveal reveal-delay-1">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink-900 leading-[1.15] text-balance">
              Vestir a infância é guardar momentos.
            </h2>
            <p className="font-sans text-base text-ink-500 mt-8 leading-relaxed max-w-sm">
              Cada look carrega uma memória. Cada tecido guarda um sorriso.
              A moda infantil, quando feita com cuidado, vira aquilo que se recorda
              para sempre — um pedacinho da infância que fica.
            </p>
            <div className="mt-10 flex items-center gap-3">
              <svg width="120" height="12" viewBox="0 0 120 12" fill="none" aria-hidden="true">
                <path d="M2 8 Q30 2 60 6 T118 4" stroke="#8EB5CC" strokeWidth="1.5" strokeDasharray="2 5" strokeLinecap="round" />
                <path d="M114 2 L120 4 L116 8 Z" fill="#6B9BB8" />
              </svg>
              <span className="font-sans text-xs tracking-extra-wide text-sky-500 uppercase">Primeira Classe Kids</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
