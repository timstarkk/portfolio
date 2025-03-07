/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use standalone output for better AWS compatibility
  output: 'standalone',
  
  // Optimize images
  images: {
    domains: [],
    // Disable image optimization in development
    unoptimized: process.env.NODE_ENV === 'development',
    // Increase the size limit for images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Increase the timeout for AWS Lambda
  experimental: {
    serverComponentsExternalPackages: ['sharp'],
  },
  
  // Disable React strict mode in production to avoid double-rendering issues
  reactStrictMode: process.env.NODE_ENV === 'development',
}

module.exports = nextConfig
