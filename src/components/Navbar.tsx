import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Database, Send } from 'lucide-react';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início',      href: '#inicio' },
    { label: 'Sobre',       href: '#sobre' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Projetos',    href: '#projetos' },
    { label: 'IA & Ferramentas', href: '#ia-tools' },
    { label: 'Tecnologias', href: '#skills' },
    { label: 'Formação',    href: '#formacao' },
    { label: 'Contato',     href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#080910]/92 backdrop-blur-md border-b border-[#1c2030] py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Brand */}
        <a href="#inicio" className="flex items-center gap-3 group shrink-0">
          <div className="w-9 h-9 rounded-lg bg-[#0c0e18] border border-[#1c2030] flex items-center justify-center text-zinc-400 group-hover:border-[#2a3050] group-hover:text-zinc-200 transition-colors">
            <Database className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm text-zinc-100 tracking-tight flex items-center gap-2">
              Marcos Sousa
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" title="Disponível" />
            </span>
            <span className="text-[10px] font-mono text-zinc-500 tracking-normal leading-tight">
              Analista de Banco de Dados · Dev SQL/PL-SQL · Suporte N1/N2
            </span>
          </div>
        </a>

        {/* Desktop nav capsule */}
        <nav className="hidden lg:flex items-center gap-0.5 bg-[#0c0e18]/90 px-2 py-1.5 rounded-lg border border-[#1c2030] backdrop-blur-sm mr-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-zinc-500 hover:text-zinc-100 px-2.5 py-1.5 rounded-md hover:bg-[#111525] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg border border-[#1c2030] text-zinc-400 hover:text-zinc-100 hover:border-[#2a3050] bg-[#0c0e18] transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Currículo</span>
          </button>

          <a
            href="#contato"
            className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-zinc-100 text-zinc-950 hover:bg-white transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Falar Comigo</span>
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenResumeModal}
            className="sm:hidden p-2 rounded-lg border border-[#1c2030] text-zinc-400 bg-[#0c0e18]"
            title="Ver Currículo"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-[#1c2030] text-zinc-400 hover:text-zinc-100 bg-[#0c0e18] focus:outline-none transition-colors"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#1c2030] bg-[#080910]/98 backdrop-blur-xl px-4 pt-4 pb-6 mt-2 space-y-3">
          <div className="grid grid-cols-2 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-medium text-zinc-400 hover:text-white p-2.5 rounded-md hover:bg-[#0c0e18] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#1c2030] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-[#1c2030] text-zinc-300 text-xs font-medium bg-[#0c0e18]"
            >
              <FileText className="w-4 h-4" />
              <span>Visualizar Currículo Oficial</span>
            </button>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-100 text-zinc-950 text-xs font-bold"
            >
              <Send className="w-4 h-4" />
              <span>Entrar em Contato</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
