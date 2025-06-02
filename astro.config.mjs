import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import compressor from 'astro-compressor'

export default defineConfig({
  site: 'https://site-policies.vercel.app',
  outDir: './dist',
  output: 'static',

  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: page => true
    }),
    compressor()
  ]
})
