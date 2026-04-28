/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/blog/:path*',
        destination: 'https://renua-one.ghost.io/:path*',  // Без /blog в destination!
      },
    ];
  },
};

export default nextConfig;
