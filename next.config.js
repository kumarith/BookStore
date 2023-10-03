/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

//module.exports = nextConfig

module.exports = {
  webpack(config) {
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  }
};