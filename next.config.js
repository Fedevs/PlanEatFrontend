/** @type {import('next').NextConfig} */
const path = require("path");
const withPWA = require("next-pwa")({
  dest: "public",
  // Remove next line if you need to test PWA in development
  disable: process.env.NODE_ENV === "development",
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
  env: {
    BASE_URL: process.env.BASE_URL,
  },
});

module.exports = nextConfig;
