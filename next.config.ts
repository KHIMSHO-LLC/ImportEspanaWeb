import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.importespana.com",
          },
        ],
        destination: "https://importespana.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
