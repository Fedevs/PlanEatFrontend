/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["@styles"] = path.join(__dirname, "app/styles");
    return config;
  },
};

module.exports = nextConfig;
