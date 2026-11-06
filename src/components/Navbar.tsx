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
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'IA & Ferramentas', href: '#ia-tools' },
    { label: 'Tecnologias', href: '#skills' },
    { label: 'Formação', href: '#formacao' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-darkBg/85 backdrop-blur-md border-b border-sky-500/15 py-3 shadow-lg shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-cyan-400 p-[1px] shadow-sm shadow-cyan-500/30 group-hover:shadow-cyan-400/50 transition-all">
            <div className="w-full h-full bg-darkBg rounded-[11px] flex items-center justify-center font-mono font-bold text-sky-400 text-sm tracking-tighter group-hover:text-cyan-300">
              <Database className="w-4 h-4 text-sky-400 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base text-slate-100 tracking-tight flex items-center gap-1">
              Marcos Sousa <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            </span>
            <span className="text-[11px] font-mono text-slate-400">Analista de Banco de Dados · Dev SQL/PL-SQL · Suporte N1/N2</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/40 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-slate-300 hover:text-cyan-400 px-3.5 py-1.5 rounded-full hover:bg-slate-800/60 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg border border-sky-500/30 text-sky-300 hover:bg-sky-500/10 hover:border-sky-400 transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Currículo</span>
          </button>
          <a
            href="#contato"
            className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 text-slate-950 hover:brightness-110 shadow-sm shadow-sky-500/20 transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Falar Comigo</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenResumeModal}
            className="sm:hidden p-2 rounded-lg border border-sky-500/30 text-sky-400"
            title="Ver Currículo"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-cyan-400 focus:outline-none"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-darkBg/95 backdrop-blur-xl border-b border-sky-500/20 px-4 pt-3 pb-6 animate-in slide-in-from-top-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-200 hover:text-cyan-400 py-2.5 px-3 rounded-lg hover:bg-slate-800/50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2 border-t border-slate-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full flex items-center justify-center gap-2 text-xs font-semibold py-2.5 rounded-lg border border-sky-500/40 text-sky-300 hover:bg-sky-500/10"
              >
                <FileText className="w-4 h-4" />
                <span>Ver Resumo Curricular</span>
              </button>
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 text-xs font-semibold py-2.5 rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 text-slate-950 font-bold"
              >
                <Send className="w-4 h-4" />
                <span>Entrar em Contato</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
