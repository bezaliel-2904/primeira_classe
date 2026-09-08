const STORE_IMAGE = 'https://images.pexels.com/photos/13758357/pexels-photo-13758357.jpeg?auto=compress&cs=tinysrgb&w=1400';
const STORE_IMAGE_FALLBACK = 'https://images.pexels.com/photos/33327417/pexels-photo-33327417.jpeg?auto=compress&cs=tinysrgb&w=1400';

export function Emotional() {
  return (
    <section className="relative overflow-hidden bg-sky-50 py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.9),transparent_38%),radial-gradient(circle_at_85%_80%,rgba(248,232,229,0.7),transparent_34%)]" />

      <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-6 md:px-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6 reveal">
          <div className="relative overflow-hidden rounded-[3px] shadow-2xl shadow-sky-900/10">
            <div className="aspect-[4/3]">
              <img
                src={STORE_IMAGE}
                alt="Boutique infantil com roupas coloridas expostas"
                className="h-full w-full object-cover saturate-[1.12] transition-transform duration-1000 hover:scale-[1.03]"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.src = STORE_IMAGE_FALLBACK;
                }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-sky-950/25 via-transparent to-white/5 pointer-events-none" />
            <div className="absolute bottom-5 left-5 bg-creme-50/90 px-5 py-3 backdrop-blur-md">
              <p className="font-serif text-lg text-ink-800">Pequenos estilos</p>
              <p className="mt-1 font-sans text-[9px] uppercase tracking-[0.22em] text-sky-600">Grandes momentos</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 reveal reveal-delay-1">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-sky-400" />
            <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-sky-700">Uma infância cheia de cor</p>
          </div>

          <h2 className="font-serif text-3xl leading-[1.12] text-sky-900 md:text-5xl lg:text-6xl text-balance">
            Para eles, cada detalhe.
          </h2>
          <p className="mt-3 font-serif text-2xl italic leading-tight text-rose-500 md:text-4xl">
            Para você, cada escolha.
          </p>

          <div className="my-9 h-px w-16 bg-sky-300" />

          <p className="max-w-xl font-sans text-base leading-[1.85] text-sky-800 md:text-lg">
            A Primeira Classe busca unir estilo, delicadeza e praticidade para acompanhar a infância — com peças, cores e detalhes escolhidos para transformar cada fase em uma lembrança especial.
          </p>

          <div className="mt-9 flex items-center gap-3">
            <svg width="120" height="20" viewBox="0 0 120 20" fill="none" aria-hidden="true">
              <path d="M2 14 C30 3 52 5 74 12 S100 17 118 5" stroke="#8EB5CC" strokeWidth="1.5" strokeDasharray="2 5" strokeLinecap="round" />
              <path d="M112 3 L120 5 L115 11 Z" fill="#6B9BB8" />
            </svg>
            <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-sky-600">Embarque nessa história</span>
          </div>
        </div>
      </div>
    </section>
  );
}
