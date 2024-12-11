import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    SUG_KEY: process.env.SUG_KEY,

  },
};

export default nextConfig;
