import type { APIRoute } from 'astro';
import { PROVERBS_DATA } from "../../data/proverbs.js";
import renderOgImage from "../../utils/og.ts";

export function getStaticPaths() {
    const posts = PROVERBS_DATA;
    return posts.map((post) => ({
        params: { slug: post.slug },
        props: post,
    }));
}

export const GET: APIRoute = async function GET({ params, request }) {
    const proverb = PROVERBS_DATA.find((post) => post.slug === params.slug);
    return renderOgImage(proverb.proverb, proverb.meaning);
}
