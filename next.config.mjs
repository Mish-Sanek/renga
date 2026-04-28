/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ваши существующие настройки (если были)
  
  // НАСТРОЙКА PROXY ДЛЯ /blog
  async rewrites() {
    return [
      {
        source: '/blog',
        destination: 'https://renua-one.ghost.io/',
      },
    ];
  },

  // ВАЖНО: Добавляем заголовки для Ghost
  async headers() {
    return [
      {
        source: '/blog/',
        headers: [
          {
            key: 'X-Forwarded-Host',
            value: 'renua.one',
          },
          {
            key: 'X-Forwarded-Proto',
            value: 'https',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
