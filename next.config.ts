import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'drive.google.com' },
      { protocol: 'https', hostname: '**.googleusercontent.com' },
      { protocol: 'https', hostname: '**.usercontent.google.com' },
      { protocol: 'https', hostname: 'googleusercontent.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/products',
        destination: '/calves/',
        permanent: true,
      },
      {
        source: '/products/',
        destination: '/calves/',
        permanent: true,
      },
      {
        source: '/products/:id',
        destination: '/calves/:id/',
        permanent: true,
      },
      {
        source: '/products/:id/',
        destination: '/calves/:id/',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          }
        ],
      }
    ];
  },
};

export default nextConfig;
