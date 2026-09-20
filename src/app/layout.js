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
  // DODANE TAGI OPEN GRAPH DLA BANERU:
  openGraph: {
    title: 'Ksperix.Dev — Ecosystems',
    description: 'Buduję dedykowane ekosystemy operacyjne, automatyzacje zespołowe i rozwiązania webowe.',
    url: 'https://ksperix.dev',
    siteName: 'ksperix.dev',
    images: [
      {
        url: 'https://ksperix.dev/og-image.png', // Pełny adres do Twojego banera
        width: 1200,
        height: 630,
        alt: 'Ksperix.Dev Banner',
      },
    ],
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ksperix.Dev — Ecosystems',
    description: 'Buduję dedykowane ekosystemy operacyjne, automatyzacje zespołowe i rozwiązania webowe.',
    images: ['https://ksperix.dev/og-image.png'],
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
