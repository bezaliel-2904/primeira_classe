const CTA_IMAGE = 'https://images.pexels.com/photos/38778561/pexels-photo-38778561.jpeg?auto=compress&cs=tinysrgb&w=1400';
const CTA_FALLBACK = 'https://images.pexels.com/photos/33327417/pexels-photo-33327417.jpeg?auto=compress&cs=tinysrgb&w=1400';

export function FinalCTA() {
  return (
    <section id="contato" className="relative py-24 md:py-32 bg-creme-50 overflow-hidden">
      <div className="absolute inset-0 bg-sky-50">
        <img
          src={CTA_IMAGE}
          alt="Criança vestindo moda da Primeira Classe Kids"
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(event) => {
            if (event.currentTarget.src !== CTA_FALLBACK) event.currentTarget.src = CTA_FALLBACK;
          }}
        />
        <div className="absolute inset-0 bg-creme-50/75" />
      </div>

      <div className="absolute top-12 left-0 right-0 flex items-center pointer-events-none">
        <svg width="100%" height="50" viewBox="0 0 1200 50" fill="none" preserveAspectRatio="none" aria-hidden="true">
          <path d="M80 35 Q250 12 500 22 T1000 16 T1150 12" stroke="#8EB5CC" strokeWidth="2" strokeDasharray="2 6" strokeLinecap="round" />
          <path d="M1144 8 L1156 12 L1148 18 Z" fill="#6B9BB8" />
        </svg>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-10 text-center">
        <div className="reveal">
          <h2 className="font-serif text-4xl md:text-6xl text-ink-900 leading-[1.1] text-balance">Prontos para embarcar?</h2>
          <p className="font-sans text-lg text-ink-600 mt-6 leading-relaxed">Descubra a Primeira Classe Kids.</p>
          <div className="mt-10">
            <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-sans text-sm text-creme-50 bg-sky-600 hover:bg-sky-700 px-8 py-3.5 rounded-full transition-colors duration-300 tracking-wide">Fale conosco</a>
          </div>
          <p className="font-sans text-xs text-ink-400 mt-6 italic">[Insira o link oficial do WhatsApp aqui]</p>
        </div>
      </div>
    </section>
  );
}
