import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Plane } from 'lucide-react';
import { Logo } from './Logo';

const NAV_ITEMS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Nossa história', href: '#nossa-historia' },
  { label: 'Coleções', href: '#colecoes' },
];

const INSTAGRAM_URL = 'https://www.instagram.com/__primeiraclasse/';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-creme-50/92 backdrop-blur-xl shadow-[0_10px_35px_rgba(44,74,94,0.07)] border-b border-sky-100/70'
            : 'bg-creme-50/20 backdrop-blur-[2px]'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-[76px]">
            <a href="#inicio" className="shrink-0 transition-transform duration-300 hover:scale-[1.02]">
              <Logo />
            </a>

            <nav className="hidden lg:flex items-center gap-10">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-sans text-[13px] text-ink-700 hover:text-sky-700 transition-colors duration-300 relative group tracking-[0.04em]"
                >
                  {item.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-px bg-sky-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-6">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-sans text-[13px] text-ink-600 hover:text-sky-700 transition-colors duration-300"
              >
                <Instagram size={15} strokeWidth={1.5} />
                <span>Instagram</span>
              </a>
              <a
                href="#contato"
                className="group flex items-center gap-2 font-sans text-[13px] text-white bg-sky-700 px-5 py-2.5 rounded-full hover:bg-sky-800 hover:shadow-lg hover:shadow-sky-900/10 transition-all duration-300 tracking-wide"
              >
                Fale conosco
                <Plane size={14} strokeWidth={1.6} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <button
              className="lg:hidden p-2 text-ink-700"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-creme-50 transition-transform duration-500 lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-[76px] px-6 border-b border-sky-100">
          <Logo />
          <button onClick={() => setMenuOpen(false)} aria-label="Fechar menu" className="p-2 text-ink-700">
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>
        <nav className="flex flex-col items-center gap-7 mt-16 px-6">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-3xl text-ink-800 hover:text-sky-700 transition-colors duration-300"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`,
              }}
            >
              {item.label}
            </a>
          ))}
          <div className="w-12 h-px bg-sky-200 my-4" />
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-sans text-base text-ink-700">
            <Instagram size={18} /> Instagram
          </a>
          <a href="#contato" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 font-sans text-base text-white bg-sky-700 px-7 py-3 rounded-full mt-2">
            Fale conosco <Plane size={15} />
          </a>
        </nav>
      </div>
    </>
  );
}
