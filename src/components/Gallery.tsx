import { ArrowRight } from 'lucide-react';

const GALLERY_IMAGES = [
  {
    url: 'https://images.pexels.com/photos/6261886/pexels-photo-6261886.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Crianças em moda infantil Primeira Classe Kids',
    span: 'lg:col-span-2 lg:row-span-2',
    aspect: 'aspect-square',
  },
  {
    url: 'https://images.pexels.com/photos/30690923/pexels-photo-30690923.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Menino em traje elegante Primeira Classe Kids',
    span: '',
    aspect: 'aspect-[4/5]',
  },
  {
    url: 'https://images.pexels.com/photos/15443075/pexels-photo-15443075.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Criança em look casual Primeira Classe Kids',
    span: '',
    aspect: 'aspect-[4/5]',
  },
  {
    url: 'https://images.pexels.com/photos/18862066/pexels-photo-18862066.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Menina com laço e jaqueta Primeira Classe Kids',
    span: 'lg:col-span-2',
    aspect: 'aspect-[16/10]',
  },
  {
    url: 'https://images.pexels.com/photos/33018404/pexels-photo-33018404.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Bebê em moda infantil Primeira Classe Kids',
    span: '',
    aspect: 'aspect-[4/5]',
  },
];

const INSTAGRAM_URL = 'https://www.instagram.com/__primeiraclasse/';

export function Gallery() {
  return (
    <section id="galeria" className="py-24 md:py-36 bg-creme-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 reveal">
          <div>
            <p className="font-sans text-xs tracking-ultra-wide text-sky-500 uppercase mb-4">
              Galeria
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-ink-900 leading-tight">
              A Primeira Classe no dia a dia
            </h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 font-sans text-sm text-ink-600 hover:text-sky-600 transition-colors duration-300"
          >
            Ver Instagram
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Asymmetric mosaic */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-auto">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-sm ${img.span} ${img.aspect} reveal`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/10 transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* Instagram handle */}
        <div className="text-center mt-10 reveal">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif text-2xl md:text-3xl text-sky-700 italic hover:text-sky-600 transition-colors duration-300"
          >
            @__primeiraclasse
          </a>
        </div>
      </div>
    </section>
  );
}
