import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { processPost, sortPostsDesc } from '../../utils/posts';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const rawPosts = await getCollection('posts');
  const processed = rawPosts.map(processPost);
  const posts = sortPostsDesc(processed.filter((p) => p.category !== 'talk')).slice(0, 10);

  return rss({
    title: 'Aniket Pant - Notes and Essays by a developer',
    description: 'Aniket is a full stack developer who loves Go and JavaScript.',
    site: context.site ? context.site.toString() : 'https://www.aniketpant.com',
    items: posts.map((post) => ({
      title: post.title,
      pubDate: post.date,
      description: post.excerpt || post.title,
      link: post.url,
    })),
    customData: `<language>en-us</language>`,
  });
}
