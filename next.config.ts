import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'daniil-dev-cms.vercel.app',
      },
    ],
  },
};

export default nextConfig;
