'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

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
    title: "Kurczę... Coś nie działa 🐣",
    desc: "Strona, której szukasz nie istnieje.",
    btnHome: "Strona główna",
    btnBack: "Wróć"
  },
  en: {
    documentTitle: "Oh, snap… 📸",
    title: "Oh, snap… 📸",
    desc: "The page you are looking for does not exist.",
    btnHome: "Home",
    btnBack: "Go back"
  }
};

export default function NotFound() {
  const [lang, setLang] = useState('pl');
  const t = translations[lang];

  const sceneRef = useRef(null);

  // Zmiana tytułu karty przeglądarki
  useEffect(() => {
    document.title = t.documentTitle;
  }, [lang, t.documentTitle]);

  // Ładowanie matter-js i inicjalizacja fizyki klocków
  useEffect(() => {
    let render, runner, engine;

    import('matter-js').then((Matter) => {
      const container = sceneRef.current;
      if (!container) return;

      const width = window.innerWidth;
      const height = window.innerHeight;

      engine = Matter.Engine.create({
        gravity: { x: 0, y: 1 }
      });

      render = Matter.Render.create({
        element: container,
        engine: engine,
        options: {
          width: width,
          height: height,
          wireframes: false,
          background: 'transparent'
        }
      });

      // Ściany i podłoga
      const wallOptions = { isStatic: true, render: { visible: false } };
      const ground = Matter.Bodies.rectangle(width / 2, height + 30, width * 2, 60, wallOptions);
      const leftWall = Matter.Bodies.rectangle(-30, height / 2, 60, height * 2, wallOptions);
      const rightWall = Matter.Bodies.rectangle(width + 30, height / 2, 60, height * 2, wallOptions);

      Matter.Composite.add(engine.world, [ground, leftWall, rightWall]);

      // Kolory klocków
      const colors = ['#2563eb', '#3b82f6', '#60a5fa', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];
      const blocks = [];
      const blockCount = Math.min(Math.floor(width / 45), 35);

      for (let i = 0; i < blockCount; i++) {
        const x = (width / (blockCount + 1)) * (i + 1) + (Math.random() * 20 - 10);
        const y = height - 60 - Math.random() * 180;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const isCircle = Math.random() > 0.7;

        let body;
        if (isCircle) {
          const radius = 18 + Math.random() * 18;
          body = Matter.Bodies.circle(x, y, radius, {
            restitution: 0.6,
            friction: 0.3,
            render: { fillStyle: color, strokeStyle: '#ffffff', lineWidth: 2 }
          });
        } else {
          const w = 40 + Math.random() * 45;
          const h = 28 + Math.random() * 35;
          body = Matter.Bodies.rectangle(x, y, w, h, {
            chamfer: { radius: 8 },
            restitution: 0.4,
            friction: 0.5,
            render: { fillStyle: color, strokeStyle: '#ffffff', lineWidth: 2 }
          });
        }
        blocks.push(body);
      }

      Matter.Composite.add(engine.world, blocks);

      // Chwytanie i przesuwaniem myszą/dotykiem
      const mouse = Matter.Mouse.create(render.canvas);
      const mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: { visible: false }
        }
      });

      if (mouseConstraint.mouse.element) {
        mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
        mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);
      }

      Matter.Composite.add(engine.world, mouseConstraint);
      render.mouse = mouse;

      runner = Matter.Runner.create();
      Matter.Runner.run(runner, engine);
      Matter.Render.run(render);
    });

    return () => {
      if (render && runner && engine) {
        import('matter-js').then((Matter) => {
          Matter.Render.stop(render);
          Matter.Runner.stop(runner);
          Matter.Composite.clear(engine.world, false);
          Matter.Engine.clear(engine);
        });
      }
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#f8fafc] select-none text-slate-800">
      
      {/* KANWA DLA KLOCKÓW FIZYCZNYCH */}
      <div ref={sceneRef} className="absolute inset-0 z-10 pointer-events-auto" />

      {/* PASEK GÓRNY */}
      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-6 max-w-5xl mx-auto pointer-events-auto">
        <Link 
          href="/"
          className="font-semibold text-lg tracking-tight text-slate-900 hover:opacity-80 transition-opacity bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/80 shadow-sm"
        >
          ksperix<span className="text-blue-600 font-bold">.dev</span>
        </Link>

        <button
          onClick={() => setLang(lang === 'pl' ? 'en' : 'pl')}
          className="w-10 h-10 rounded-full glass-card hover:bg-white border border-white/80 flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95 overflow-hidden"
          title={lang === 'pl' ? 'Switch to English' : 'Przełącz na polski'}
        >
          {lang === 'pl' ? <PolandFlag /> : <UKFlag />}
        </button>
      </header>

      {/* TEKST 404 W TLE */}
      <main className="absolute inset-0 z-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
        <h1 className="text-8xl sm:text-9xl font-black text-slate-900/10 tracking-tighter mb-2">
          404
        </h1>

        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-3">
          {t.title}
        </h2>

        <p className="text-slate-500 text-sm sm:text-base max-w-md mx-auto mb-8 font-normal">
          {t.desc}
        </p>

        {/* PRZYCISKI POWROTU */}
        <div className="flex items-center justify-center gap-3 pointer-events-auto">
          <Link
            href="/"
            className="px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            {t.btnHome}
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-2xl bg-white/80 hover:bg-white text-slate-700 font-semibold text-sm transition-all border border-slate-200/80 shadow-sm flex items-center gap-2 cursor-pointer backdrop-blur-md"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.btnBack}
          </button>
        </div>
      </main>

    </div>
  );
}
