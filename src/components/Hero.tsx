import { ArrowRight, MessageCircle, Plane } from 'lucide-react';

const HERO_IMAGE = 'https://images.pexels.com/photos/1620759/pexels-photo-1620759.jpeg?auto=compress&cs=tinysrgb&w=1400';
const INSTAGRAM_URL = 'https://www.instagram.com/__primeiraclasse/';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-creme-50 pt-24 pb-16 overflow-hidden">
      <div className="absolute top-28 -left-24 w-72 h-72 rounded-full bg-sky-100/40 blur-3xl" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-rose-100/30 blur-3xl" />

      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
            <div className="reveal is-visible">
              <div className="flex items-center gap-3 mb-7">
                <span className="h-px w-10 bg-sky-400" />
                <p className="font-sans text-[10px] tracking-[0.28em] text-sky-600 uppercase">
                  Boutique de Moda Infantil
                </p>
              </div>
              <h1 className="font-serif text-[2.7rem] md:text-5xl lg:text-[4.25rem] text-ink-900 leading-[1.02] text-balance">
                Pequenos estilos.
                <br />
                <span className="italic text-sky-700">Grandes</span> momentos.
              </h1>
              <p className="font-sans text-base md:text-[17px] text-ink-500 mt-8 leading-[1.8] max-w-md">
                Moda infantil escolhida com cuidado para acompanhar cada fase, cada descoberta e cada momento especial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <a
                  href="#colecoes"
                  className="group flex items-center justify-center gap-2 font-sans text-[13px] text-white bg-sky-700 px-7 py-3.5 rounded-full hover:bg-sky-800 hover:shadow-xl hover:shadow-sky-900/10 transition-all duration-300 tracking-wide"
                >
                  Conheça nossas coleções
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a
                  href="#contato"
                  className="group flex items-center justify-center gap-2 font-sans text-[13px] text-ink-700 hover:text-sky-700 transition-colors duration-300 tracking-wide px-3"
                >
                  <MessageCircle size={15} strokeWidth={1.6} />
                  Fale conosco
                </a>
              </div>

              <div className="flex items-center gap-6 mt-12 pt-6 border-t border-sky-100 max-w-md">
                <div>
                  <p className="font-serif text-xl text-ink-800">Infância</p>
                  <p className="font-sans text-[10px] tracking-[0.16em] text-ink-400 uppercase mt-1">com delicadeza</p>
                </div>
                <span className="w-px h-8 bg-sky-200" />
                <div className="flex items-center gap-2 text-sky-700">
                  <Plane size={16} strokeWidth={1.5} />
                  <p className="font-sans text-[10px] tracking-[0.16em] uppercase">Embarque nessa história</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            <div className="absolute -inset-3 border border-sky-100 rounded-[2px] -z-10 translate-x-3 translate-y-3" />
            <div className="relative overflow-hidden rounded-[2px] aspect-[4/5] lg:aspect-[3/4] shadow-2xl shadow-ink-900/10">
              <img
                src={HERO_IMAGE}
                alt="Crianças vestindo moda da Primeira Classe Kids em estilo náutico"
                className="w-full h-full object-cover animate-slow-zoom"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/20 via-transparent to-creme-50/5" />
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-5 right-5 bg-creme-50/90 backdrop-blur-md px-4 py-2.5 rounded-full font-sans text-[11px] text-ink-600 tracking-wide hover:bg-white transition-colors duration-300"
              >
                @__primeiraclasse
              </a>
            </div>

            <div className="absolute -top-7 -left-7 hidden lg:flex items-center justify-center w-14 h-14 rounded-full bg-creme-50 border border-sky-100 shadow-lg animate-float">
              <Plane size={21} strokeWidth={1.4} className="text-sky-600 -rotate-12" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-3 text-ink-400">
        <span className="w-8 h-px bg-sky-200" />
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase">Role para explorar</span>
        <span className="w-8 h-px bg-sky-200" />
      </div>
    </section>
  );
}
