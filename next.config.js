/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

const withVideos = require('next-videos');

module.exports = withVideos(nextConfig);
// const nextConfig = {
//   reactStrictMode: true,
//   experimental: {
//     appDir: true,
//   },

//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'cdn.sanity.io',
//         port: '',
//         pathname: '/**',
//       },
//     ],
//   },
//   // images: {
//   //   domains: ['lh3.googleusercontent.com', 'images.unsplash.com'],
//   //   remotePatterns: [
//   //     {
//   //       protocol: 'https',
//   //       hostname: 'cdn.sanity.io',
//   //     },
//   //   ],
//   // },
// };

// // module.exports = nextConfig;

// const withVideos = require('next-videos');

// module.exports = withVideos(nextConfig);
