import type { APIRoute } from 'astro';
import { PROVERBS_DATA } from "../../../data/proverbs.js";

export const GET: APIRoute = ({ params, request }) => {
    const id = Number(params.id);
    const proverb = PROVERBS_DATA.find(proverb => proverb.id === id);
    return new Response(
        JSON.stringify(proverb)
    )
}

export function getStaticPaths() {
    const paths = PROVERBS_DATA.map(proverb => ({
        params: { id: proverb.id }
    }))
    return { paths, fallback: false }
  }