import { privacyApps } from './lib/privacy'

export const baseUrl = 'https://tumraytopaloglu.com'

export default async function sitemap() {
  const lastModified = new Date().toISOString().split('T')[0]

  const staticRoutes = ['', '/about', '/privacy'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
  }))

  const privacyRoutes = privacyApps.map((app) => ({
    url: `${baseUrl}/privacy/${app.slug}`,
    lastModified,
  }))

  return [...staticRoutes, ...privacyRoutes]
}
