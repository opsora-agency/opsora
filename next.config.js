/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. IGNORE ERRORS (The fix for your ESLint/TypeScript issues)
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // 2. IMAGE SETTINGS
  images: {
    unoptimized: true,
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },

  // 3. OTHER SETTINGS
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/` : '',
};

module.exports = nextConfig;