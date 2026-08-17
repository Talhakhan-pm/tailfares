import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/card", destination: "/card.html" },
      { source: "/card/hassan", destination: "/card-hassan.html" },
    ];
  },
};

export default nextConfig;
