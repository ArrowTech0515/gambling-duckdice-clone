import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.shutterstock.com",
        pathname: "/**", // Match all paths
      },
      {
        protocol: "https",
        hostname: "www.flagpedia.net",
        pathname: "/**", // Match all paths
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        pathname: "/**", // Match all paths
      },
    ],
  },
};

export default nextConfig;
