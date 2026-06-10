import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages — emits an `out/` folder of HTML/CSS/JS.
  output: "export",

  // next/image's default optimizer needs a server; disable it for static export.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
