'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Server, 
  Globe, 
  Briefcase, 
  Cpu, 
  Layers, 
  Mail, 
  MessageSquare,
  Sparkles,
  Bot,
  Palette,
  Workflow,
  TrendingUp,
  Zap,
  CheckCircle2,
  Code2,
  Terminal,
  Layout,
  Wrench,
  UserCheck
} from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  // Wskazywanie aktywnej sekcji dla paska nawigacji
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'ecosystems', 'vantrx', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'O mnie' },
    { id: 'services', label: 'Kompetencje' },
    { id: 'ecosystems', label: 'Ekosystemy' },
    { id: 'vantrx', label: 'VANTRX' },
  ];

  const tools = [
    { name: 'Discord Operations', icon: Server, color: 'text-blue-400' },
    { name: 'Slack Integrations', icon: Bot, color: 'text-emerald-400' },
    { name: 'Next.js / React', icon: Code2, color: 'text-white' },
    { name: 'Tailwind CSS', icon: Layout, color: 'text-cyan-400' },
    { name: 'Python & Automation', icon: Terminal, color: 'text-yellow-400' },
    { name: 'Vercel Platform', icon: Zap, color: 'text-slate-200' },
    { name: 'UI / Visual Design', icon: Palette, color: 'text-purple-400' },
    { name: 'Workflow Tools', icon: Wrench, color: 'text-pink-400' },
  ];

  return (
    <div className="min-h-screen text-slate-100 relative selection:bg-blue-500/30 selection:text-white">
      
      {/* 1. LIQUID GLASS NAVIGATION */}
      <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
        <nav className="glass-card rounded-full px-6 py-3 flex items-center justify-between gap-8 max-w-4xl w-full border border-white/10 shadow-2xl">
          <a href="#hero" className="font-semibold text-lg tracking-tight text-white hover:opacity-80 transition-opacity">
            ksperix<span className="text-blue-500 font-bold">.dev</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative py-1 transition-colors ${isActive ? 'text-white font-semibold' : 'hover:text-slate-200'}`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-line"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <a 
            href="#contact" 
            className="text-xs md:text-sm font-semibold px-5 py-2 rounded-full bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 transition-all shadow-lg shadow-blue-500/10"
          >
            Kontakt
          </a>
        </nav>
      </header>

      {/* 2. HERO SECTION */}
      <section id="hero" className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center flex flex-col items-center justify-center min-h-[90vh]">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs md:text-sm font-medium text-slate-300 border border-white/10 mb-8">
          <Workflow className="w-4 h-4 text-blue-400" />
          <span>7+ lat w zarządzaniu operacyjnym & budowaniu ekosystemów</span>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 text-white"
        >
          Nie tylko koduję. <br />
          <span className="text-blue-500">
            Rozwijam ekosystemy.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed font-light"
        >
          Nie dostarczam prostej strony internetowej, z którą zostajesz sam. Projektuję pełną infrastrukturę operacyjną, automatyzuję procesy zespołowe, wprowadzam dedykowane narzędzia i wdrażam strategię stałego wzrostu.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a 
            href="#ecosystems" 
            className="px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-slate-200 transition-all shadow-lg flex items-center gap-2 text-sm"
          >
            <TrendingUp className="w-4 h-4" /> Zobacz jak działam
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3.5 rounded-full glass-card text-white font-semibold hover:bg-white/10 transition-all border border-white/10 text-sm"
          >
            Nawiąż współpracę
          </a>
        </motion.div>
      </section>

      {/* 3. EGANCKA SEKCJA "O MNIE" Z DYNAMICZNYM POWIĘKSZANIEM PRZY PRZEWIJANIU */}
      <section id="about" className="my-32 px-6 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card p-8 sm:p-12 md:p-14 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-2xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 border-b border-white/5 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-blue-400 mb-1 font-medium">
                <UserCheck className="w-4 h-4" /> Profil Operacyjny
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                O mnie<span className="text-blue-500">.</span>
              </h2>
            </div>
            <div className="text-xs text-slate-400 font-mono bg-white/5 px-4 py-2 rounded-xl border border-white/5 self-start sm:self-auto">
              ksperix.dev // Ops & Tech Architect
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Tekst opisowy */}
            <div className="lg:col-span-7 space-y-5 text-slate-300 text-base leading-relaxed font-light">
              <p>
                Jestem <strong className="text-white font-medium">ksperix.dev</strong>. Od <span className="text-blue-400 font-semibold">7 lat</span> łączę funkcje menedżerskie, zarządcze i technologiczne. Prowadzę i skaluję międzynarodową społeczność <strong className="text-white font-medium">BrainlyHQ</strong>, organizuję strukturę pracy zespołów i wdrażam dedykowane systemy operacyjne.
              </p>
              <p>
                Tworzę autorskie narzędzia (w tym zaawansowane boty na platformę Slack i Discord), przygotowuję spójną identyfikację graficzną, prowadzę wsparcie biurowe oraz organizuję skuteczne kampanie reklamowe.
              </p>
              <p className="text-slate-400 text-sm border-l-2 border-blue-500/40 pl-4 py-1">
                Wspieram również sektor <strong className="text-slate-200">Adult UGC</strong> (3-letnie doświadczenie), dostarczając dedykowaną infrastrukturę i ekosystemy zarządzania, takie jak <span className="text-blue-400 font-semibold">VANTRX</span>.
              </p>
            </div>

            {/* Siatka narzędzi po prawej */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              {tools.map((tool, idx) => {
                const ToolIcon = tool.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all flex items-center gap-3 group"
                  >
                    <div className="p-2 rounded-xl bg-white/5 group-hover:bg-blue-500/10 transition-colors">
                      <ToolIcon className={`w-4 h-4 ${tool.color}`} />
                    </div>
                    <span className="text-xs font-semibold text-slate-300 tracking-tight">{tool.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. SERVICES */}
      <section id="services" className="my-32 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold mb-4 text-white tracking-tight">Kompetencje</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">Przekształcam chaotyczne procesy w poukładany mechanizm nakierowany na skalowanie.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl border border-white/10"
          >
            <Server className="w-8 h-8 text-blue-400 mb-6" />
            <h3 className="text-xl font-bold mb-3 text-white">Międzynarodowe Serwery Discord & BrainlyHQ</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Zarządzam dużą, międzynarodową społecznością BrainlyHQ. Tworzę architekturę serwera od podstaw, wdrażam systemy zabezpieczeń, role, ekonomię oraz boty usprawniające interakcję użytkowników.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 rounded-3xl border border-white/10"
          >
            <Briefcase className="w-8 h-8 text-blue-400 mb-6" />
            <h3 className="text-xl font-bold mb-3 text-white">Zarządzanie Zespołami & Praca Biurowa</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Prowadzę zespoły, koordynuję przepływ informacji, rozdzielam zadania i dbam o standardy pracy. Porządkuję wewnętrzną dokumentację oraz narzędzia biurowe.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 rounded-3xl border border-white/10"
          >
            <Globe className="w-8 h-8 text-blue-400 mb-6" />
            <h3 className="text-xl font-bold mb-3 text-white">Rozwój Projektów & Nowoczesny Web</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Tworzę ultra-szybkie strony internetowe w oparciu o Next.js i Tailwind. Strona to dla mnie jedynie front-end dla całego ekosystemu narzędzi, które dostarczam klientom.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card p-8 rounded-3xl border border-white/10"
          >
            <Palette className="w-8 h-8 text-blue-400 mb-6" />
            <h3 className="text-xl font-bold mb-3 text-white">Identyfikacja Graficzna & Kampanie Reklamowe</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Projektuję spójną wizualnie oprawę graficzną dla marek, serwerów i projektów operacyjnych. Planuję oraz wykonuję skuteczne kampanie promocyjne pozyskujące odbiorców.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. ECOSYSTEMS & AUTORSKIE BOTY (SLACK BOT) */}
      <section id="ecosystems" className="my-32 px-6 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-3xl border border-blue-500/20 relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs font-semibold mb-6 border border-blue-500/20">
            <Bot className="w-4 h-4" /> Autorskie Narzędzia Operacyjne
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white tracking-tight">
            Budowanie Ekosystemów & Autorski Bot na Slacku
          </h2>

          <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-3xl">
            Moje podejście wykracza poza tworzenie czystego kodu. Buduję dedykowane systemy pracy dla zespołów. Przykładem jest stworzony przeze mnie **autorski bot na platformę Slack**, który automatyzuje zadania wewnętrzne, usprawnia komunikację w zespole i pozwala na błyskawiczne zarządzanie projektami bez opuszczania komunikatora.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <CheckCircle2 className="w-5 h-5 text-blue-400 mb-2" />
              <h3 className="font-semibold text-sm text-white">Dedykowane Boty Slack</h3>
              <p className="text-xs text-slate-400 mt-1">Automatyzacja powiadomień, raportów i akcji biurowych.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <Zap className="w-5 h-5 text-blue-400 mb-2" />
              <h3 className="font-semibold text-sm text-white">Analityka & Stały Rozwój</h3>
              <p className="text-xs text-slate-400 mt-1">Nadzoruję wdrożenie i badam wskaźniki rozwoju projektu.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <Layers className="w-5 h-5 text-blue-400 mb-2" />
              <h3 className="font-semibold text-sm text-white">Identyfikacja Wizualna</h3>
              <p className="text-xs text-slate-400 mt-1">Kompletne wsparcie graficzne dla całego ekosystemu.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 6. FEATURED PROJECT: VANTRX */}
      <section id="vantrx" className="my-32 px-6 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-slate-300 text-xs font-semibold mb-6 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Dedykowane Rozwiązanie • Adult UGC
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white tracking-tight">
            VANTRX — Infrastruktura dla branży Adult UGC
          </h2>

          <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-3xl">
            Posiadam 3-letnie doświadczenie w sektorze **Adult UGC**. VANTRX to autorski ekosystem stworzony do organizacji procesów, ochrony zasobów cyfrowych oraz automatyzacji codziennej obsługi administracyjnej twórców i agencji.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <ShieldCheck className="w-5 h-5 text-slate-300 mb-2" />
              <h3 className="font-semibold text-sm text-white">Ochrona & Bezpieczeństwo</h3>
              <p className="text-xs text-slate-400 mt-1">Zarządzanie dostępami i poufnymi plikami.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <Cpu className="w-5 h-5 text-slate-300 mb-2" />
              <h3 className="font-semibold text-sm text-white">Optymalizacja Zadań</h3>
              <p className="text-xs text-slate-400 mt-1">Redukcja czasu potrzebnego na rutynową pracę.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <Workflow className="w-5 h-5 text-slate-300 mb-2" />
              <h3 className="font-semibold text-sm text-white">Skalowalny Ekosystem</h3>
              <p className="text-xs text-slate-400 mt-1">Przygotowany pod dynamiczny wzrost projektu.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 7. CONTACT */}
      <section id="contact" className="my-32 px-6 max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-10 md:p-16 rounded-3xl border border-white/10"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">Zbudujmy Twój Ekosystem</h2>
          <p className="text-slate-400 max-w-lg mx-auto mb-10 text-sm md:text-base">
            Szukasz kogoś, kto przejmie zarządzenie operacyjne, zoptymalizuje procesy w zespole i stworzy niezbędne narzędzia?
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:contact@ksperix.com" 
              className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-white text-black hover:bg-slate-200 transition-all text-sm font-semibold shadow-lg"
            >
              <Mail className="w-4 h-4" /> Wyślij wiadomość
            </a>
            <div className="flex items-center gap-3 px-6 py-3.5 rounded-full glass-card border border-white/10 text-sm font-semibold text-slate-300">
              <MessageSquare className="w-4 h-4 text-blue-400" /> Discord: <span className="text-white">ksperix</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-xs text-slate-600 border-t border-white/5">
        <p>© {new Date().getFullYear()} ksperix.dev. All rights reserved.</p>
      </footer>

    </div>
  );
}
