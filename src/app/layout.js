import './globals.css';

export const metadata = {
  title: 'Ksperix — Operations, Community & Tech Lead',
  description: 'Portfolio Ksperix: 7 lat w zarządzaniu społecznościami, serwerami Discord, automatyzacją i systemami dla branży Adult UGC (VANTRX).',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className="antialiased selection:bg-purple-500/30 selection:text-purple-200">
        {/* Tło Liquid Glass z płynnymi plamami światła */}
        <div className="liquid-bg" />
        {children}
      </body>
    </html>
  );
}
