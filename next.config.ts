import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['buidlers.tech'],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion'],
  },
};

export default nextConfig;
