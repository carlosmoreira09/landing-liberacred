/** @type {import('next').NextConfig} */
const nextConfig = {
  deploymentId: process.env.NEXT_DEPLOYMENT_ID,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
