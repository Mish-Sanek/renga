/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/blog/:path*',
        destination: 'https://renua-one.ghost.io/:path*', // <- КЛЮЧЕВОЙ МОМЕНТ: без /blog
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/blog/:path*',
        headers: [
          {
            key: 'X-Forwarded-Host',
            value: 'renua.one',
          },
          {
            key: 'X-Forwarded-Proto',
            value: 'https',
          },
          {
            key: 'X-Forwarded-For',
            value: '', // Vercel подставит IP автоматически
          },
        ],
      },
    ];
  },
};

export default nextConfig;
