/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s.abcnews.com",
      },
      {
        protocol: "https",
        hostname: "imagez.tmz.com",
      },
      {
        protocol: "https",
        hostname: "a4.espncdn.com",
      },
    ],
  },
};

module.exports = nextConfig;
