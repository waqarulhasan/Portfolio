import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: { formats: ["image/avif", "image/webp"] },
  experimental: {
    // Tree-shakes icon and animation imports so only what is used ships.
    optimizePackageImports: ["react-icons", "framer-motion"],
  },
  async headers() {
    return [
      {
        source: "/:all*(ico|png|svg|webmanifest)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
