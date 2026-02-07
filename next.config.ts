import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "web-site-rainandflowers.vercel.app",
          },
        ],
        destination: "https://rainandflowers.vercel.app/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
