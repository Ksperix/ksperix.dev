'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Server, 
  Globe, 
  Briefcase, 
  Mail, 
  MessageSquare,
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
  Send,
  Loader2,
  ArrowUpRight,
  SlidersHorizontal,
  Github,
  Check,
  MapPin
} from 'lucide-react';

function FluidBackground() {
  const { scrollYProgress } = useScroll();

  const spot1X = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ['10%', '65%', '20%', '70%', '30%']);
  const spot1Y = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ['10%', '25%', '55%', '80%', '90%']);
  
  const spot2X = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ['80%', '20%', '75%', '15%', '60%']);
  const spot2Y = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ['20%', '45%', '30%', '65%', '85%']);

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.25, 0.95]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#f8fafc]">
      <motion.div
        style={{
          left: spot1X,
          top: spot1Y,
          rotate,
          scale,
        }}
        className="absolute w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full bg-gradient-to-tr from-blue-400/30 via-indigo-300/25 to-sky-200/40 blur-[100px] transition-all duration-700 ease-out"
      />

      <motion.div
        style={{
          left: spot2X,
          top: spot2Y,
          rotate,
          scale,
        }}
        className="absolute w-[450px] h-[450px] sm:w-[650px] sm:h-[650px] rounded-full bg-gradient-to-br from-violet-300/25 via-purple-200/20 to-blue-300/30 blur-[110px] transition-all duration-700 ease-out"
      />
    </div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [selectedEcosystem, setSelectedEcosystem] = useState('brainly');

  const typewriterPhrases = [
    'Tworzę ekosystemy.',
    'Wizualizuję marki.',
    'Automatyzuję procesy.',
    'Skaluję społeczności.'
  ];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = typewriterPhrases[textIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentPhrase.length) {
      typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % typewriterPhrases.length);
      typingSpeed = 300;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex === currentPhrase.length) {
        setIsDeleting(true);
      } else {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'showcase', 'ecosystems', 'pricing', 'contact'];
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
    { id: 'pricing', label: 'Cennik' },
  ];

  const tools = [
    { name: 'Discord Operations', icon: Server, color: 'text-blue-600' },
    { name: 'Slack Integrations', icon: Bot, color: 'text-emerald-600' },
    { name: 'Next.js / React', icon: Code2, color: 'text-slate-800' },
    { name: 'Tailwind CSS', icon: Layout, color: 'text-cyan-600' },
    { name: 'Python & Automation', icon: Terminal, color: 'text-amber-600' },
    { name: 'Vercel Platform', icon: Zap, color: 'text-slate-700' },
    { name: 'UI / Visual Design', icon: Palette, color: 'text-purple-600' },
    { name: 'Workflow Tools', icon: Wrench, color: 'text-pink-600' },
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
      image: "/brainlyhq.png",
      desc: "Międzynarodowa społeczność, dedykowane systemy zarządcze i rozbudowane narzędzia integracji."
    },
    {
      title: "VANTRX Platform",
      image: "/vantrx.png",
      desc: "Dedykowany ekosystem wspierający automatyzację i ochronę zasobów w branży Adult UGC."
    },
    {
      title: "Les Moutons Bags",
      image: "/lesmoutonsbags.png",
      desc: "Kompleksowa identyfikacja wizualna oraz projekt witryny e-commerce."
    },
    {
      title: "Partnership Network",
      image: "/partnership.png",
      desc: "Dedykowany portal wspierający program partnerski, sieć powiązań oraz wymianę zasobów pomiędzy podmiotami."
    },
    {
      title: "Notifications System",
      image: "/notifications.png",
      desc: "Zintegrowany system powiadomień i automatycznego przesyłu alertów do kluczowych kanałów komunikacyjnych."
    },
    {
      title: "Gamez & Automation",
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

  const pricingTiers = [
    {
      title: "Konsultacje & Doradztwo",
      price: "od 250 zł",
      scope: "Cała Polska / Zdalnie",
      badge: "Elastyczne",
      features: [
        "Audyt obecnej architektury komunikacji",
        "Wskazówki automatyzacji procesów",
        "Koncepcja i strategia rozwoju społeczności",
        "Raport z zaleceniami usprawnień"
      ]
    },
    {
      title: "Wdrożenia Lokalne",
      price: "Wycena Indywidualna",
      scope: "Małopolska / Kraków",
      badge: "Stacjonarne",
      popular: true,
      features: [
        "Wsparcie operacyjne na miejscu w firmie/biurze",
        "Personalizowane szkolenie zespołu z narzędzi",
        "Infrastruktura sprzętowa i sieciowa serwerów",
        "Dedykowany opiekun projektu"
      ]
    },
    {
      title: "Pełny Ekosystem & Systemy Custom",
      price: "od 2 500 zł",
      scope: "Polska & Zagranica",
      badge: "Dedykowane",
      features: [
        "Kompleksowy serwer Discord/Slack z botami",
        "Strona web na Next.js + panel administracyjny",
        "Integracje API, płatności i powiadomienia 24/7",
        "Pełne utrzymanie techniczne i wsparcie"
      ]
    }
  ];

  return (
    <div className="min-h-screen text-slate-800 relative selection:bg-blue-500/20 selection:text-blue-900">
      
      <FluidBackground />

      {/* 1. LIQUID GLASS NAVIGATION */}
      <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
        <nav className="glass-card rounded-full px-6 py-3 flex items-center justify-between gap-8 max-w-4xl w-full border border-white/60 shadow-lg shadow-slate-200/50">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="font-semibold text-lg tracking-tight text-slate-900 hover:opacity-80 transition-opacity bg-transparent border-0 cursor-pointer"
          >
            ksperix<span className="text-blue-600 font-bold">.dev</span>
          </button>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative py-1 transition-colors bg-transparent border-0 cursor-pointer ${isActive ? 'text-slate-900 font-semibold' : 'hover:text-slate-900'}`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-line"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-xs md:text-sm font-semibold px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 cursor-pointer"
          >
            Kontakt
          </button>
        </nav>
      </header>

      {/* 2. HERO SECTION */}
      <section id="hero" className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center flex flex-col items-center justify-center min-h-[85vh] scroll-mt-28">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 text-slate-900 min-h-[140px] sm:min-h-[180px] flex flex-col justify-center items-center"
        >
          <span>Nie tylko koduję.</span>
          <span className="text-blue-600 block">
            {typewriterPhrases[textIndex].substring(0, charIndex)}
            <span className="animate-pulse font-normal text-blue-500">|</span>
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-600 max-w-2xl mb-10 leading-relaxed font-normal"
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
            className="px-8 py-3.5 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-all shadow-lg flex items-center gap-2 text-sm cursor-pointer border-0"
          >
            <TrendingUp className="w-4 h-4" /> Zobacz jak działam
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="px-8 py-3.5 rounded-full glass-card text-slate-800 font-semibold hover:bg-white transition-all border border-white/80 text-sm cursor-pointer"
          >
            Nawiąż współpracę
          </button>
        </motion.div>
      </section>

      {/* 3. SEKCJA "O MNIE" */}
      <section id="about" className="my-32 px-6 max-w-5xl mx-auto scroll-mt-28">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 sm:p-12 md:p-14 rounded-3xl border border-white/80 shadow-xl relative overflow-hidden backdrop-blur-2xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 border-b border-slate-200/60 pb-6">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              O mnie<span className="text-blue-600">.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5 text-slate-600 text-base leading-relaxed font-normal">
              <p>
                Jestem <strong className="text-slate-900 font-semibold">ksperix.dev</strong>. Od <span className="text-blue-600 font-semibold">7 lat</span> łączę funkcje menedżerskie, zarządcze i technologiczne. Prowadzę i skaluję międzynarodową społeczność <strong className="text-slate-900 font-semibold">BrainlyHQ</strong>, organizuję strukturę pracy zespołów i wdrażam dedykowane systemy operacyjne.
              </p>
              <p>
                Tworzę autorskie narzędzia (w tym zaawansowane boty na platformę Slack i Discord), przygotowuję spójną identyfikację graficzną, prowadzę wsparcie biurowe oraz organizuję skuteczne kampanie reklamowe.
              </p>
              <p className="text-slate-600 text-sm border-l-2 border-blue-500 pl-4 py-1">
                Wspieram również sektor <strong className="text-slate-900 font-medium">Adult UGC</strong> (3-letnie doświadczenie), dostarczając dedykowaną infrastrukturę i ekosystemy zarządzania, takie jak <a href="https://vantrx.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline inline-flex items-center gap-0.5">VANTRX <ArrowUpRight className="w-3 h-3" /></a>.
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
                    className="p-3.5 rounded-2xl bg-white/70 border border-white/80 hover:border-blue-500/40 hover:bg-white transition-all flex items-center gap-3 group shadow-sm"
                  >
                    <div className="p-2 rounded-xl bg-slate-100 group-hover:bg-blue-50 transition-colors">
                      <ToolIcon className={`w-4 h-4 ${tool.color}`} />
                    </div>
                    <span className="text-xs font-semibold text-slate-700 tracking-tight">{tool.name}</span>
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
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Kompetencje<span className="text-blue-600">.</span>
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
                className="glass-card p-8 rounded-3xl border border-white/80 hover:border-blue-500/40 transition-all flex flex-col justify-between group relative overflow-hidden shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 group-hover:scale-110 transition-transform">
                      <CompIcon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {comp.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                    {comp.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-normal mb-6">
                    {comp.desc}
                  </p>
                </div>

                <div className="w-full bg-slate-200/80 h-1 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-full w-1/3 group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 5. SEKCJA PROJEKTÓW (FIX GLITCHOWANIA) */}
      <section id="showcase" className="my-32 px-6 max-w-5xl mx-auto scroll-mt-28">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Wybrane Projekty<span className="text-blue-600">.</span>
          </h2>
        </div>

        <div className="space-y-12 relative">
          {showcaseProjects.map((proj, idx) => (
            <div 
              key={idx} 
              className="sticky top-28"
              style={{ zIndex: idx + 1 }}
            >
              <div className="glass-card rounded-3xl border border-white/80 overflow-hidden shadow-xl p-6 sm:p-8 backdrop-blur-2xl transition-all duration-300 hover:border-blue-500/40 bg-white/85">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{proj.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal">{proj.desc}</p>
                </div>

                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-100 group shadow-inner">
                  <img 
                    src={proj.image} 
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/15 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. WYRÓŻNIONA SEKCJA EKOSYSTEMY (PEŁNA SZEROKOŚĆ STRONY) */}
      <section id="ecosystems" className="my-32 w-full bg-blue-50/60 border-y border-blue-100 py-20 px-6 scroll-mt-28 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-900 tracking-tight">
              Co składa się na skuteczny Ekosystem<span className="text-blue-600">?</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl font-normal">
              Sam kod ani pojedyncza strona nie gwarantują sukcesu. Prawdziwy ekosystem to połączony organizm, w którym narzędzia, automatyzacja i ludzie współpracują bez tarć.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {ecosystemPillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-white/80 border border-white/90 hover:border-blue-500/30 transition-all flex items-start gap-4 shadow-sm"
              >
                <div className="p-2.5 rounded-xl bg-blue-100/80 text-blue-600 shrink-0">
                  <SlidersHorizontal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-base text-slate-900 mb-1">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* INTERAKTYWNY WYBÓR EKOSYSTEMU (BRAINLYHQ / VANTRX) */}
          <div className="bg-white/90 rounded-3xl p-6 sm:p-8 border border-blue-200/80 shadow-md">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-6">
              <span className="text-sm font-semibold text-slate-700">Wybierz dedykowany ekosystem:</span>
              <div className="inline-flex p-1.5 rounded-2xl bg-slate-100/80 border border-slate-200/60 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedEcosystem('brainly')}
                  className={`flex-1 sm:flex-none px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    selectedEcosystem === 'brainly'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  BrainlyHQ
                </button>
                <button
                  onClick={() => setSelectedEcosystem('vantrx')}
                  className={`flex-1 sm:flex-none px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    selectedEcosystem === 'vantrx'
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  VANTRX
                </button>
              </div>
            </div>

            {selectedEcosystem === 'brainly' ? (
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3 border border-blue-100">
                    Ekosystem Społecznościowy
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">BrainlyHQ Infrastructure</h3>
                  <p className="text-slate-600 text-sm max-w-xl font-normal leading-relaxed">
                    Zaawansowane narzędzia moderacyjne, automatyczna integracja botów, powiadomień oraz dedykowany rynek produktów dla społeczności.
                  </p>
                </div>
                <a
                  href="https://discord.brainly.com/products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/20 inline-flex items-center gap-2 shrink-0"
                >
                  Zobacz Produkty <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold mb-3 border border-purple-100">
                    Adult UGC Systems
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">VANTRX Ecosystem</h3>
                  <p className="text-slate-600 text-sm max-w-xl font-normal leading-relaxed">
                    Autorska platforma stworzona do organizacji procesów, ochrony zasobów cyfrowych oraz automatyzacji codziennej obsługi administracyjnej.
                  </p>
                </div>
                <a
                  href="https://vantrx.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm transition-all shadow-md shadow-purple-500/20 inline-flex items-center gap-2 shrink-0"
                >
                  Odwiedź VANTRX <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 7. SEKCJA CENNIK & USŁUGI LOKALNE */}
      <section id="pricing" className="my-32 px-6 max-w-5xl mx-auto scroll-mt-28">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Cennik & Zakres Usług<span className="text-blue-600">.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto font-normal">
            Realizuję projekty zdalnie na terenie całego kraju i za granicą oraz oferuję bezpośrednie wsparcie stacjonarne na terenie Małopolski.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`glass-card rounded-3xl p-8 border flex flex-col justify-between relative ${
                tier.popular 
                  ? 'border-blue-500/50 shadow-xl bg-white/90' 
                  : 'border-white/80'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold tracking-wider uppercase shadow-md">
                  Rekomendowane Małopolska
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    {tier.badge}
                  </span>
                  <span className="text-xs text-slate-500 font-medium inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" /> {tier.scope}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{tier.title}</h3>
                <div className="text-2xl sm:text-3xl font-black text-blue-600 mb-6">{tier.price}</div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-snug">
                      <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className={`w-full py-3 rounded-2xl font-semibold text-sm transition-all cursor-pointer ${
                  tier.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                Zapytaj o darmową wycenę
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FORMULARZ KONTAKTOWY */}
      <section id="contact" className="my-32 px-6 max-w-5xl mx-auto scroll-mt-28">
        <div className="glass-card p-8 sm:p-12 md:p-14 rounded-3xl border border-white/80 shadow-xl relative overflow-hidden backdrop-blur-2xl">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Zbudujmy Twój Ekosystem<span className="text-blue-600">.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Wypełnij formularz lub napisz bezpośrednio na Discordzie / e-mailu.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-700 mb-1.5 font-semibold">Imię / Nick</label>
                <input 
                  type="text" 
                  required
                  placeholder="Twoje imię"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 focus:border-blue-600 focus:outline-none text-sm text-slate-900 placeholder-slate-400 transition-colors shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 mb-1.5 font-semibold">E-mail</label>
                <input 
                  type="email" 
                  required
                  placeholder="twoj@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 focus:border-blue-600 focus:outline-none text-sm text-slate-900 placeholder-slate-400 transition-colors shadow-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-700 mb-1.5 font-semibold">Temat</label>
              <input 
                type="text" 
                required
                placeholder="W czym mogę pomóc?"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 focus:border-blue-600 focus:outline-none text-sm text-slate-900 placeholder-slate-400 transition-colors shadow-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-700 mb-1.5 font-semibold">Wiadomość</label>
              <textarea 
                rows="4" 
                required
                placeholder="Opisz swój projekt lub zapytanie..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 focus:border-blue-600 focus:outline-none text-sm text-slate-900 placeholder-slate-400 transition-colors resize-none shadow-sm"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
                <span className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-blue-600" /> contact@ksperix.com</span>
                <span className="flex items-center gap-1.5"><MessageSquare className="w-4 h-4 text-blue-600" /> Discord: ksperix.dev</span>
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
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
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-xs text-slate-500 border-t border-slate-200/80 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/ksperix" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-2 text-xs font-medium"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a 
            href="https://discord.com/users/ksperix.dev" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2 text-xs font-medium"
          >
            <MessageSquare className="w-4 h-4" /> Discord
          </a>
        </div>
        <p>© {new Date().getFullYear()} ksperix.dev. All rights reserved.</p>
      </footer>

    </div>
  );
}
