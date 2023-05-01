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
  compiler: {
    emotion: true,
  },
  images: {
    domains: ["icapital-cms.techawks.io"],
  },

  reactStrictMode: true,
};

module.exports = nextConfig;
