import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/FrontEnd',
  env: {
    NEXT_PUBLIC_BASE_PATH: "https://nsibling.github.io/FrontEnd/"
  }
};

export default nextConfig;