import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/Latest_Resume.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="Chetanya_Singh_Resume.pdf"',
          },
          {
            key: "Content-Type",
            value: "application/pdf",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
