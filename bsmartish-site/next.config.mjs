import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./next-intl.config.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['*.ngrok-free.app', '*.ngrok-free.dev', '*.ngrok.io', '*.ngrok.app', '*.ngrok.dev'],
  images: {
    qualities: [100, 75],
  },
}

export default withNextIntl(nextConfig)
