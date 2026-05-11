/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Konieczne dla GitHub Pages
  basePath: '/MegaThread/app', // Nazwa Twojego repozytorium
  images: {
    unoptimized: true, // GitHub Pages nie wspiera optymalizacji obrazów Next.js
  },
};

export default nextConfig;