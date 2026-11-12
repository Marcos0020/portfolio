import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Database, Send } from 'lucide-react';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início',       href: '#inicio' },
    { label: 'Sobre',        href: '#sobre' },
    { label: 'Experiência',  href: '#experiencia' },
    { label: 'Projetos',     href: '#projetos' },
    { label: 'IA & Ferramentas', href: '#ia-tools' },
    { label: 'Tecnologias',  href: '#skills' },
    { label: 'Formação',     href: '#formacao' },
    { label: 'Contato',      href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070b18]/95 backdrop-blur-lg border-b border-[#172042]/60 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Brand */}
        <a href="#inicio" className="flex items-center gap-3 group shrink-0">
          <div className="w-9 h-9 rounded-xl bg-[#0c1221] border border-[#172042] flex items-center justify-center text-blue-400 group-hover:border-blue-500/40 group-hover:shadow-blue-sm transition-all">
            <Database className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm text-white tracking-tight flex items-center gap-2">
              Marcos Sousa
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" title="Disponível" />
            </span>
            <span className="text-[10px] font-mono text-slate-500 tracking-normal leading-tight">
              Analista de Banco de Dados · Dev SQL/PL-SQL · Suporte N1/N2
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5 bg-[#0c1221]/80 px-2.5 py-1.5 rounded-xl border border-[#172042] backdrop-blur-md mr-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium text-slate-400 hover:text-white px-2.5 py-1.5 rounded-lg hover:bg-[#111a30] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-xl border border-[#172042] text-slate-300 hover:text-white hover:border-blue-500/40 bg-[#0c1221] transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-slate-500" />
            <span>Currículo</span>
          </button>
          <a
            href="#contato"
            className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-blue-sm"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Falar Comigo</span>
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenResumeModal}
            className="sm:hidden p-2 rounded-xl border border-[#172042] text-slate-400 bg-[#0c1221]"
            title="Ver Currículo"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border border-[#172042] text-slate-400 hover:text-white bg-[#0c1221] transition-colors"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#172042] bg-[#070b18]/98 backdrop-blur-xl px-4 pt-4 pb-6 mt-2 space-y-3">
          <div className="grid grid-cols-2 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-medium text-slate-400 hover:text-white p-2.5 rounded-lg hover:bg-[#0c1221] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#172042] flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenResumeModal(); }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#172042] text-slate-300 text-xs font-medium bg-[#0c1221]"
            >
              <FileText className="w-4 h-4" /> Visualizar Currículo Oficial
            </button>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold"
            >
              <Send className="w-4 h-4" /> Entrar em Contato
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
