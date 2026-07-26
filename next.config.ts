import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "green-albatross-854906.hostingersite.com",
      },
    ],
  },
};

export default nextConfig;
