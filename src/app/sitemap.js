export default async function sitemap() {
  const baseUrl = 'https://ksperix.dev';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Jeśli w przyszłości dodasz podstrony (np. /opinions), możesz je tutaj dopisać:
    {
      url: `${baseUrl}/opinions`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
