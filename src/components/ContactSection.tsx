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

const sanitizeInput = (val: string): string => {
  return val.replace(/\0/g, '').replace(/[<>]/g, '').trim();
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
    name: '', email: '', subject: '', message: '', honeypot: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState('');

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') { setCopiedEmail(true); setTimeout(() => setCopiedEmail(false), 2500); }
    else { setCopiedPhone(true); setTimeout(() => setCopiedPhone(false), 2500); }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSendError('');

    // 1. Honeypot
    if (formState.honeypot.trim() !== '') {
      setIsSending(true);
      setTimeout(() => { setIsSending(false); setFormSubmitted(true); }, 600);
      return;
    }

    // 2. Sanitização
    const cleanName    = sanitizeInput(formState.name);
    const cleanEmail   = formState.email.trim();
    const cleanSubject = sanitizeInput(formState.subject);
    const cleanMessage = sanitizeInput(formState.message);

    if (cleanName.length < 2) { setSendError('Por favor, informe seu nome com pelo menos 2 caracteres.'); return; }
    if (!EMAIL_REGEX.test(cleanEmail)) { setSendError('Por favor, insira um endereço de e-mail válido.'); return; }
    if (cleanMessage.length < 5) { setSendError('A mensagem deve conter pelo menos 5 caracteres.'); return; }

    // 3. Rate Limiting
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
        EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,
        { name: cleanName, email: cleanEmail, subject: cleanSubject || 'Oportunidade Profissional', message: cleanMessage },
        EMAILJS_PUBLIC_KEY,
      );
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

  const inputCls = 'w-full px-4 py-2.5 rounded-xl bg-[#0a0f1e] border border-[#172042] text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-all';

  return (
    <section id="contato" className="py-20 relative bg-[#070b18]">
      <div className="divider-navy" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">

        {/* ── Cabeçalho ── */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="section-badge mb-4 mx-auto">
            <Send className="w-3 h-3 text-blue-400" />
            <span>07 // Canais de Contato</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Vamos Conversar sobre Novas Oportunidades?
          </h2>
          <p className="mt-4 text-slate-400 text-sm leading-relaxed">
            Aberto para vagas em Banco de Dados Oracle, Desenvolvimento SQL/PL-SQL, Suporte N2 e Sustentação de Sistemas de TI. Resposta rápida via e-mail ou WhatsApp.
          </p>
        </div>

        {/* ── Layout: canais (5) + formulário (7) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">

          {/* Canais diretos */}
          <div className="lg:col-span-5 space-y-3.5">

            {/* Email */}
            <div className="panel-sm p-4 hover:border-blue-500/20 transition-all">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0e1628] border border-[#172042] flex items-center justify-center">
                    <Mail className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-blue-400/60 uppercase tracking-wider">E-mail Profissional</span>
                    <p className="text-xs sm:text-sm font-medium text-white break-all">{personal.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personal.email, 'email')}
                  className="p-2 rounded-xl bg-[#0e1628] border border-[#172042] hover:border-blue-500/30 text-slate-400 hover:text-white transition-colors"
                  title="Copiar E-mail"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Telefone */}
            <div className="panel-sm p-4 hover:border-blue-500/20 transition-all">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#0e1628] border border-[#172042] flex items-center justify-center">
                    <Phone className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-blue-400/60 uppercase tracking-wider">Telefone &amp; WhatsApp</span>
                    <p className="text-xs sm:text-sm font-medium text-white">{personal.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleCopy(personal.phone, 'phone')}
                    className="p-2 rounded-xl bg-[#0e1628] border border-[#172042] hover:border-blue-500/30 text-slate-400 hover:text-white transition-colors"
                    title="Copiar Número"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={`https://wa.me/${personal.phoneClean}?text=Ol%C3%A1%20Marcos,%20encontrei%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono hover:bg-emerald-500/15 transition-all"
                  >
                    Chamar
                  </a>
                </div>
              </div>
            </div>

            {/* LinkedIn + GitHub */}
            <div className="grid grid-cols-2 gap-3.5">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="panel-sm p-4 hover:border-blue-500/20 transition-all flex flex-col justify-between group"
              >
                <div className="w-8 h-8 rounded-xl bg-[#0e1628] border border-[#172042] flex items-center justify-center mb-2.5">
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500">Rede Profissional</span>
                  <p className="text-xs font-semibold text-white group-hover:text-blue-400 mt-0.5 transition-colors">LinkedIn &rarr;</p>
                </div>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="panel-sm p-4 hover:border-blue-500/20 transition-all flex flex-col justify-between group"
              >
                <div className="w-8 h-8 rounded-xl bg-[#0e1628] border border-[#172042] flex items-center justify-center mb-2.5">
                  <GithubIcon className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500">Repositórios</span>
                  <p className="text-xs font-semibold text-white group-hover:text-blue-400 mt-0.5 transition-colors">GitHub &rarr;</p>
                </div>
              </a>
            </div>

            {/* Localização + Currículo */}
            <div className="panel-sm p-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-600" /> {personal.location}
              </div>
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-[#172042] text-slate-300 hover:text-white hover:border-blue-500/30 bg-[#0e1628] transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-blue-400/60" /> Currículo
              </button>
            </div>
          </div>

          {/* Formulário */}
          <div className="lg:col-span-7">
            <div className="panel overflow-hidden">

              {/* Cabeçalho do form */}
              <div className="flex items-center gap-2 px-6 py-4 border-b border-[#172042] bg-[#0a0f1e]">
                <MessageSquare className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-semibold text-white">Enviar Mensagem Direta</span>
              </div>

              <div className="p-6 sm:p-8">
                {formSubmitted ? (
                  <div className="p-6 rounded-xl bg-[#0a1628] border border-emerald-500/30 text-center space-y-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center mx-auto">
                      <Check className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white">Mensagem Enviada!</h4>
                    <p className="text-xs text-slate-300 max-w-md mx-auto">
                      Sua mensagem chegou direto ao meu e-mail. Responderei em breve!
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-blue-400 underline font-mono hover:text-blue-300"
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    {/* Honeypot */}
                    <div className="opacity-0 pointer-events-none absolute -left-[9999px] -top-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true" tabIndex={-1}>
                      <label htmlFor="hp_company_website">Não preencha este campo se você for humano:</label>
                      <input
                        id="hp_company_website" type="text" name="hp_company_website" tabIndex={-1} autoComplete="off"
                        value={formState.honeypot}
                        onChange={(e) => setFormState({ ...formState, honeypot: e.target.value })}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-400 mb-1.5">Seu Nome ou Empresa *</label>
                        <input type="text" required maxLength={100} value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="Ex: Ana Silva / Tech Recruiter" className={inputCls} />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-slate-400 mb-1.5">Seu E-mail *</label>
                        <input type="email" required maxLength={120} value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="seu.email@empresa.com" className={inputCls} />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">Assunto da Mensagem</label>
                      <input type="text" maxLength={150} value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        placeholder="Ex: Oportunidade para Analista de Banco de Dados" className={inputCls} />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">Mensagem *</label>
                      <textarea rows={4} required maxLength={2500} value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Descreva a vaga ou projeto que gostaria de conversar comigo..."
                        className={`${inputCls} resize-none`} />
                    </div>

                    {sendError && <p className="text-xs text-red-400 text-center font-mono">{sendError}</p>}

                    <button
                      type="submit" disabled={isSending}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-blue-sm"
                    >
                      {isSending
                        ? <><Loader2 className="w-3.5 h-3.5 animate-spin" /><span>Enviando...</span></>
                        : <><Send className="w-3.5 h-3.5" /><span>Disparar Mensagem de Contato</span></>
                      }
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
