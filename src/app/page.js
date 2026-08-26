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
  UserCheck,
  Send,
  Loader2,
  ArrowUpRight,
  SlidersHorizontal
} from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'showcase', 'ecosystems', 'vantrx', 'contact'];
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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Czyszczenie URL z # bez przeładowania strony
      if (window.history.pushState) {
        window.history.pushState(null, '', window.location.pathname);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwiHs1whihaOYLXzgvLhPJA1vd8b_wyues8BtydGk4deVIbY0eafVITraRzyteB5jvQNg/exec';

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('Błąd wysyłania formularza:', err);
      setStatus('error');
    }
  };

  const navItems = [
    { id: 'about', label: 'O mnie' },
    { id: 'services', label: 'Kompetencje' },
    { id: 'showcase', label: 'Projekty' },
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

  const competencies = [
    {
      title: "Zarządzanie Społecznościami",
      desc: "Kompleksowa architektura międzynarodowych serwerów. Zaawansowane struktury ról, ekonomia, zabezpieczenia i ciągła moderacja zespołów.",
      icon: Server,
      tag: "BrainlyHQ"
    },
    {
      title: "Zarządzanie Zespołami & Operations",
      desc: "Przekształcanie chaosu w powtarzalne procedury. Koordynacja pracy biurowej, rozdzielanie zadań i nadzór nad efektywnością projektu.",
      icon: Briefcase,
      tag: "7+ Lat Doświadczenia"
    },
    {
      title: "Nowoczesne Rozwiązania Webowe",
      desc: "Budowanie szybkich i bezpiecznych stron internetowych na Next.js i Tailwind CSS. Tworzenie interfejsów dostosowanych do złożonych narzędzi.",
      icon: Globe,
      tag: "Next.js • React"
    },
    {
      title: "Grafika & Kampanie Promocyjne",
      desc: "Projektowanie spójnej oprawy wizualnej oraz realizacja przemyślanych działań marketingowych pozyskujących zaangażowanych odbiorców.",
      icon: Palette,
      tag: "Branding & Ads"
    }
  ];

  const showcaseProjects = [
    {
      title: "BrainlyHQ Ecosystem",
      category: "Community & Operations",
      image: "/brainlyhq.png",
      desc: "Międzynarodowa społeczność, dedykowane systemy zarządcze i rozbudowane narzędzia integracji."
    },
    {
      title: "VANTRX Platform",
      category: "Adult UGC Infrastructure",
      image: "/vantrx.png",
      desc: "Dedykowany ekosystem wspierający automatyzację i ochronę zasobów w branży Adult UGC."
    },
    {
      title: "Les Moutons Bags",
      category: "Branding & Web Design",
      image: "/lesmoutonsbags.png",
      desc: "Kompleksowa identyfikacja wizualna oraz projekt witryny e-commerce."
    },
    {
      title: "Partnership Network",
      category: "Web Portal & Network",
      image: "/partnership.png",
      desc: "Dedykowany portal wspierający program partnerski, sieć powiązań oraz wymianę zasobów pomiędzy podmiotami."
    },
    {
      title: "Notifications System",
      category: "Automation & Dispatcher",
      image: "/notifications.png",
      desc: "Zintegrowany system powiadomień i automatycznego przesyłu alertów do kluczowych kanałów komunikacyjnych."
    },
    {
      title: "Gamez & Automation",
      category: "Interactive Mechanics",
      image: "/gamez.png",
      desc: "Autorskie mini-gry, systemy ekonomii i zaawansowane skrypty automatyzujące."
    }
  ];

  const ecosystemPillars = [
    { title: "Scentralizowana Komunikacja", text: "Integracja komunikatorów (Slack/Discord) z narzędziami projektowymi." },
    { title: "Automatyzacja Zadań", text: "Eliminacja rutynowej pracy za pomocą autorskich botów i skryptów." },
    { title: "Bezpieczeństwo & Dostępność", text: "Kontrola nad uprawnieniami, ochrona plików i bezawaryjność 24/7." },
    { title: "Analityka i Skalowalność", text: "Śledzenie kluczowych wskaźników rozwoju i gotowość na szybki wzrost." }
  ];

  const vantrxFeatures = [
    {
      icon: ShieldCheck,
      title: "Ochrona & Bezpieczeństwo",
      desc: "Zarządzanie dostępami i poufnymi plikami twórców oraz agencji."
    },
    {
      icon: Cpu,
      title: "Optymalizacja Zadań",
      desc: "Redukcja czasu potrzebnego na rutynową pracę administracyjną."
    },
    {
      icon: Workflow,
      title: "Skalowalny Ekosystem",
      desc: "Architektura przygotowana pod dynamiczny rozrost całego projektu."
    }
  ];

  return (
    <div className="min-h-screen text-slate-100 relative selection:bg-blue-500/30 selection:text-white">
      
      {/* TŁO: GRID PATTERN + POŚWIATA */}
      <div className="glow-spot" />
      <div className="liquid-bg" />

      {/* 1. LIQUID GLASS NAVIGATION */}
      <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
        <nav className="glass-card rounded-full px-6 py-3 flex items-center justify-between gap-8 max-w-4xl w-full border border-white/10 shadow-2xl">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="font-semibold text-lg tracking-tight text-white hover:opacity-80 transition-opacity bg-transparent border-0 cursor-pointer"
          >
            ksperix<span className="text-blue-500 font-bold">.dev</span>
          </button>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative py-1 transition-colors bg-transparent border-0 cursor-pointer ${isActive ? 'text-white font-semibold' : 'hover:text-slate-200'}`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-line"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-xs md:text-sm font-semibold px-5 py-2 rounded-full bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 transition-all shadow-lg shadow-blue-500/10 cursor-pointer"
          >
            Kontakt
          </button>
        </nav>
      </header>

      {/* 2. HERO SECTION */}
      <section id="hero" className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center flex flex-col items-center justify-center min-h-[90vh] scroll-mt-28">
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
          <button 
            onClick={() => scrollToSection('ecosystems')} 
            className="px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-slate-200 transition-all shadow-lg flex items-center gap-2 text-sm cursor-pointer border-0"
          >
            <TrendingUp className="w-4 h-4" /> Zobacz jak działam
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="px-8 py-3.5 rounded-full glass-card text-white font-semibold hover:bg-white/10 transition-all border border-white/10 text-sm cursor-pointer"
          >
            Nawiąż współpracę
          </button>
        </motion.div>
      </section>

      {/* 3. SEKCJA "O MNIE" */}
      <section id="about" className="my-32 px-6 max-w-5xl mx-auto scroll-mt-28">
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
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5 text-slate-300 text-base leading-relaxed font-light">
              <p>
                Jestem <strong className="text-white font-medium">ksperix.dev</strong>. Od <span className="text-blue-400 font-semibold">7 lat</span> łączę funkcje menedżerskie, zarządcze i technologiczne. Prowadzę i skaluję międzynarodową społeczność <strong className="text-white font-medium">BrainlyHQ</strong>, organizuję strukturę pracy zespołów i wdrażam dedykowane systemy operacyjne.
              </p>
              <p>
                Tworzę autorskie narzędzia (w tym zaawansowane boty na platformę Slack i Discord), przygotowuję spójną identyfikację graficzną, prowadzę wsparcie biurowe oraz organizuję skuteczne kampanie reklamowe.
              </p>
              <p className="text-slate-400 text-sm border-l-2 border-blue-500/40 pl-4 py-1">
                Wspieram również sektor <strong className="text-slate-200">Adult UGC</strong> (3-letnie doświadczenie), dostarczając dedykowaną infrastrukturę i ekosystemy zarządzania, takie jak <a href="https://vantrx.pl" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:underline inline-flex items-center gap-0.5">VANTRX <ArrowUpRight className="w-3 h-3" /></a>.
              </p>
            </div>

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

      {/* 4. SEKCJA KOMPETENCJE */}
      <section id="services" className="my-32 px-6 max-w-5xl mx-auto scroll-mt-28">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">Obszary Działań</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-2">
            Kompetencje<span className="text-blue-500">.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {competencies.map((comp, i) => {
            const CompIcon = comp.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-8 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
                      <CompIcon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-slate-400 border border-white/5">
                      {comp.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-300 transition-colors">
                    {comp.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed font-light mb-6">
                    {comp.desc}
                  </p>
                </div>

                <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full w-1/3 group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 5. DEDYKOWANA SEKCJA PROJEKTÓW */}
      <section id="showcase" className="my-32 px-6 max-w-5xl mx-auto scroll-mt-28">
        <div className="mb-12 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">Wizualne Portfolio</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-2">
            Wybrane Projekty<span className="text-blue-500">.</span>
          </h2>
          <p className="text-slate-400 text-sm mt-3">Przewijaj w dół, aby zobaczyć nakładające się karty w formacie 16:9.</p>
        </div>

        <div className="space-y-12 relative">
          {showcaseProjects.map((proj, idx) => (
            <div 
              key={idx} 
              className="sticky top-28"
              style={{ zIndex: idx + 1 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="glass-card rounded-3xl border border-white/15 overflow-hidden shadow-2xl p-6 sm:p-8 backdrop-blur-2xl transition-all duration-300 hover:border-blue-500/40"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
                  <div>
                    <span className="text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider">{proj.category}</span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">{proj.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md font-light">{proj.desc}</p>
                </div>

                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-slate-900 group">
                  <img 
                    src={proj.image} 
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SEKCJA EKOSYSTEMY */}
      <section id="ecosystems" className="my-32 px-6 max-w-5xl mx-auto scroll-mt-28">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-3xl border border-blue-500/20 relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs font-semibold mb-6 border border-blue-500/20">
            <Bot className="w-4 h-4" /> Filozofia Operacyjna
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">
            Co składa się na skuteczny Ekosystem<span className="text-blue-500">?</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10 max-w-3xl font-light">
            Sam kod ani pojedyncza strona nie gwarantują sukcesu. Prawdziwy ekosystem to połączony organizm, w którym narzędzia, automatyzacja i ludzie współpracują bez tarć.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {ecosystemPillars.map((pillar, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all flex items-start gap-4"
              >
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 mt-1 shrink-0">
                  <SlidersHorizontal className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-white mb-1">{pillar.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-blue-950/20 border border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-blue-400 shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-white">Przykład: Autorski Bot na Slacku</h4>
                <p className="text-xs text-slate-400">Automatyzuje powiadomienia, raporty i decyzje bez wychodzenia z aplikacji.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 7. FEATURED PROJECT: VANTRX */}
      <section id="vantrx" className="my-32 px-6 max-w-5xl mx-auto scroll-mt-28">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-slate-300 text-xs font-semibold mb-6 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Dedykowane Rozwiązanie • Adult UGC
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">
            <a href="https://vantrx.pl" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors inline-flex items-center gap-2">
              VANTRX <ArrowUpRight className="w-6 h-6 text-blue-500" />
            </a> — Infrastruktura dla branży Adult UGC
          </h2>

          <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-3xl font-light">
            Posiadam 3-letnie doświadczenie w sektorze <strong className="text-white font-semibold">Adult UGC</strong>. VANTRX to autorski ekosystem stworzony do organizacji procesów, ochrony zasobów cyfrowych oraz automatyzacji codziennej obsługi administracyjnej twórców i agencji.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {vantrxFeatures.map((feat, idx) => {
              const FeatIcon = feat.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <FeatIcon className="w-5 h-5 text-blue-400 mb-3" />
                    <h3 className="font-semibold text-sm text-white mb-1">{feat.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{feat.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* 8. FORMULARZ KONTAKTOWY */}
      <section id="contact" className="my-32 px-6 max-w-5xl mx-auto scroll-mt-28">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 sm:p-12 md:p-14 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-2xl"
        >
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">Skontaktuj się</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-2">
              Zbudujmy Twój Ekosystem<span className="text-blue-500">.</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              Wypełnij formularz lub napisz bezpośrednio na Discordzie / e-mailu.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">Imię / Nick</label>
                <input 
                  type="text" 
                  required
                  placeholder="Twoje imię"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-blue-500 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">E-mail</label>
                <input 
                  type="email" 
                  required
                  placeholder="twoj@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-blue-500 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5">Temat</label>
              <input 
                type="text" 
                required
                placeholder="W czym mogę pomóc?"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-blue-500 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5">Wiadomość</label>
              <textarea 
                rows="4" 
                required
                placeholder="Opisz swój projekt lub zapytanie..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-blue-500 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-blue-400" /> contact@ksperix.com</span>
                <span className="flex items-center gap-1.5"><MessageSquare className="w-4 h-4 text-blue-400" /> Discord: ksperix</span>
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Wysyłanie...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" /> Wiadomość wysłana!
                  </>
                ) : status === 'error' ? (
                  <>
                    Wystąpił błąd. Spróbuj ponownie.
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Wyślij wiadomość
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-xs text-slate-600 border-t border-white/5">
        <p>© {new Date().getFullYear()} ksperix.dev. All rights reserved.</p>
      </footer>

    </div>
  );
}
