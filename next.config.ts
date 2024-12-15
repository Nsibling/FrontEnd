import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: "https://nsibling.github.io/FrontEnd/"
  }
};

export default nextConfig;