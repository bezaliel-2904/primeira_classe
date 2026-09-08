import { Instagram } from 'lucide-react';
import { Logo } from './Logo';

const INSTAGRAM_URL = 'https://www.instagram.com/__primeiraclasse/';

const FOOTER_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Nossa história', href: '#nossa-historia' },
  { label: 'Coleções', href: '#colecoes' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Fale conosco', href: '#contato' },
];

export function Footer() {
  return (
    <footer className="bg-creme-100 pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo + description */}
          <div>
            <Logo />
            <p className="font-sans text-sm text-ink-400 mt-6 leading-relaxed max-w-xs">
              Boutique de moda infantil premium. Estilo, delicadeza e cuidado
              para acompanhar cada fase.
            </p>
          </div>

          {/* Links */}
          <div className="md:text-center">
            <p className="font-sans text-xs tracking-ultra-wide text-sky-500 uppercase mb-5">
              Navegação
            </p>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-ink-600 hover:text-sky-600 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:text-right">
            <p className="font-sans text-xs tracking-ultra-wide text-sky-500 uppercase mb-5">
              Contato
            </p>
            <div className="space-y-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-sans text-sm text-ink-600 hover:text-sky-600 transition-colors duration-300 md:justify-end"
              >
                <Instagram size={16} />
                @__primeiraclasse
              </a>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-sans text-sm text-ink-600 hover:text-sky-600 transition-colors duration-300 md:justify-end"
              >
                WhatsApp
              </a>
              <p className="font-sans text-sm text-ink-400 italic">
                [Endereço e horários disponíveis para edição]
              </p>
            </div>
          </div>
        </div>

        {/* Dotted trail + airplane divider */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex-1 h-px bg-creme-300" />
          <svg width="80" height="14" viewBox="0 0 80 14" fill="none">
            <path
              d="M2 8 Q20 3 40 6 T78 4"
              stroke="#8EB5CC"
              strokeWidth="1.5"
              strokeDasharray="2 4"
              strokeLinecap="round"
            />
            <path d="M74 2 L80 4 L76 8 Z" fill="#6B9BB8" />
          </svg>
          <div className="flex-1 h-px bg-creme-300" />
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-sans text-xs text-ink-400 tracking-wide">
            © 2026 Primeira Classe Kids
          </p>
        </div>
      </div>
    </footer>
  );
}
