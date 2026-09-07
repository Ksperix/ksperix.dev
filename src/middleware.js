import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['pl', 'en'],
  defaultLocale: 'pl',
  localePrefix: 'as-needed' // <--- Nie dodaje /pl do głównego adresu
});

export const config = {
  // Wykluczamy pliki statyczne, favicony i api, by middleware ich nie blokował
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)']
};
