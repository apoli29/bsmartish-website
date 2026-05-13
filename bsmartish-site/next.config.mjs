/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['*.ngrok-free.app', '*.ngrok-free.dev', '*.ngrok.io', '*.ngrok.app', '*.ngrok.dev'],
  images: {
    qualities: [100, 75],
  },
}

export default nextConfig
