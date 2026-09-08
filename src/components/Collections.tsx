import { ArrowRight } from 'lucide-react';

const COLLECTIONS = [
  {
    name: 'Meninas',
    description: 'Vestidos, conjuntos e peças cheias de delicadeza para acompanhar cada descoberta.',
    image: 'https://images.pexels.com/photos/4715329/pexels-photo-4715329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    accent: 'rose',
  },
  {
    name: 'Meninos',
    description: 'Estilo e conforto para os pequenos aventureiros que vivem cada momento com intensidade.',
    image: 'https://images.pexels.com/photos/6612634/pexels-photo-6612634.jpeg?auto=compress&cs=tinysrgb&w=1000',
    accent: 'sky',
  },
  {
    name: 'Bebês',
    description: 'Pele delicada, tecidos suaves e o carinho que os primeiros dias merecem.',
    image: 'https://images.pexels.com/photos/36039/baby-twins-brother-and-sister-one-hundred-days.jpg?auto=compress&cs=tinysrgb&w=1000',
    accent: 'sky',
  },
  {
    name: 'Novidades',
    description: 'As últimas chegadas, peças selecionadas para a nova estação da Primeira Classe.',
    image: 'https://images.pexels.com/photos/6871798/pexels-photo-6871798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    accent: 'rose',
  },
];

export function Collections() {
  return (
    <section id="colecoes" className="py-24 md:py-36 bg-creme-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
              <path d="M2 8 Q10 3 18 6 T38 4" stroke="#8EB5CC" strokeWidth="1" strokeDasharray="2 4" strokeLinecap="round" />
            </svg>
            <p className="font-sans text-xs tracking-ultra-wide text-sky-500 uppercase">Coleções</p>
            <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
              <path d="M2 4 Q10 3 18 6 T38 8" stroke="#8EB5CC" strokeWidth="1" strokeDasharray="2 4" strokeLinecap="round" />
            </svg>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-ink-900 leading-tight">
            Embarque nas nossas coleções
          </h2>
        </div>

        {/* Collections grid — 2x2 large blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {COLLECTIONS.map((col, i) => (
            <a
              key={col.name}
              href="#contato"
              className="group relative overflow-hidden rounded-sm aspect-[4/3] md:aspect-[5/4] block reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <img
                src={col.image}
                alt={`Coleção ${col.name} da Primeira Classe Kids`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 via-ink-900/10 to-transparent transition-opacity duration-500 group-hover:from-ink-900/60" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                <h3 className="font-serif text-2xl md:text-3xl text-creme-50 mb-2 leading-tight">
                  {col.name}
                </h3>
                <p className="font-sans text-sm text-creme-100/90 max-w-xs leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  {col.description}
                </p>
                <div className="flex items-center gap-2 text-creme-50 font-sans text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <span>Explorar</span>
                  <ArrowRight size={15} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
