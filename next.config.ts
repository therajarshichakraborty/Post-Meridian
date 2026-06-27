import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  /* restart comment v11 */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "miro.medium.com",
        pathname: "/**", // Matches all image subpaths
      },
    ],
  },
};

export default nextConfig;
