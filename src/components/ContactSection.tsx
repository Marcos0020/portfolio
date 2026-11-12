import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, FileText, Check, Copy, MessageSquare, Loader2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon } from './Icons';

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'service_rrfebdr';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_zidoxl8';
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || '3VlQqyA9LbqUth3_9';

const RATE_LIMIT_SECONDS = 45;
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

// Sanitização básica contra injeções de tags e caracteres de controle
const sanitizeInput = (val: string): string => {
  return val
    .replace(/\0/g, '')
    .replace(/[<>]/g, '')
    .trim();
};

interface ContactSectionProps {
  onOpenResumeModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResumeModal }) => {
  const { personal } = portfolioData;
  const formRef = useRef<HTMLFormElement>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // Campo armadilha para bots
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState('');

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSendError('');

    // 1. Defesa Anti-Bot (Honeypot Triggered)
    if (formState.honeypot.trim() !== '') {
      setIsSending(true);
      setTimeout(() => {
        setIsSending(false);
        setFormSubmitted(true);
      }, 600);
      return;
    }

    // 2. Sanitização e Validação Estrita de Input
    const cleanName = sanitizeInput(formState.name);
    const cleanEmail = formState.email.trim();
    const cleanSubject = sanitizeInput(formState.subject);
    const cleanMessage = sanitizeInput(formState.message);

    if (cleanName.length < 2) {
      setSendError('Por favor, informe seu nome com pelo menos 2 caracteres.');
      return;
    }

    if (!EMAIL_REGEX.test(cleanEmail)) {
      setSendError('Por favor, insira um endereço de e-mail válido.');
      return;
    }

    if (cleanMessage.length < 5) {
      setSendError('A mensagem deve conter pelo menos 5 caracteres.');
      return;
    }

    // 3. Rate Limiting Client-Side (Cooldown de 45s)
    const now = Date.now();
    const lastSent = localStorage.getItem('last_contact_sent_at');
    if (lastSent) {
      const elapsedSeconds = Math.floor((now - parseInt(lastSent, 10)) / 1000);
      if (elapsedSeconds < RATE_LIMIT_SECONDS) {
        const remaining = RATE_LIMIT_SECONDS - elapsedSeconds;
        setSendError(`Aguarde ${remaining}s antes de enviar uma nova mensagem.`);
        return;
      }
    }

    setIsSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name:    cleanName,
          email:   cleanEmail,
          subject: cleanSubject || 'Oportunidade Profissional',
          message: cleanMessage,
        },
        EMAILJS_PUBLIC_KEY
      );

      // Registra timestamp do envio bem-sucedido
      localStorage.setItem('last_contact_sent_at', String(Date.now()));

      setFormSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '', honeypot: '' });
    } catch (err) {
      console.error('[EmailJS] Erro ao enviar:', err);
      setSendError('Falha ao enviar. Tente novamente ou use o e-mail direto.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contato" className="py-24 relative bg-[#070b18] border-t border-[#172042]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="section-badge mb-3.5">
            <Send className="w-3.5 h-3.5 text-zinc-400" />
            <span>07 // CANAIS DE CONTATO</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Vamos Conversar sobre Novas Oportunidades?
          </h2>
          
          <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
            Aberto para vagas em Banco de Dados Oracle, Desenvolvimento SQL/PL-SQL, Suporte N2 e Sustentação de Sistemas de TI. Resposta rápida via e-mail ou WhatsApp.
          </p>
        </div>

        {/* Dual Layout: Direct Channels vs. Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Direct Channels */}
          <div className="lg:col-span-5 space-y-3.5">
            
            {/* Email Box */}
            <div className="rounded-xl p-4 sm:p-5 bg-[#0c1221] border border-[#172042] hover:border-[#1e3a6e] transition-all">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#111a30] border border-[#172042] flex items-center justify-center text-zinc-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400">E-mail Profissional</span>
                    <p className="text-xs sm:text-sm font-medium text-white break-all">
                      {personal.email}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personal.email, 'email')}
                  className="p-2 rounded-lg bg-[#111a30] border border-[#172042] hover:border-zinc-500 text-zinc-400 hover:text-white transition-colors"
                  title="Copiar E-mail"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Phone & WhatsApp Box */}
            <div className="rounded-xl p-4 sm:p-5 bg-[#0c1221] border border-[#172042] hover:border-[#1e3a6e] transition-all">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#111a30] border border-[#172042] flex items-center justify-center text-zinc-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400">Telefone & WhatsApp</span>
                    <p className="text-xs sm:text-sm font-medium text-white">
                      {personal.phone}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleCopy(personal.phone, 'phone')}
                    className="p-2 rounded-lg bg-[#111a30] border border-[#172042] hover:border-zinc-500 text-zinc-400 hover:text-white transition-colors"
                    title="Copiar Número"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={`https://wa.me/${personal.phoneClean}?text=Ol%C3%A1%20Marcos,%20encontrei%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-md bg-[#161f1c] text-emerald-400 border border-emerald-500/30 text-xs font-mono hover:bg-[#1a2822] transition-all"
                  >
                    Chamar
                  </a>
                </div>
              </div>
            </div>

            {/* Social Grid (LinkedIn & GitHub) */}
            <div className="grid grid-cols-2 gap-3.5">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl p-4 bg-[#0c1221] border border-[#172042] hover:border-[#1e3a6e] transition-all flex flex-col justify-between group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#111a30] border border-[#172042] flex items-center justify-center text-zinc-300 mb-2.5">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-400">Rede Profissional</span>
                  <p className="text-xs font-semibold text-white group-hover:underline mt-0.5">
                    LinkedIn &rarr;
                  </p>
                </div>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl p-4 bg-[#0c1221] border border-[#172042] hover:border-[#1e3a6e] transition-all flex flex-col justify-between group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#111a30] border border-[#172042] flex items-center justify-center text-zinc-300 mb-2.5">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-400">Repositórios</span>
                  <p className="text-xs font-semibold text-white group-hover:underline mt-0.5">
                    GitHub &rarr;
                  </p>
                </div>
              </a>
            </div>

            {/* Location & Resume Quick Link */}
            <div className="p-4 rounded-xl bg-[#0c1221] border border-[#172042] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>{personal.location}</span>
              </div>
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md border border-[#172042] text-zinc-300 hover:text-white hover:border-zinc-500 bg-[#111a30] transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-zinc-400" />
                <span>Currículo</span>
              </button>
            </div>

          </div>

          {/* Direct Message Console */}
          <div className="lg:col-span-7">
            <div className="rounded-xl p-6 sm:p-8 bg-[#0c1221] border border-[#172042] shadow-card">
              <div className="flex items-center gap-2 mb-6 text-sm font-semibold text-white">
                <MessageSquare className="w-4 h-4 text-zinc-400" />
                <span>Enviar Mensagem Direta</span>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-[#0d1a2d] border border-emerald-500/40 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">Mensagem Enviada!</h4>
                  <p className="text-xs text-zinc-300 max-w-md mx-auto">
                    Sua mensagem chegou direto ao meu e-mail. Responderei em breve!
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-zinc-300 underline font-mono"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field (invisível para humanos, armadilha para bots) */}
                  <div className="opacity-0 pointer-events-none absolute -left-[9999px] -top-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true" tabIndex={-1}>
                    <label htmlFor="hp_company_website">Não preencha este campo se você for humano:</label>
                    <input
                      id="hp_company_website"
                      type="text"
                      name="hp_company_website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formState.honeypot}
                      onChange={(e) => setFormState({ ...formState, honeypot: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                        Seu Nome ou Empresa *
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={100}
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Ex: Ana Silva / Tech Recruiter"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1628] border border-[#172042] text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                        Seu E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        maxLength={120}
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="seu.email@empresa.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1628] border border-[#172042] text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Assunto da Mensagem
                    </label>
                    <input
                      type="text"
                      maxLength={150}
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Ex: Oportunidade para Analista de Banco de Dados"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1628] border border-[#172042] text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Mensagem *
                    </label>
                    <textarea
                      rows={4}
                      required
                      maxLength={2500}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Descreva a vaga ou projeto que gostaria de conversar comigo..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0e1628] border border-[#172042] text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-400 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {sendError && (
                    <p className="text-xs text-red-400 text-center font-mono">{sendError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-zinc-100 text-zinc-950 font-bold text-xs hover:bg-white transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-subtle"
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Disparar Mensagem de Contato</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
