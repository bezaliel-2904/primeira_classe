import { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { Logo } from './Logo';

const NAV_ITEMS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Nossa história', href: '#nossa-historia' },
  { label: 'Meninas', href: '#colecoes' },
  { label: 'Meninos', href: '#colecoes' },
  { label: 'Bebês', href: '#colecoes' },
  { label: 'Coleções', href: '#colecoes' },
];

const INSTAGRAM_URL = 'https://www.instagram.com/__primeiraclasse/';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
            ? 'bg-creme-50/95 backdrop-blur-sm shadow-[0_1px_3px_rgba(44,74,94,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#inicio" className="shrink-0">
              <Logo />
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-sans text-sm text-ink-700 hover:text-sky-600 transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-sky-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right actions */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-sans text-sm text-ink-700 hover:text-sky-600 transition-colors duration-300"
              >
                <Instagram size={16} />
                <span>Instagram</span>
              </a>
              <a
                href="#contato"
                className="font-sans text-sm text-sky-700 border border-sky-300 px-5 py-2 rounded-full hover:bg-sky-50 transition-colors duration-300 tracking-wide"
              >
                Fale conosco
              </a>
            </div>

            {/* Mobile menu button */}
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

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-creme-50 transition-transform duration-500 lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-20 px-6">
          <Logo />
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Fechar menu"
            className="p-2 text-ink-700"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>
        <nav className="flex flex-col items-center gap-6 mt-16">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-3xl text-ink-800 hover:text-sky-600 transition-colors duration-300"
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
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-sans text-base text-ink-700"
          >
            <Instagram size={18} />
            Instagram
          </a>
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="font-sans text-base text-sky-700 border border-sky-300 px-6 py-2.5 rounded-full mt-2"
          >
            Fale conosco
          </a>
        </nav>
      </div>
    </>
  );
}
