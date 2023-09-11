import type { APIRoute } from 'astro';
import { PROVERBS_DATA } from "../../data/proverbs.js";

const proverbs = PROVERBS_DATA.sort((a, b) => a.id - b.id);

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify(proverbs)
  )
}