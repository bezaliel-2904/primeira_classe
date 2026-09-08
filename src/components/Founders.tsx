const FOUNDERS_IMAGE = 'https://images.pexels.com/photos/8485594/pexels-photo-8485594.jpeg?auto=compress&cs=tinysrgb&w=1200';

export function Founders() {
  return (
    <section id="nossa-historia" className="py-24 md:py-36 bg-creme-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-6 reveal">
            <div className="relative">
              <div className="overflow-hidden rounded-sm aspect-[4/5] image-reveal">
                <img
                  src={FOUNDERS_IMAGE}
                  alt="Os fundadores da Primeira Classe Kids"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-sky-200 rounded-sm -z-0" />
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-6 reveal reveal-delay-1">
            <p className="font-sans text-xs tracking-ultra-wide text-rose-400 uppercase mb-5">
              Os fundadores da Primeira Classe Kids
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink-900 leading-[1.15] text-balance">
              Por trás da Primeira Classe
            </h2>
            <div className="w-16 h-px bg-sky-300 my-8" />
            <p className="font-serif text-xl md:text-2xl text-sky-700 italic leading-relaxed mb-6">
              "Toda marca começa com uma história."
            </p>
            <div className="space-y-5 font-sans text-base text-ink-500 leading-relaxed">
              <p>
                A Primeira Classe Kids nasceu do desejo de vestir a infância com delicadeza,
                estilo e afeto. Cada peça é pensada para acompanhar os primeiros passos,
                as primeiras descobertas e os momentos que ficam.
              </p>
              <p>
                Aqui, a moda infantil encontra a curadoria de uma boutique. Sem excessos,
                sem pressa — apenas o essencial, feito com cuidado para cada fase da jornada.
              </p>
            </div>
            <p className="font-sans text-sm text-ink-400 mt-8 italic">
              [Nomes dos fundadores, ano de criação e história disponíveis para edição]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
