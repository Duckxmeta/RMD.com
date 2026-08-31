import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Allows static SVG/JPEG placeholder rendering without external domain restrictions
  },
};

export default nextConfig;
