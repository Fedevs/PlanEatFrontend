/** @type {import('next').NextConfig} */
const path = require("path");
const withPWA = require("next-pwa")({
  dest: "public",
});

const nextConfig = withPWA({
  webpack: (config) => {
    config.resolve.alias["@styles"] = path.join(__dirname, "app/styles");
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/planners",
        permanent: true,
      },
    ];
  },
});

module.exports = nextConfig;
