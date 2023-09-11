import { PROVERBS_DATA } from '../../data/proverbs.js'

export const prerender = false

const proverb = PROVERBS_DATA[Math.floor(Math.random() * PROVERBS_DATA.length)]

export async function GET () {
  return new Response(
    JSON.stringify(proverb)
  )
}
