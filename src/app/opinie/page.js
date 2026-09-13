'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Flame } from 'lucide-react';

export default function OpinionsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 px-6 py-16 max-w-3xl mx-auto flex flex-col justify-center">
      
      <Link 
        href="/"
        className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600 transition-colors mb-12 font-medium"
      >
        <ArrowLeft className="w-4 h-4" /> Powrót do strony głównej
      </Link>

      <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/80 shadow-xl bg-white/80 backdrop-blur-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-amber-50 text-amber-600 border border-amber-100">
            <Flame className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            Niepopularne Opinie<span className="text-amber-500">.</span>
          </h1>
        </div>

        <p className="text-slate-600 leading-relaxed mb-6">
          Witaj w sekcji easter-egg! Oto kilka moich przemyśleń i niepopularnych opinii na temat technologii, zarządzania i budowania produktów cyfrowych:
        </p>

        <ul className="space-y-4 text-sm text-slate-700 font-normal">
          <li className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
            🔥 <strong>Większość startupów nie potrzebuje skomplikowanej mikroarchitektury:</strong> Prosty monolit, dobra automatyzacja i czysty kod wygrywają na starcie z rozproszonymi mikroserwisami.
          </li>
          <li className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
            🔥 <strong>Discord i Slack to serce operacji:</strong> Zamiast drogich systemów CRM / ERP, dobrze skonfigurowane komunikatory z autorskimi botami potrafią obsłużyć 90% procesów w firmie.
          </li>
          <li className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
            🔥 <strong>Sama strona WWW bez ekosystemu to wyrzucanie pieniędzy:</strong> Piękna strona nie przyniesie efektu, jeśli nie stoi za nią automatyzacja leada, wsparcie społeczności i sprawna obsługa back-office.
          </li>
        </ul>
      </div>

    </div>
  );
}
