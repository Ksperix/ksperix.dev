import './globals.css';

export const metadata = {
  title: 'Ksperix.Dev — Ecosystems',
  description: 'Buduję dedykowane ekosystemy operacyjne, automatyzacje zespołowe i rozwiązania webowe.',
  icons: {
    icon: [
      { url: '/dev.png?v=2', type: 'image/png' },
    ],
    apple: '/dev.png?v=2',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className="antialiased selection:bg-blue-500/20 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
