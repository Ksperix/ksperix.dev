'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

function PolandFlag({ className = "w-5 h-5" }) {
  return (
    <svg className={`${className} rounded-full border border-slate-300/60 shadow-sm shrink-0 inline-block`} viewBox="0 0 480 480">
      <defs>
        <clipPath id="circle-pl-opinions">
          <circle cx="240" cy="240" r="240" />
        </clipPath>
      </defs>
      <g clipPath="url(#circle-pl-opinions)">
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
        <clipPath id="circle-uk-opinions">
          <circle cx="240" cy="240" r="240" />
        </clipPath>
      </defs>
      <g clipPath="url(#circle-uk-opinions)">
        <path fill="#012169" d="M0 0h480v480H0z"/>
        <path stroke="#fff" strokeWidth="60" d="m0 0 480 480M480 0 0 480"/>
        <path stroke="#C8102E" strokeWidth="40" d="m0 0 480 480M480 0 0 480"/>
        <path stroke="#fff" strokeWidth="90" d="M240 0v480M0 240h480"/>
        <path stroke="#C8102E" strokeWidth="55" d="M240 0v480M0 240h480"/>
      </g>
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

const content = {
  pl: {
    docTitle: "Niepopularne Opinie — ksperix.dev",
    back: "Wróć do strony głównej",
    title: "Niepopularne Opinie",
    subtitle: "Szczere przemyślenia o branży IT, technologii, sztucznej inteligencji i nowoczesnym zarządzaniu.",
    opinions: [
      {
        number: "#1",
        title: "Sztuczna inteligencja zniszczyła wrażliwość odbiorców na autentyczną kreatywność",
        text: "Jestem głęboko zawiedziony tym, co zalew powtarzalnego AI zrobił z mentalnością ludzi. Dziś wystarczy dodać wyrazisty akcent graficzny, nieszablonowy układ albo żywszy neon, aby ktoś natychmiast przypiął etykietę: 'to pewnie wygenerowało AI'. Ludzie przestali wierzyć w to, że człowiek potrafi spędzić godziny nad dopracowaniem detalu. Zapomnieliśmy, że estetyka i dopracowane rzemiosło istniały długo przed generatywnymi modelami, a oryginalna kreatywność i własna praca tracą na wartości w oczach powierzchownych odbiorców."
      },
      {
        number: "#2",
        title: "Ekosystem oznacza własność – porzućmy gotowe 'linktr.ee'",
        text: "Tworzenie prawdziwego ekosystemu marki polega na budowaniu własnego domu, a nie wynajmowaniu kąta na cudzych platformach. Zamiast wklejać w bio gotowe linki z Linktree, o wiele bardziej profesjonalne i strategiczne jest stworzenie własnego, autorskiego huba pod unikalną domeną (np. z rozszerzeniem .link lub subdomeną). Pozwala to utrzymać pełną kontrolę nad analityką, tożsamością wizualną i doświadczeniem użytkownika, zamiast oddawać swój ruch pośrednikom."
      },
      {
        number: "#3",
        title: "Dedykowane strony 404 i easter eggi to sprawdzian dojrzałości projektu",
        text: "Dla wielu interfejsy to tylko chłodny kod i konwersje. Dla mnie detale tworzą dusze projektu. Przelatujące klocki na stronie 404 czy ukryte podstrony nie są zbędnym bajerem – są dowodem na to, że za projektem stoi żywy człowiek, który dba o emocje odbiorcy nawet w momencie, gdy coś idzie nie tak. Jeśli twórca nie ma czasu na dopracowanie błędu 404, prawdopodobnie idzie na skróty także w kluczowych operacjach."
      },
      {
        number: "#4",
        title: "Toporne systemy ERP przegrywają z dobrze zaprojektowanymi komunikatorami",
        text: "Większość firm przepala ogromne budżety na ociężałe oprogramowanie zarządcze, z którego zespół korzysta z przymusu. Tymczasem centralą nowoczesnych operacji potrafi być świetnie wyarchitektowany serwer Slack lub Discord połączony z autorskimi botami i automatyzacjami. Gdy procesy trafiają tam, gdzie ludzie i tak rozmawiają na co dzień, efektywność zespołu rośnie drastycznie bez niepotrzebnej biurokracji."
      },
      {
        number: "#5",
        title: "Zarządzanie z wieży wyścigowej to fikcja",
        text: "Menedżer, który tylko deleguje zadania z poziomu tabelki w Excelu i nie rozumie tkanki technologicznej swojego produktu, szybko traci autorytet. Prawdziwe przywództwo w IT wymaga znajomości narzędzi, na których pracują ludzie, oraz ciągłego usprawniania środowiska ich pracy. Dobra architektura organizacyjna polega na usuwaniu przeszkód spod nóg zespołu, a nie na mnożeniu raportów."
      }
    ]
  },
  en: {
    docTitle: "Unpopular Opinions — ksperix.dev",
    back: "Back to Home",
    title: "Unpopular Opinions",
    subtitle: "Honest thoughts on the IT industry, technology, artificial intelligence, and modern management.",
    opinions: [
      {
        number: "#1",
        title: "Artificial intelligence ruined the perception of authentic creativity",
        text: "I am deeply disappointed by what the flood of generic AI content has done to human perception. Today, merely adding a vibrant accent, a non-standard layout, or a bright neon shade causes people to jump to conclusions: 'this must be AI-generated'. People stopped believing that an actual human can spend hours refining a single detail. We forgot that craft and aesthetics existed long before generative models, and genuine human creativity is losing its recognized value in the eyes of casual observers."
      },
      {
        number: "#2",
        title: "An ecosystem means total ownership – drop the off-the-shelf 'linktr.ee'",
        text: "Building a true brand ecosystem means building your own home rather than renting a corner on someone else's platform. Instead of dropping generic Linktree links in your bio, it is vastly more professional and strategic to engineer your own custom link hub under your own domain (e.g., using a .link extension or custom subdomain). It grants complete ownership over analytics, visual identity, and user experience instead of surrendering your traffic to middleman platforms."
      },
      {
        number: "#3",
        title: "Custom 404 pages and easter eggs demonstrate project maturity",
        text: "To many, interfaces are just cold code and conversion funnels. To me, micro-details represent the soul of a digital product. Physics-based blocks on a 404 screen or hidden pages aren't unnecessary gimmicks – they prove that there's a real human behind the project who cares about user experience even when things break. If a creator doesn't take time to craft a memorable 404 experience, they likely cut corners in critical backend operations as well."
      },
      {
        number: "#4",
        title: "Clunky enterprise ERPs lose against well-architected chat ecosystems",
        text: "Most companies waste massive budgets on bloated management software that teams hate using. In reality, a masterfully structured Slack or Discord workspace integrated with custom automation bots can handle 90% of operational workflows. When processes live where people naturally communicate every day, productivity skyrockets without bureaucratic friction."
      },
      {
        number: "#5",
        title: "Ivory-tower management is a failure",
        text: "A manager who merely delegates tasks from an Excel spreadsheet without understanding the underlying technology rapidly loses authority. True tech leadership requires hands-on understanding of the tools your team uses and continuous optimization of their working environment. Great organizational architecture is about removing friction from your team's path, not multiplying status reports."
      }
    ]
  }
};

export default function OpinionsPage() {
  const [lang, setLang] = useState('pl');
  const t = content[lang];

  useEffect(() => {
    document.title = t.docTitle;
  }, [lang, t.docTitle]);

  return (
    <div className="min-h-screen text-slate-800 relative selection:bg-blue-500/20 selection:text-blue-900 pb-12 flex flex-col justify-between">
      
      <FluidBackground />

      {/* LIQUID GLASS NAVIGATION */}
      <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
        <nav className="glass-card rounded-full px-6 py-3 flex items-center justify-between gap-4 sm:gap-8 max-w-4xl w-full border border-white/60 shadow-lg shadow-slate-200/50 backdrop-blur-xl">
          <Link 
            href="/" 
            className="font-semibold text-lg tracking-tight text-slate-900 hover:opacity-80 transition-opacity"
          >
            ksperix<span className="text-blue-600 font-bold">.dev</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'pl' ? 'en' : 'pl')}
              className="w-9 h-9 rounded-full glass-card hover:bg-white border border-white/80 flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95 overflow-hidden"
              title={lang === 'pl' ? 'Switch to English' : 'Przełącz na polski'}
            >
              {lang === 'pl' ? <PolandFlag /> : <UKFlag />}
            </button>

            <Link
              href="/"
              className="text-xs md:text-sm font-semibold px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-md inline-flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" /> {t.back}
            </Link>
          </div>
        </nav>
      </header>

      {/* MAIN CONTAINER */}
      <main className="pt-36 px-6 max-w-4xl mx-auto w-full">
        
        {/* HEADER SECTION */}
        <div className="mb-12 text-center sm:text-left">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            {t.title}<span className="text-blue-600">.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg font-normal max-w-2xl leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* OPINIONS LIST */}
        <div className="space-y-8">
          {t.opinions.map((op, idx) => (
            <article 
              key={idx}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/80 shadow-md backdrop-blur-xl bg-white/70 relative overflow-hidden transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <span className="text-2xl sm:text-3xl font-black text-blue-600 shrink-0 font-mono pt-0.5">
                  {op.number}
                </span>

                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug tracking-tight">
                    {op.title}
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    {op.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </main>

      {/* KOMPAKTOWA STOPKA */}
      <footer className="mt-12 py-4 text-center text-[11px] text-slate-400 border-t border-slate-200/60">
        <p>© {new Date().getFullYear()} ksperix.dev. All rights reserved.</p>
      </footer>

    </div>
  );
}
