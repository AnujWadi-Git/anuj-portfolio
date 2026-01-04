/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // static export for Cloudflare Pages
  images: { unoptimized: true } // Cloudflare Pages will serve static images
};

module.exports = nextConfig;
