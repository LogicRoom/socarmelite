/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        // These rewrites are checked BEFORE Next.js checks for existing pages
        {
          source: '/',
          destination: '/sessions.html',
        },
      ],
    };
  },
};

module.exports = nextConfig;