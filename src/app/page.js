'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
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
  Github,
  Check,
  MessageSquareCode,
  Cpu,
  ShieldCheck,
  BarChart3,
  Laptop,
  Compass,
  ArrowRight,
  Sparkles
} from 'lucide-react';

function DiscordIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 127.14 96.36" fill="currentColor">
      <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0, -3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a73.57,73.57,0,0,0,64.32,0c.87.68,1.76,1.36,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1,105.25,105.25,0,0,0,32.19-16.14c2.64-27.38-4.51-51.11-18.9-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74C48.86,40.23,54,45.92,53.88,53,53.88,60,48.8,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74C91.13,40.23,96.28,45.92,96.14,53,96.14,60,91.13,65.69,84.69,65.69Z"/>
    </svg>
  );
}

function FluidBackground() {
  const { scrollYProgress } = useScroll();

  const spot1X = useTransform(scrollYProgress, [0, 0.5, 1], ['15%', '50%', '30%']);
  const spot1Y = useTransform(scrollYProgress, [0, 0.5, 1], ['15%', '45%', '80%']);
  
  const spot2X = useTransform(scrollYProgress, [0, 0.5, 1], ['75%', '30%', '65%']);
  const spot2Y = useTransform(scrollYProgress, [0, 0.5, 1], ['25%', '60%', '75%']);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#f8fafc]">
      <motion.div
        style={{
          left: spot1X,
          top: spot1Y,
        }}
        className="absolute w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] rounded-full bg-gradient-to-tr from-blue-400/25 via-indigo-300/20 to-sky-200/35 blur-[120px] transition-all duration-1000 ease-out"
      />

      <motion.div
        style={{
          left: spot2X,
          top: spot2Y,
        }}
        className="absolute w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] rounded-full bg-gradient-to-br from-violet-300/20 via-purple-200/20 to-blue-300/25 blur-[120px] transition-all duration-1000 ease-out"
      />
    </div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [selectedEcosystem, setSelectedEcosystem] = useState('brainly');
  const [pricingCategory, setPricingCategory] = useState('ecosystems');

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
    { title: "Scentralizowana Komunikacja", text: "Integracja komunikatorów (Slack/Discord) z narzędziami projektowymi.", icon: MessageSquareCode },
    { title: "Automatyzacja Zadań", text: "Eliminacja rutynowej pracy za pomocą autorskich botów i skryptów.", icon: Cpu },
    { title: "Bezpieczeństwo & Dostępność", text: "Kontrola nad uprawnieniami, ochrona plików i bezawaryjność 24/7.", icon: ShieldCheck },
    { title: "Analityka i Skalowalność", text: "Śledzenie kluczowych wskaźników rozwoju i gotowość na szybki wzrost.", icon: BarChart3 }
  ];

  const ecosystemData = {
    brainly: {
      title: "BrainlyHQ Infrastructure",
      subtitle: "Globalna Platforma Społecznościowa & Dystrybucja Bota",
      desc: "Zaawansowane narzędzia moderacyjne, automatyczna integracja botów, powiadomień oraz dedykowany rynek produktów dla społeczności. Zbudowany z myślą o skalowaniu na dziesiątki tysięcy użytkowników.",
      metrics: [
        { label: "Liczba Społeczności", value: "Multi-Server" },
        { label: "Integracje", value: "Slack & Discord API" },
        { label: "Utrzymanie", value: "99.9% Uptime" }
      ],
      link: "https://discord.brainly.com/products",
      btnText: "Przeglądaj Produkty BrainlyHQ",
      accentBg: "bg-blue-600",
      accentText: "text-blue-600"
    },
    vantrx: {
      title: "VANTRX Platform",
      subtitle: "Bezpieczeństwo Zasobów & Automatyzacja Agencji",
      desc: "Autorska platforma stworzona do organizacji procesów, ochrony zasobów cyfrowych oraz automatyzacji codziennej obsługi administracyjnej twórców oraz agencji w sektorze Adult UGC.",
      metrics: [
        { label: "Doświadczenie Branżowe", value: "3+ Lata" },
        { label: "Ochrona Danych", value: "Private Vault" },
        { label: "Wydajność", value: "Automatyczna Biurokracja" }
      ],
      link: "https://vantrx.pl",
      btnText: "Przejdź do VANTRX",
      accentBg: "bg-purple-600",
      accentText: "text-purple-600"
    }
  };

  const specialTier = {
    title: "Pakiet Special",
    price: "70,00 zł / h",
    subtitle: "Konsultacje na bieżąco & Rozwój Marki",
    features: [
      "Brak płatności jednorazowej – elastyczny czas pracy godzinowej",
      "Spotkania stacjonarne na terenie Krakowa lub konsultacje online",
      "Praca nad marką, rozmowy strategiczne, wprowadzanie zmian",
      "Elastyczne ustalanie wspólnych terminów dostosowanych do Ciebie"
    ]
  };

  const pricingTiers = [
    {
      title: "Pakiet Starter",
      price: "od 149,99 zł",
      features: [
        "Audyt obecnej infrastruktury",
        "Wskazówki dot. dalszego rozwoju wraz z raportem",
        "Implementacja pierwszy ustalonych zmian",
        "Ustalenie grupy targetowej i analiza identyfikacji marki"
      ]
    },
    {
      title: "Pakiet Gold",
      oldPrice: "319,99 zł",
      price: "od 229,99 zł",
      popular: true,
      includesPrevious: "+ wszystko co w pakiecie Starter",
      features: [
        "Poprawy w identyfikacji wizualnej marki oraz raport",
        "Pomoc w konfiguracji narzędzi zarządzania zespołem",
        "Rozwój Social Mediów marki",
        "Utworzenie haseł promocyjnych i Look Book'a"
      ]
    },
    {
      title: "Pakiet Pro",
      price: "od 499,99 zł",
      includesPrevious: "+ wszystko co w pakiecie Gold",
      features: [
        "Kompleksowy serwer Discord/Slack z botami autorskimi",
        "Strona internetowa oraz własny panel linków Social Media",
        "Twoje pierwsze produkty cyfrowe i narzędzia marki",
        "Pełne utrzymanie techniczne, wsparcie 24/7, koncepcje"
      ]
    }
  ];

  const discordServices = [
    { name: "Konfiguracja Serwera Discord od zera", desc: "Struktura kanałów, role, uprawnienia, boty oraz zabezpieczenia", price: "od 300 zł" },
    { name: "Autorski Bot Discord / Integracja", desc: "Dedykowany bot w Node.js/Python, powiadomienia, automatyzacja", price: "od 450 zł" },
    { name: "Dedykowana Oprawa Graficzna Serwera", desc: "Ikona serwera, bannery kanałów, nagłówki, szablony ogłoszeń", price: "od 200 zł" }
  ];

  const localServices = [
    { name: "Formatowanie & Dobre ustawienia OS", desc: "Instalacja Windows/macOS, sterowników, zabezpieczenia", price: "od 99,99 zł" },
    { name: "Konsultacja stacjonarna w Krakowie / Małopolsce", desc: "Doradztwo technologiczne na miejscu, audyt sprzętowy i sieciowy", price: "149,99 zł /h" }
  ];

  const otherServices = [
    { name: "Dokumentacja Marki", desc: "Fachowe zasady dla twojej społeczności lub marki; Regulamin (do 10 stron), Warunki Użytkowania, Szablony umów (2) i Polityka Prywatności", price: "99,99 zł" },
    { name: "Dokumentacja Marki+", desc: "Jeszcze wyższy poziom niż wcześniej! Regulamin (do 30 stron), Warunki Użytkowania Produktów (3), Szablony umów (6) i Polityki Prywatności Produktów (3)", price: "199,99 zł" },
    { name: "Arkusz kalkulacyjny z automatyzacjami", desc: "Profesjonalny arkusz kalkulacyjny Google z automatyzacjami GAS oraz funkcjami logicznymi", price: "Wycena indywidualna" }
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
            className="group relative px-8 py-3.5 rounded-full bg-slate-900 text-white font-semibold shadow-lg flex items-center gap-2 text-sm cursor-pointer border border-slate-900 overflow-hidden transition-all duration-300"
          >
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
            <span className="relative z-10 flex items-center gap-2 group-hover:text-slate-900 transition-colors duration-300 font-semibold">
              <TrendingUp className="w-4 h-4 group-hover:text-slate-900 transition-colors duration-300" /> Zobacz jak działam
            </span>
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
        <div className="glass-card p-8 sm:p-12 md:p-14 rounded-3xl border border-white/80 shadow-xl relative overflow-hidden backdrop-blur-2xl">
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
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white/70 border border-white/80 hover:border-blue-500/40 hover:bg-white transition-all flex items-center gap-3 group shadow-sm"
                  >
                    <div className="p-2 rounded-xl bg-slate-100 group-hover:bg-blue-50 transition-colors">
                      <ToolIcon className={`w-4 h-4 ${tool.color}`} />
                    </div>
                    <span className="text-xs font-semibold text-slate-700 tracking-tight">{tool.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
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
              <div
                key={i}
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
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. SEKCJA PROJEKTÓW */}
      <section id="showcase" className="my-32 px-6 max-w-5xl mx-auto scroll-mt-28">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Wybrane Projekty<span className="text-blue-600">.</span>
          </h2>
        </div>

        <div className="space-y-12 relative">
          {showcaseProjects.map((proj, idx) => (
            <div 
              key={proj.title} 
              className="sticky top-28"
              style={{ zIndex: idx + 1 }}
            >
              <div className="glass-card rounded-3xl border border-white/80 overflow-hidden shadow-xl p-6 sm:p-8 backdrop-blur-2xl transition-all duration-300 hover:border-blue-500/40 bg-white/90">
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

      {/* 6. WYRÓŻNIONA SEKCJA EKOSYSTEMY */}
      <section id="ecosystems" className="my-32 px-6 max-w-5xl mx-auto scroll-mt-28">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-blue-200/80 shadow-xl bg-blue-50/40 backdrop-blur-xl">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-900 tracking-tight">
              Co składa się na skuteczny Ekosystem<span className="text-blue-600">?</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl font-normal">
              Sam kod ani pojedyncza strona nie gwarantują sukcesu. Prawdziwy ekosystem to połączony organizm, w którym narzędzia, automatyzacja i ludzie współpracują bez tarć.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {ecosystemPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div 
                  key={idx} 
                  className="p-6 rounded-2xl bg-white/80 border border-white/90 hover:border-blue-500/30 transition-all flex items-start gap-4 shadow-sm"
                >
                  <div className="p-3 rounded-2xl bg-blue-100/80 text-blue-600 shrink-0">
                    <PillarIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-slate-900 mb-1">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-white/90 rounded-3xl p-6 sm:p-10 border border-blue-200/80 shadow-md relative overflow-hidden">
            <div className="flex justify-center border-b border-slate-100 pb-6 mb-8">
              <div className="relative inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedEcosystem('brainly')}
                  className={`relative z-10 px-8 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                    selectedEcosystem === 'brainly' ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  BrainlyHQ
                </button>
                <button
                  onClick={() => setSelectedEcosystem('vantrx')}
                  className={`relative z-10 px-8 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                    selectedEcosystem === 'vantrx' ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  VANTRX
                </button>

                <motion.div
                  className={`absolute top-1.5 bottom-1.5 rounded-xl ${
                    selectedEcosystem === 'brainly' ? 'bg-blue-600 shadow-md' : 'bg-purple-600 shadow-md'
                  }`}
                  initial={false}
                  animate={{
                    left: selectedEcosystem === 'brainly' ? '6px' : '50%',
                    width: 'calc(50% - 9px)'
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedEcosystem}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7 space-y-4">
                  <h4 className="text-2xl sm:text-3xl font-black text-slate-900">{ecosystemData[selectedEcosystem].title}</h4>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500">{ecosystemData[selectedEcosystem].subtitle}</p>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {ecosystemData[selectedEcosystem].desc}
                  </p>

                  <div className="pt-2">
                    <a
                      href={ecosystemData[selectedEcosystem].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-6 py-3.5 rounded-2xl text-white font-semibold text-sm transition-all shadow-md inline-flex items-center gap-2 ${ecosystemData[selectedEcosystem].accentBg} hover:opacity-95`}
                    >
                      {ecosystemData[selectedEcosystem].btnText} <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 grid grid-cols-1 gap-3 bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
                  <span className="text-xs font-mono font-bold uppercase text-slate-400 mb-1">Kluczowe Wskaźniki</span>
                  {ecosystemData[selectedEcosystem].metrics.map((m, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/60 shadow-sm">
                      <span className="text-xs font-semibold text-slate-600">{m.label}</span>
                      <span className={`text-xs font-bold ${ecosystemData[selectedEcosystem].accentText}`}>{m.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 7. SEKCJA CENNIK */}
      <section id="pricing" className="my-32 px-6 max-w-7xl mx-auto scroll-mt-28">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Cennik & Oferta Usług<span className="text-blue-600">.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto font-normal">
            Wybierz kategorię usługi, która odpowiada Twoim obecnym potrzebom.
          </p>
        </div>

        {/* PRZEŁĄCZNIK KATEGORII CENNIKA */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex-wrap justify-center gap-1">
            <button
              onClick={() => setPricingCategory('ecosystems')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                pricingCategory === 'ecosystems' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Workflow className="w-4 h-4" /> Budowanie ekosystemów
            </button>
            <button
              onClick={() => setPricingCategory('discord')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                pricingCategory === 'discord' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <DiscordIcon className="w-4 h-4" /> Usługi Discord
            </button>
            <button
              onClick={() => setPricingCategory('local')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                pricingCategory === 'local' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Compass className="w-4 h-4" /> Stacjonarne
            </button>
            <button
              onClick={() => setPricingCategory('other')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                pricingCategory === 'other' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-4 h-4" /> Inne
            </button>
          </div>
        </div>

        {/* WARIANT 1: PAKIETY BUDOWY EKOSYSTEMÓW */}
        {pricingCategory === 'ecosystems' && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              
              {/* 1. PAKIET STARTER */}
              <div className="glass-card rounded-3xl p-6 border border-white/80 flex flex-col justify-between relative transition-all duration-300">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{pricingTiers[0].title}</h3>
                  <div className="mb-6">
                    <div className="text-2xl sm:text-3xl font-black text-blue-600">
                      {pricingTiers[0].price}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pricingTiers[0].features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-600 leading-snug break-words">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-3 rounded-2xl font-semibold text-sm transition-all cursor-pointer bg-slate-900 hover:bg-slate-800 text-white"
                >
                  Wybieram Starter
                </button>
              </div>

              {/* 2. PAKIET GOLD (REKOMENDOWANY) */}
              <div className="rounded-3xl py-8 px-6 border-2 border-blue-600 shadow-xl shadow-blue-500/20 bg-white flex flex-col justify-between relative transition-all duration-300 z-10 overflow-hidden lg:-my-3">
                <div className="bg-blue-600 text-white text-[9px] font-bold tracking-wider uppercase py-1 px-3 -mx-6 -mt-8 mb-4 flex items-center justify-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" /> REKOMENDOWANE
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{pricingTiers[1].title}</h3>
                  <div className="mb-6">
                    {pricingTiers[1].oldPrice && (
                      <span className="text-xs font-bold text-slate-400 line-through block -mb-0.5">
                        {pricingTiers[1].oldPrice}
                      </span>
                    )}
                    <div className="text-2xl sm:text-3xl font-black text-blue-600">
                      {pricingTiers[1].price}
                    </div>
                  </div>

                  {pricingTiers[1].includesPrevious && (
                    <p className="text-[10px] font-semibold text-blue-600 italic -mt-4 mb-4">
                      {pricingTiers[1].includesPrevious}
                    </p>
                  )}

                  <ul className="space-y-3 mb-8">
                    {pricingTiers[1].features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-600 leading-snug break-words">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-3 rounded-2xl font-semibold text-sm transition-all cursor-pointer bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20"
                >
                  Wybieram Gold
                </button>
              </div>

              {/* 3. PAKIET PRO */}
              <div className="glass-card rounded-3xl p-6 border border-white/80 flex flex-col justify-between relative transition-all duration-300">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{pricingTiers[2].title}</h3>
                  <div className="mb-6">
                    <div className="text-2xl sm:text-3xl font-black text-blue-600">
                      {pricingTiers[2].price}
                    </div>
                  </div>

                  {pricingTiers[2].includesPrevious && (
                    <p className="text-[10px] font-semibold text-blue-600 italic -mt-4 mb-4">
                      {pricingTiers[2].includesPrevious}
                    </p>
                  )}

                  <ul className="space-y-3 mb-8">
                    {pricingTiers[2].features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-600 leading-snug break-words">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-3 rounded-2xl font-semibold text-sm transition-all cursor-pointer bg-slate-900 hover:bg-slate-800 text-white"
                >
                  Wybieram Pro
                </button>
              </div>

              {/* 4. PAKIET SPECIAL (ODDZIELONY SZARĄ KRESKĄ PO LEWEJ STRONIE OD PAKIETU PRO) */}
              <div className="glass-card rounded-3xl p-6 border border-white/80 flex flex-col justify-between relative transition-all duration-300 lg:border-l lg:border-l-slate-300/80 lg:pl-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{specialTier.title}</h3>
                  <p className="text-xs font-semibold text-slate-500 mb-4">{specialTier.subtitle}</p>

                  <div className="mb-6">
                    <div className="text-2xl sm:text-3xl font-black text-blue-600">
                      {specialTier.price}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {specialTier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-600 leading-snug break-words">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-3 rounded-2xl font-semibold text-sm transition-all cursor-pointer bg-slate-900 hover:bg-slate-800 text-white"
                >
                  Umawiam konsultację
                </button>
              </div>

            </div>

            <p className="text-center text-xs text-slate-500 max-w-3xl mx-auto pt-6 leading-relaxed font-normal break-words">
              * Cena &quot;od&quot; oznacza, że bazowo za pakiet zapłacisz podaną kwotę, jednak może ona wzrosnąć, jeśli zdecydujesz się na implementację płatnego rozwiązania innego usługodawcy (np. gdy będziesz chciał założyć własną domenę, sklep Shoper lub Google Workspace).
            </p>
          </motion.div>
        )}

        {/* WARIANT 2: USŁUGI DISCORD */}
        {pricingCategory === 'discord' && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="glass-card rounded-3xl p-6 sm:p-8 border border-white/80 shadow-md max-w-5xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6 border-b border-slate-200/60 pb-4">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                <DiscordIcon className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Dedykowane Usługi Discord</h3>
            </div>

            <div className="divide-y divide-slate-100">
              {discordServices.map((item, itemIdx) => (
                <div key={itemIdx} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-blue-50/30 px-3 rounded-xl transition-colors">
                  <div className="max-w-xl break-words">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">{item.name}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-sm font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">{item.price}</span>
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="p-2 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 transition-colors cursor-pointer"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* WARIANT 3: USŁUGI STACJONARNE */}
        {pricingCategory === 'local' && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="glass-card rounded-3xl p-6 sm:p-8 border border-white/80 shadow-md max-w-5xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6 border-b border-slate-200/60 pb-4">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Usługi Stacjonarne & Serwisowe (Kraków / Małopolska)</h3>
            </div>

            <div className="divide-y divide-slate-100">
              {localServices.map((item, itemIdx) => (
                <div key={itemIdx} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-blue-50/30 px-3 rounded-xl transition-colors">
                  <div className="max-w-xl break-words">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">{item.name}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-sm font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">{item.price}</span>
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="p-2 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 transition-colors cursor-pointer"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* WARIANT 4: INNE USŁUGI */}
        {pricingCategory === 'other' && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="glass-card rounded-3xl p-6 sm:p-8 border border-white/80 shadow-md max-w-5xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6 border-b border-slate-200/60 pb-4">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                <Sparkles className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Inne Usługi & Projekt Dedykowany</h3>
            </div>

            <div className="divide-y divide-slate-100">
              {otherServices.map((item, itemIdx) => (
                <div key={itemIdx} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-blue-50/30 px-3 rounded-xl transition-colors">
                  <div className="max-w-xl break-words">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">{item.name}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-sm font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">{item.price}</span>
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="p-2 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 transition-colors cursor-pointer"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
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
