/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push(
      ...[
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
      ]
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
    emotion: true,
  },
  images: {
    domains: ["strapi.icapitalafrica.org"],
  },

  reactStrictMode: true,
  swcMinify: false,
};

module.exports = nextConfig;
