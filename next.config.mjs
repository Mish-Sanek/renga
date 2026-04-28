/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/blog',
        destination: 'https://renua-one.ghost.io/',
      },
      {
        source: '/blog/:path*/',
        destination: 'https://renua-one.ghost.io/',
      },
      {
        source: '/blog/:path*',
        destination: 'https://renua-one.ghost.io/',
      }
    ];
  },

  async headers() {
    return [
      {
        source: '/blog',
        headers: [
          {
            key: 'X-Forwarded-Host',
            value: 'renua.one',  // ваш основной домен
          },
          {
            key: 'X-Forwarded-Proto',
            value: 'https',
          },
          {
            key: 'X-Forwarded-For',
            value: '',  // Vercel подставит IP автоматически
          },
        ],
      },
    ];
  },
};

export default nextConfig;
