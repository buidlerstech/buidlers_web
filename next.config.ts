import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "buidlers.tech",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["framer-motion"],
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
};

export default nextConfig;
