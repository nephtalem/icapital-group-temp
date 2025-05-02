/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push(
      ...[
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
      ],
    );

    return config;
  },
  async redirects() {
    return [
      {
        source: "/knowledge-sharing/east-africa-finance-summit",
        destination: "/knowledge-sharing/east-africa-finance-summit/upcoming",
        permanent: true,
      },
    ];
  },
  compiler: {
    styledComponents: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "icapital-cms.techawks.io",
      },
      {
        protocol: "https",
        hostname: "icapital-cms.frontiertech",
      },
      {
        protocol: "https",
        hostname: "icapital.s3.us-east-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
