const FOUNDERS_IMAGE = 'https://images.pexels.com/photos/8485594/pexels-photo-8485594.jpeg?auto=compress&cs=tinysrgb&w=1200';

export function Founders() {
  return (
    <section id="nossa-historia" className="relative py-24 md:py-36 bg-creme-100 overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-rose-100/25 blur-3xl" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6 reveal">
            <div className="relative pr-4 pb-4">
              <div className="overflow-hidden rounded-[2px] aspect-[4/5] image-reveal shadow-xl shadow-ink-900/8">
                <img
                  src={FOUNDERS_IMAGE}
                  alt="Os fundadores da Primeira Classe Kids"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-24 h-24 border border-sky-200 rounded-[2px] -z-0" />
              <div className="absolute left-5 bottom-5 bg-creme-50/90 backdrop-blur-md px-5 py-3 border border-white/60">
                <p className="font-serif text-lg text-ink-800">Primeira Classe</p>
                <p className="font-sans text-[9px] tracking-[0.22em] text-sky-600 uppercase mt-1">Kids · Boutique</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 reveal reveal-delay-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-rose-300" />
              <p className="font-sans text-[10px] tracking-[0.26em] text-rose-500 uppercase">Nossa história</p>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink-900 leading-[1.12] text-balance">
              Por trás da Primeira Classe
            </h2>
            <div className="w-16 h-px bg-sky-300 my-8" />
            <p className="font-serif text-xl md:text-2xl text-sky-700 italic leading-relaxed mb-7">
              “Toda marca começa com uma história.”
            </p>
            <div className="space-y-5 font-sans text-[15px] text-ink-500 leading-[1.85] max-w-xl">
              <p>
                A Primeira Classe Kids nasceu do desejo de vestir a infância com delicadeza,
                estilo e afeto. Cada peça é pensada para acompanhar os primeiros passos,
                as primeiras descobertas e os momentos que ficam.
              </p>
              <p>
                Aqui, a moda infantil encontra a curadoria de uma boutique. Sem excessos,
                sem pressa — apenas o essencial, escolhido com cuidado para cada fase da jornada.
              </p>
            </div>
            <div className="flex items-center gap-4 mt-9 pt-6 border-t border-sky-200/70 max-w-xl">
              <span className="w-8 h-px bg-sky-400" />
              <span className="font-sans text-[10px] tracking-[0.2em] text-ink-400 uppercase">Feito para pequenos grandes momentos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
