/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/sessions.html', // Ensure this matches your exact filename in the public folder
      },
    ];
  },
};

module.exports = nextConfig;