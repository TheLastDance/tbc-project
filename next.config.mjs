/** @type {import('next').NextConfig} */

const noCache = [
  {
    key: 'Cache-Control',
    value: 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
  },
  {
    key: 'Pragma',
    value: 'no-cache',
  },
  {
    key: 'Expires',
    value: '0',
  },
];

const nextConfig = {
  // async headers() {
  //   return [
  //     {
  //       source: '/blog',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
  //         },
  //         {
  //           key: 'Pragma',
  //           value: 'no-cache',
  //         },
  //         {
  //           key: 'Expires',
  //           value: '0',
  //         },
  //       ],
  //     },
  //     {
  //       source: '/blog/:path*',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
  //         },
  //         {
  //           key: 'Pragma',
  //           value: 'no-cache',
  //         },
  //         {
  //           key: 'Expires',
  //           value: '0',
  //         },
  //       ],
  //     }
  //   ];
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        port: '',
        pathname: '/products/images/**',
      },
      {
        protocol: 'https',
        hostname: 's.gravatar.com',
        port: '',
        pathname: '/avatar/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
