/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
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
        permanent: true, // Puedes usar permanent: false si prefieres una redirección temporal
      },
    ];
  },
};

module.exports = nextConfig;
