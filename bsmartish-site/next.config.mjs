/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['*.ngrok-free.app', '*.ngrok-free.dev', '*.ngrok.io', '*.ngrok.app', '*.ngrok.dev'],
  images: {
    qualities: [100, 75],
  },

  async redirects() {
    return [
      // bsmartish.pt is a secondary domain: everything it receives belongs on
      // bsmartish.com, which is the canonical host used by metadataBase, the
      // schema BASE_URL, every canonical tag and the sitemap.
      //
      // 308 (permanent: true) so search engines transfer ranking to the .com
      // and stop indexing the .pt, and so the method is preserved.
      //
      // This only fires if bsmartish.pt actually resolves to this deployment
      // (added as a domain on the same Vercel project). If instead it is
      // redirected at the registrar, at Cloudflare, or by Vercel's own
      // "Redirect to" domain setting, this rule simply never matches and
      // costs nothing — it is a safety net, not a conflict.
      {
        source: '/:path*',
        has: [{ type: 'host', value: '(www\\.)?bsmartish\\.pt' }],
        destination: 'https://www.bsmartish.com/:path*',
        permanent: true,
      },
      // Old WordPress site: pages with a real equivalent on the new site keep
      // the value of their inbound links. Everything else (Barcelona and Costa
      // Brava projects, /category/, /feed/) is left to 404 on purpose.
      // The old /pt-pt pages were Portuguese, so they go to the PT routes.
      { source: '/pt-pt', destination: '/pt', permanent: true },
      { source: '/pt-pt/sobre-nos', destination: '/pt/sobre-nos', permanent: true },
      { source: '/pt-pt/servicos', destination: '/pt/sobre-nos', permanent: true },
      { source: '/pt-pt/os-nossos-projetos', destination: '/pt/arrendamento-media-duracao-porto', permanent: true },
      // The English legal notice moved so its URL matches its title.
      { source: '/legal-notice', destination: '/legal-information', permanent: true },
      // Apex to www on the canonical domain, so a single host serves the site.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'bsmartish\\.com' }],
        destination: 'https://www.bsmartish.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
