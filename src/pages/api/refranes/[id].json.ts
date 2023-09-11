import { PROVERBS_DATA } from '../../../data/proverbs.js'

export async function GET ({ params, request }) {
  const id = Number(params.id)
  const proverb = PROVERBS_DATA.find(proverb => proverb.id === id)

  return new Response(
    JSON.stringify(proverb)
  )
}

export function getStaticPaths () {
  const allIds = PROVERBS_DATA.map((refran) => refran.id)
  return allIds.map((id) => ({ params: { id } }))
}
