/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/blog',
        destination: 'https://renua-one.ghost.io/blog/',
      },
      {
        source: '/blog/:path*',
        destination: 'https://renua-one.ghost.io/blog/:path*',
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
            value: req?.ip || '', // Vercel подставит IP автоматически
          },
        ],
      },
    ];
  },
};

export default nextConfig;
