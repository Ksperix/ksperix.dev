'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Server, 
  Bot, 
  Globe, 
  Megaphone, 
  Briefcase, 
  Cpu, 
  Layers, 
  Terminal, 
  ExternalLink, 
  Mail, 
  MessageSquare,
  Sparkles
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen text-slate-100 relative selection:bg-purple-500/30">
      
      {/* 1. LIQUID GLASS NAVIGATION */}
      <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
        <nav className="glass-card rounded-full px-6 py-3 flex items-center justify-between gap-8 max-w-4xl w-full backdrop-blur-md border border-white/10 shadow-2xl">
          <a href="#" className="font-extrabold text-xl tracking-wider bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300 bg-clip-text text-transparent">
            KSPERIX<span className="text-purple-500">.</span>
          </a>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">O mnie</a>
            <a href="#services" className="hover:text-white transition-colors">Usługi</a>
            <a href="#vantrx" className="hover:text-purple-400 transition-colors flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" /> VANTRX
            </a>
            <a href="#experience" className="hover:text-white transition-colors">Doświadczenie</a>
          </div>

          <a 
            href="#contact" 
            className="text-xs md:text-sm font-semibold px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all backdrop-blur-md shadow-lg hover:shadow-purple-500/10"
          >
            Kontakt
          </a>
        </nav>
      </header>

      {/* 2. HERO SECTION */}
      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center flex flex-col items-center justify-center min-h-[85vh]">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs md:text-sm font-medium text-purple-300 border border-purple-500/20 mb-8 animate-pulse">
          <Terminal className="w-4 h-4 text-purple-400" />
          <span>7+ Lat w Operations, Community & IT Solutions</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight mb-6">
          Architekt Zespołów, <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            Systemów & Branży Adult UGC
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-light">
          Specjalista od zadań specjalnych. Łączę zarządzanie operacyjne, architekturę serwerów Discord, automatyzację biurową i zaawansowane dedykowane ekosystemy technologiczne.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a 
            href="#vantrx" 
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] transition-all flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" /> Poznaj VANTRX
          </a>
          <a 
            href="#services" 
            className="px-8 py-4 rounded-2xl glass-card font-semibold hover:bg-white/10 transition-all border border-white/10"
          >
            Przegląd Usług
          </a>
        </div>
      </section>

      {/* 3. STATS BAR */}
      <section id="about" className="py-12 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Doświadczenie w Ops', val: '7+ Lat' },
            { label: 'Sektor Adult UGC', val: '3+ Lata' },
            { label: 'Zarządzane Społeczności', val: '20+' },
            { label: 'Automatyzacje i Boty', val: '100%' },
          ].map((stat, i) => (
            <div key={i} className="glass-card p-6 rounded-3xl text-center border border-white/5 backdrop-blur-xl">
              <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">{stat.val}</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED PROJECT: VANTRX */}
      <section id="vantrx" className="py-20 px-6 max-w-5xl mx-auto">
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-purple-500/30 relative overflow-hidden bg-gradient-to-b from-purple-900/10 to-transparent">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold mb-6">
            Dedykowane Rozwiązanie • Adult UGC
          </div>

          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
            VANTRX — Ekosystem nowej ery dla twórców i agencji
          </h2>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
            Od 3 lat rozwijam dedykowane narzędzia i infrastrukturę ukierunkowaną na branżę **Adult UGC**. VANTRX to odpowiedź na potrzebę sprawnej organizacji, automatyzacji zadań operacyjnych, ochrony danych i skalowania biznesu dla twórców oraz zespołów zarządzających.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <ShieldCheck className="w-6 h-6 text-purple-400 mb-2" />
              <h3 className="font-semibold text-sm text-white">Bezpieczeństwo & Ops</h3>
              <p className="text-xs text-slate-400 mt-1">Zarządzanie uprawnieniami i ochrona zasobów cyfrowych.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <Cpu className="w-6 h-6 text-pink-400 mb-2" />
              <h3 className="font-semibold text-sm text-white">Automatyzacja Procesów</h3>
              <p className="text-xs text-slate-400 mt-1">Eliminacja powtarzalnych prac biurowych i technicznych.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <Layers className="w-6 h-6 text-indigo-400 mb-2" />
              <h3 className="font-semibold text-sm text-white">Skalowalna Architektura</h3>
              <p className="text-xs text-slate-400 mt-1">System przygotowany pod duże obciążenia i rozrost ekosystemu.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES GRID */}
      <section id="services" className="py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Obszary Specjalizacji</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Wszechstronne wsparcie techniczne, operacyjne i zarządcze dla Twojego projektu.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all">
            <Server className="w-10 h-10 text-purple-400 mb-6" />
            <h3 className="text-xl font-bold mb-3">Zarządzanie Serwerami Discord & Boty</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Kompleksowa architektura serwerowa od A do Z. Tworzenie własnych botów, automatyczna moderacja, systemy rang, integracje API i budowanie zaangażowanych społeczności.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all">
            <Briefcase className="w-10 h-10 text-pink-400 mb-6" />
            <h3 className="text-xl font-bold mb-3">Zarządzanie Zespołami & Praca Biurowa</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              7-letnie doświadczenie w koordynacji zespołów, optymalizacji procedur biurowych, tworzeniu dokumentacji i nadzorowaniu płynności projektowej.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all">
            <Globe className="w-10 h-10 text-indigo-400 mb-6" />
            <h3 className="text-xl font-bold mb-3">Statyczne Strony Internetowe</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Nowoczesne, ultra-szybkie i bezpieczne strony wizytówkowe oraz landing page'e budowane na Next.js/Tailwind CSS z dbałością o estetykę (Glassmorphism, Dark Mode).
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all">
            <Megaphone className="w-10 h-10 text-emerald-400 mb-6" />
            <h3 className="text-xl font-bold mb-3">Kampanie Reklamowe & Promocja</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Planowanie i realizacja działań promocyjnych, pozyskiwanie odbiorców dla społeczności oraz wsparcie marketingowe w branżach niszowych i Adult UGC.
            </p>
          </div>
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <div className="glass-card p-10 md:p-16 rounded-3xl border border-white/10 backdrop-blur-2xl relative">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Porozmawiajmy o Projekcie</h2>
          <p className="text-slate-300 max-w-lg mx-auto mb-10 text-sm md:text-base">
            Potrzebujesz sprawnego menedżera, architekta społeczności lub dedykowanych rozwiązań IT? Napisz do mnie.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="mailto:contact@ksperix.com" 
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 transition-all text-sm font-semibold"
            >
              <Mail className="w-5 h-5 text-purple-400" /> Napisz e-mail
            </a>
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-sm font-semibold text-slate-300">
              <MessageSquare className="w-5 h-5 text-indigo-400" /> Discord: <span className="text-white">ksperix</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-xs text-slate-500 border-t border-white/5">
        <p>© {new Date().getFullYear()} Ksperix. All rights reserved. Liquid Glass Architecture.</p>
      </footer>

    </div>
  );
}
