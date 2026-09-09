import { ArrowRight, Plane } from 'lucide-react';

const COLLECTIONS = [
  { name: 'Meninas', description: 'Vestidos, conjuntos e peças cheias de delicadeza para acompanhar cada descoberta.', image: 'https://images.pexels.com/photos/13965360/pexels-photo-13965360.jpeg?auto=compress&cs=tinysrgb&w=1200', accent: 'rose' },
  { name: 'Meninos', description: 'Estilo e conforto para os pequenos aventureiros que vivem cada momento com intensidade.', image: 'https://images.pexels.com/photos/9648666/pexels-photo-9648666.jpeg?auto=compress&cs=tinysrgb&w=1200', accent: 'sky' },
  { name: 'Bebês', description: 'Pele delicada, tecidos suaves e o carinho que os primeiros dias merecem.', image: 'https://images.pexels.com/photos/19230232/pexels-photo-19230232.jpeg?auto=compress&cs=tinysrgb&w=1200', accent: 'sky' },
  { name: 'Novidades', description: 'As últimas chegadas, peças selecionadas para a nova estação da Primeira Classe.', image: 'https://images.pexels.com/photos/30110305/pexels-photo-30110305.jpeg?auto=compress&cs=tinysrgb&w=1200', accent: 'rose' },
];

const IMAGE_FALLBACK = 'https://images.pexels.com/photos/30110306/pexels-photo-30110306.jpeg?auto=compress&cs=tinysrgb&w=1400';

export function Collections() {
  return (
    <section id="colecoes" className="relative py-20 md:py-28 bg-creme-100 overflow-hidden">
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-sky-100/35 blur-3xl" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-12 md:mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-5"><span className="w-10 h-px bg-sky-300" /><p className="font-sans text-[10px] tracking-[0.28em] text-sky-600 uppercase">Coleções</p><span className="w-10 h-px bg-sky-300" /></div>
          <h2 className="font-serif text-3xl md:text-5xl text-ink-900 leading-tight text-balance">Embarque nas nossas coleções</h2>
          <p className="font-sans text-sm text-ink-400 mt-5 max-w-lg mx-auto leading-relaxed">Uma curadoria pensada para diferentes fases da infância, com leveza, estilo e personalidade.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
          {COLLECTIONS.map((col, i) => (
            <a key={col.name} href="#contato" className="group relative overflow-hidden rounded-[2px] aspect-[4/3] md:aspect-[5/4] block reveal border border-white/70 shadow-lg shadow-ink-900/5" style={{ transitionDelay: `${i * 0.1}s` }}>
              <img src={col.image} alt={`Coleção ${col.name} da Primeira Classe Kids`} className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.045] bg-sky-50" loading="lazy" onError={(event) => { if (event.currentTarget.src !== IMAGE_FALLBACK) event.currentTarget.src = IMAGE_FALLBACK; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-9"><div className="flex items-end justify-between gap-5"><div><p className="font-sans text-[9px] tracking-[0.22em] text-white/70 uppercase mb-2">Coleção</p><h3 className="font-serif text-2xl md:text-3xl text-white leading-tight">{col.name}</h3><p className="font-sans text-[13px] text-white/80 max-w-sm leading-relaxed mt-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">{col.description}</p></div><span className="shrink-0 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-sky-700 group-hover:bg-sky-700 group-hover:text-white transition-all duration-300"><ArrowRight size={17} className="group-hover:translate-x-0.5 transition-transform" /></span></div></div>
              <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white/90"><Plane size={14} strokeWidth={1.5} className="-rotate-12" /></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
