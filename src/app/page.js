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
  Figma,
  Flame,
  Wrench
} from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [displayedText, setDisplayedText] = useState('');
  
  const fullText = "Cześć! Jestem ksperix.dev — z pasją łączę 7 lat doświadczenia w zarządzaniu operacyjnym, prowadzeniu międzynarodowych społeczności i budowaniu autorskich narzędzi. Nie tworzę jedynie pasywnych projektów. Dostarczam przemyślane ekosystemy od A do Z, dbając o ich stały rozwój, organizację zespołów i automatyzację pracy biurowej.";

  // 1. Wskazywanie aktywnej sekcji z dolną linią w menu
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

  // 2. Efekt pisania tekstu "O mnie" po przewinięciu do sekcji
  useEffect(() => {
    let timeout;
    if (activeSection === 'about' && displayedText.length < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 20); // Szybkość wpisywania znaków
    }
    return () => clearTimeout(timeout);
  }, [activeSection, displayedText]);

  const navItems = [
    { id: 'about', label: 'O mnie' },
    { id: 'services', label: 'Kompetencje' },
    { id: 'ecosystems', label: 'Ekosystemy & Slack' },
    { id: 'vantrx', label: 'VANTRX' },
  ];

  // Lista narzędzi z prawej strony sekcji "O mnie"
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

      {/* 3. NEW "O MNIE" SECTION WITH TYPEWRITER & ANIMATED TOOL ICONS */}
      <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-2">
            O mnie<span className="text-blue-500">.</span>
          </h2>
          <div className="w-16 h-1 bg-blue-500 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* LEWA STRONA: PISZĄCY SIĘ TEKST (TYPEWRITER) */}
          <div className="glass-card p-8 rounded-3xl border border-white/10 min-h-[260px] flex flex-col justify-center relative">
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-mono">
              {displayedText}
              <span className="inline-block w-2 h-5 bg-blue-500 ml-1 animate-pulse" />
            </p>
          </div>

          {/* PRAWA STRONA: IKONKI NARZĘDZI (STAGGERED ANIMATION) */}
          <div className="grid grid-cols-2 gap-3">
            {tools.map((tool, idx) => {
              const ToolIcon = tool.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  className="glass-card p-4 rounded-2xl border border-white/5 flex items-center gap-3 hover:border-blue-500/30 transition-all"
                >
                  <ToolIcon className={`w-5 h-5 ${tool.color}`} />
                  <span className="text-xs font-semibold text-slate-300">{tool.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SERVICES */}
      <section id="services" className="py-20 px-6 max-w-5xl mx-auto">
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
              Prowadzę zespoły, koordynuję przepływ informacji, rozdzielam zadania i dbam o standardy pracy. Porporządkowuję wewnętrzną dokumentację oraz narzędzia biurowe.
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
      <section id="ecosystems" className="py-20 px-6 max-w-5xl mx-auto">
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
      <section id="vantrx" className="py-20 px-6 max-w-5xl mx-auto">
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
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
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
