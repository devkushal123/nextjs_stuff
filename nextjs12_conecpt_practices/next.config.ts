import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  productionBrowserSourceMaps: true,
  reactStrictMode: false,
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"placehold.jp"
      },
    ],
  },
};

export default nextConfig;
