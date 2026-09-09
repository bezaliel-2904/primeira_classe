const PICKS = [
  { name: 'Vestido Floral Primavera', category: 'Meninas', image: 'https://images.pexels.com/photos/14757473/pexels-photo-14757473.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Conjunto Colorido', category: 'Meninos', image: 'https://images.pexels.com/photos/9648666/pexels-photo-9648666.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Look de Verão', category: 'Bebês', image: 'https://images.pexels.com/photos/19230232/pexels-photo-19230232.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Look Fashion', category: 'Meninas', image: 'https://images.pexels.com/photos/7330586/pexels-photo-7330586.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

const INSTAGRAM_URL = 'https://www.instagram.com/__primeiraclasse/';
const IMAGE_FALLBACK = 'https://images.pexels.com/photos/30110306/pexels-photo-30110306.jpeg?auto=compress&cs=tinysrgb&w=1400';

export function Picks() {
  return (
    <section className="py-20 md:py-28 bg-creme-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16 reveal">
          <p className="font-sans text-xs tracking-ultra-wide text-rose-400 uppercase mb-4">Curadoria</p>
          <h2 className="font-serif text-3xl md:text-5xl text-ink-900 leading-tight">Escolhas da Primeira Classe</h2>
          <p className="font-sans text-base text-ink-500 mt-6 max-w-lg mx-auto leading-relaxed">Peças selecionadas a dedo, pensadas para cada fase e cada momento especial.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {PICKS.map((item, i) => (
            <div key={item.name} className="group reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="overflow-hidden rounded-sm aspect-[3/4] mb-4 bg-sky-50">
                <img src={item.image} alt={`${item.name} — coleção ${item.category} Primeira Classe Kids`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04] saturate-[1.1]" loading="lazy" onError={(event) => { if (event.currentTarget.src !== IMAGE_FALLBACK) event.currentTarget.src = IMAGE_FALLBACK; }} />
              </div>
              <p className="font-sans text-[10px] tracking-extra-wide text-sky-500 uppercase mb-1">{item.category}</p>
              <h3 className="font-serif text-lg md:text-xl text-ink-800 leading-snug mb-2">{item.name}</h3>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="font-sans text-xs text-ink-500 hover:text-sky-600 transition-colors duration-300 inline-flex items-center gap-1 border-b border-ink-300 hover:border-sky-400 pb-0.5">Consultar disponibilidade</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
