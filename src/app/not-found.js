'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, RefreshCw, Compass } from 'lucide-react';

function PolandFlag({ className = "w-5 h-5" }) {
  return (
    <svg className={`${className} rounded-full border border-slate-300/60 shadow-sm shrink-0 inline-block`} viewBox="0 0 480 480">
      <defs>
        <clipPath id="circle-pl-404">
          <circle cx="240" cy="240" r="240" />
        </clipPath>
      </defs>
      <g clipPath="url(#circle-pl-404)">
        <rect width="480" height="240" fill="#fff" />
        <rect y="240" width="480" height="240" fill="#dc2626" />
      </g>
    </svg>
  );
}

function UKFlag({ className = "w-5 h-5" }) {
  return (
    <svg className={`${className} rounded-full border border-slate-300/60 shadow-sm shrink-0 inline-block`} viewBox="0 0 480 480">
      <defs>
        <clipPath id="circle-uk-404">
          <circle cx="240" cy="240" r="240" />
        </clipPath>
      </defs>
      <g clipPath="url(#circle-uk-404)">
        <path fill="#012169" d="M0 0h480v480H0z"/>
        <path stroke="#fff" strokeWidth="60" d="m0 0 480 480M480 0 0 480"/>
        <path stroke="#C8102E" strokeWidth="40" d="m0 0 480 480M480 0 0 480"/>
        <path stroke="#fff" strokeWidth="90" d="M240 0v480M0 240h480"/>
        <path stroke="#C8102E" strokeWidth="55" d="M240 0v480M0 240h480"/>
      </g>
    </svg>
  );
}

const translations = {
  pl: {
    documentTitle: "Kurczę... Coś nie działa 🐣",
    badge: "Błąd 404 — Zagubiono w czasoprzestrzeni",
    title: "Kurczę... Coś nie działa 🐣",
    desc: "Wygląda na to, że strona, której szukasz, odleciała w nieznane albo nigdy nie istniała. Nie martw się, zdarza się najlepszym!",
    btnHome: "Wróć na stronę główną",
    btnBack: "Wróć do poprzedniej strony",
    footerText: "Zagubiony? Skontaktuj się na ksperix.dev"
  },
  en: {
    documentTitle: "Oops... Something went wrong 🐣",
    badge: "404 Error — Lost in Cyberspace",
    title: "Oops... Something went wrong 🐣",
    desc: "Looks like the page you are looking for flew away into the unknown or never existed in the first place. Don't worry, happens to the best of us!",
    btnHome: "Back to Home",
    btnBack: "Go Back",
    footerText: "Lost? Reach out at ksperix.dev"
  }
};

export default function NotFound() {
  const [lang, setLang] = useState('pl');
  const t = translations[lang];

  // Dynamiczne ustawianie tytułu karty w przeglądarce
  useEffect(() => {
    document.title = t.documentTitle;
  }, [lang, t.documentTitle]);

  return (
    <div className="min-h-screen text-slate-800 relative selection:bg-blue-500/20 selection:text-blue-900 flex flex-col items-center justify-between p-6 bg-[#f8fafc] overflow-hidden">
      
      {/* TŁO FLUID Z ANIMACOWANĄ POŚWIATĄ */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] rounded-full bg-gradient-to-tr from-blue-400/20 via-indigo-300/15 to-sky-200/25 blur-[120px]" />
      </div>

      {/* PASEK GÓRNY / PRZEŁĄCZNIK JĘZYKA */}
      <header className="w-full max-w-4xl flex items-center justify-between relative z-10 pt-4">
        <Link 
          href="/"
          className="font-semibold text-lg tracking-tight text-slate-900 hover:opacity-80 transition-opacity"
        >
          ksperix<span className="text-blue-600 font-bold">.dev</span>
        </Link>

        <button
          onClick={() => setLang(lang === 'pl' ? 'en' : 'pl')}
          className="w-9 h-9 rounded-full glass-card hover:bg-white border border-white/80 flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95 overflow-hidden"
          title={lang === 'pl' ? 'Switch to English' : 'Przełącz na polski'}
        >
          {lang === 'pl' ? <PolandFlag /> : <UKFlag />}
        </button>
      </header>

      {/* GŁÓWNA KARTA 404 */}
      <main className="relative z-10 max-w-2xl w-full my-auto py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 sm:p-14 rounded-3xl border border-white/80 shadow-xl text-center backdrop-blur-2xl bg-white/70 relative overflow-hidden"
        >
          {/* BADGE NA GÓRZE KARTY */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold mb-6">
            <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '10s' }} />
            <span>{t.badge}</span>
          </div>

          {/* WIELKI NUMER 404 */}
          <div className="text-7xl sm:text-9xl font-black tracking-tight text-slate-900/10 absolute -top-4 right-6 pointer-events-none select-none">
            404
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            {t.title}
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 font-normal max-w-lg mx-auto">
            {t.desc}
          </p>

          {/* PRZYCISKI AKCJI */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Home className="w-4 h-4" />
              {t.btnHome}
            </Link>

            <button
              onClick={() => window.history.back()}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-all border border-slate-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.btnBack}
            </button>
          </div>
        </motion.div>
      </main>

      {/* STOPKA */}
      <footer className="relative z-10 text-center text-xs text-slate-400 py-4">
        <p>{t.footerText}</p>
      </footer>

    </div>
  );
}
