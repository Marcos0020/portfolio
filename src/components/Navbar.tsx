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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#090a0f]/90 backdrop-blur-md border-b border-[#232838] py-3.5 shadow-subtle'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Identity */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-[#141722] border border-[#232838] flex items-center justify-center text-zinc-300 group-hover:border-[#38bdf8] group-hover:text-white transition-colors">
            <Database className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm text-zinc-100 tracking-tight flex items-center gap-2">
              Marcos Sousa
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" title="Disponível para oportunidades" />
            </span>
            <span className="text-[11px] font-mono text-zinc-400 tracking-normal">
              Analista de Banco de Dados · Dev SQL/PL-SQL · Suporte N1/N2
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0f1118]/80 px-3 py-1.5 rounded-lg border border-[#232838] backdrop-blur-sm mr-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-zinc-400 hover:text-zinc-100 px-3 py-1.5 rounded-md hover:bg-[#181c28] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg border border-[#232838] text-zinc-300 hover:text-white hover:border-[#3b4259] bg-[#0f1118] transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-zinc-400" />
            <span>Currículo</span>
          </button>
          
          <a
            href="#contato"
            className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-zinc-100 text-zinc-950 hover:bg-white transition-all shadow-sm"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Falar Comigo</span>
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenResumeModal}
            className="sm:hidden p-2 rounded-lg border border-[#232838] text-zinc-300 bg-[#0f1118]"
            title="Ver Currículo"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-[#232838] text-zinc-400 hover:text-zinc-100 bg-[#0f1118] focus:outline-none"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#232838] bg-[#0c0d14]/98 backdrop-blur-xl px-4 pt-4 pb-6 mt-3 space-y-3">
          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-medium text-zinc-300 hover:text-white p-2.5 rounded-md hover:bg-[#151824] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#232838] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-[#232838] text-zinc-300 text-xs font-medium bg-[#131622]"
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
