import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  productionBrowserSourceMaps: true,
  devIndicators: {
    buildActivity: false,
  },
};

export default nextConfig;
