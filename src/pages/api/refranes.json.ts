import { PROVERBS_DATA } from '../../data/proverbs.js'

const proverbs = PROVERBS_DATA.sort((a, b) => a.id - b.id)

export async function GET () {
  return new Response(
    JSON.stringify(proverbs)
  )
}
