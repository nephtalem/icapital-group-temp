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
    domains: ["api.shewaber.com", "dev-api.shewaber.com"],
  },

  reactStrictMode: true,
};

module.exports = nextConfig;
