/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "b.wallet.ir",
      },
    ],
  },
};

export default nextConfig;
