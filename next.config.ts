import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/card", destination: "/card.html" }];
  },
};

export default nextConfig;
