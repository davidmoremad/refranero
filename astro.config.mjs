import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  site: 'https://refranero-espanol.vercel.app/',
  integrations: [tailwind()],
  output: 'hybrid',
  adapter: vercel()
})
