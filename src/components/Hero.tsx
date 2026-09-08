import { ArrowRight, MessageCircle } from 'lucide-react';

const HERO_IMAGE = 'https://images.pexels.com/photos/1620759/pexels-photo-1620759.jpeg?auto=compress&cs=tinysrgb&w=1400';
const INSTAGRAM_URL = 'https://www.instagram.com/__primeiraclasse/';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center bg-creme-50 pt-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Text */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
            <div className="reveal is-visible">
              <p className="font-sans text-xs tracking-ultra-wide text-sky-500 uppercase mb-6">
                Boutique de Moda Infantil
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink-900 leading-[1.1] text-balance">
                Pequenos estilos.
                <br />
                <span className="italic text-sky-700">Grandes</span> momentos.
              </h1>
              <p className="font-sans text-base md:text-lg text-ink-500 mt-8 leading-relaxed max-w-md">
                Moda infantil para acompanhar cada fase, cada descoberta e cada momento especial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <a
                  href="#colecoes"
                  className="group flex items-center justify-center gap-2 font-sans text-sm text-sky-700 border border-sky-300 px-7 py-3 rounded-full hover:bg-sky-50 transition-all duration-300 tracking-wide"
                >
                  Conheça nossas coleções
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a
                  href="#contato"
                  className="group flex items-center justify-center gap-2 font-sans text-sm text-ink-700 hover:text-sky-600 transition-colors duration-300 tracking-wide px-4"
                >
                  <MessageCircle size={15} />
                  Fale conosco
                </a>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            <div className="relative overflow-hidden rounded-sm aspect-[4/5] lg:aspect-[3/4]">
              <img
                src={HERO_IMAGE}
                alt="Crianças vestindo moda da Primeira Classe Kids em estilo náutico"
                className="w-full h-full object-cover animate-slow-zoom"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-creme-50/30 to-transparent" />
            </div>
            {/* Small airplane detail */}
            <div className="absolute -top-4 -left-4 hidden lg:block animate-float">
              <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
                <path
                  d="M2 22 Q15 8 30 14 T56 10"
                  stroke="#8EB5CC"
                  strokeWidth="1.5"
                  strokeDasharray="2 4"
                  strokeLinecap="round"
                />
                <path d="M52 8 L58 10 L54 14 Z" fill="#6B9BB8" />
              </svg>
            </div>
            {/* Instagram tag */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-creme-50/90 backdrop-blur-sm px-4 py-2 rounded-full font-sans text-xs text-ink-600 tracking-wide hover:bg-creme-100 transition-colors duration-300"
            >
              @__primeiraclasse
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-sky-300 to-transparent" />
        <span className="font-sans text-[10px] tracking-extra-wide text-ink-400 uppercase">Role</span>
      </div>
    </section>
  );
}
