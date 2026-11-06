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
    // Se o bot preencheu o campo invisível, simulamos sucesso silenciosamente (drop sem gastar cota)
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
    <section id="contato" className="py-24 relative bg-darkBg border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Send className="w-3.5 h-3.5" /> CANAIS DE CONTATO
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Vamos Conversar sobre Novas Oportunidades?
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Aberto para vagas em Banco de Dados Oracle, Desenvolvimento SQL/PL-SQL, Suporte N2 e Sustentação de Sistemas de TI. Resposta rápida via e-mail ou WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          <div className="lg:col-span-5 space-y-4">
            
            <div className="glass-panel rounded-2xl p-5 border border-slate-800 hover:border-sky-500/40 transition-all">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400">E-mail Profissional</span>
                    <p className="text-sm font-semibold text-white break-all">
                      {personal.email}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personal.email, 'email')}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-400 text-slate-400 hover:text-sky-400 transition-colors"
                  title="Copiar E-mail"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-5 border border-slate-800 hover:border-emerald-500/40 transition-all">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400">Telefone & WhatsApp</span>
                    <p className="text-sm font-semibold text-white">
                      {personal.phone}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleCopy(personal.phone, 'phone')}
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-400 text-slate-400 hover:text-emerald-400 transition-colors"
                    title="Copiar Número"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={`https://wa.me/${personal.phoneClean}?text=Ol%C3%A1%20Marcos,%20encontrei%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold hover:bg-emerald-500/30 transition-all"
                  >
                    Chamar
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel rounded-2xl p-5 border border-slate-800 hover:border-sky-500/40 transition-all flex flex-col justify-between group"
              >
                <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-3 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400">Rede Profissional</span>
                  <p className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors mt-0.5">
                    LinkedIn &rarr;
                  </p>
                </div>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel rounded-2xl p-5 border border-slate-800 hover:border-slate-600 transition-all flex flex-col justify-between group"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-200 mb-3 group-hover:scale-110 transition-transform">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400">Repositórios</span>
                  <p className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors mt-0.5">
                    GitHub &rarr;
                  </p>
                </div>
              </a>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{personal.location}</span>
              </div>
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-sky-500/40 text-sky-300 hover:bg-sky-500/10"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Currículo</span>
              </button>
            </div>

          </div>

          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-sky-500/20 shadow-2xl">
              <div className="flex items-center gap-2 mb-6 text-sm font-semibold text-white">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>Enviar Mensagem Direta</span>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Mensagem Enviada!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Sua mensagem chegou direto ao meu e-mail. Responderei em breve!
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-cyan-400 underline font-mono"
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
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        Seu Nome ou Empresa *
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={100}
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Ex: Ana Silva / Tech Recruiter"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">
                        Seu E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        maxLength={120}
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="seu.email@empresa.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Assunto da Mensagem
                    </label>
                    <input
                      type="text"
                      maxLength={150}
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Ex: Oportunidade para Analista de Banco de Dados"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Mensagem *
                    </label>
                    <textarea
                      rows={4}
                      required
                      maxLength={2500}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Descreva a vaga ou projeto que gostaria de conversar comigo..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {sendError && (
                    <p className="text-xs text-red-400 text-center font-mono">{sendError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-slate-950 font-bold text-xs shadow-lg shadow-sky-500/20 hover:brightness-110 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
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
