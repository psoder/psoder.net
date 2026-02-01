import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

// oxlint-disable-next-line func-style
export async function GET(context) {
    const blog = await getCollection("blog");
    return rss({
        title: "Pontus’s Blog",
        description: "All the posts!",
        site: context.site,
        trailingSlash: false,
        items: blog.map((post) => ({
            title: post.data.title,
            pubDate: post.data.publicationDate,
            description: undefined,
            // Compute RSS link from post `id`
            // This example assumes all posts are rendered as `/blog/[id]` routes
            link: `/blog/${post.slug}`,
            customData: `<guid isPermaLink="false">${post.data.id}</guid>`,
        })),
    });
}
