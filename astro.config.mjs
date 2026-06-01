import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
  site: 'https://refranero-espanol.vercel.app/',
  integrations: [tailwind()],
  output: 'static',
  adapter: vercel()
})
