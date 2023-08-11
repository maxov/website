import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

const POSTS_PATH = './app/blog/';

async function getPosts() { 
  const postsData = await Promise.all(fs.readdirSync(POSTS_PATH).filter(f => {
    const fStat = fs.statSync(path.join(POSTS_PATH, f));
    return fStat.isDirectory();
  }).map(async f => {
    const postData = await import(`app/blog/${f}/page.mdx`);
    const newMeta = {
      ...postData.meta,
      slug: f
    };
    return {
      ...postData,
      meta: newMeta
    };
  }));
  return postsData.sort((p1, p2) => {
    if (p1.meta.slug < p2.meta.slug) return 1;
    else return -1;
  });
};

export const metadata = {
  title: 'Theory Will Only Take You So Far'
};

export default async function Blog() {

  const posts = await getPosts();

  return <>
    <div className="max-w-4xl px-4 py-12 m-auto">
      <h1 className="font-bold text-4xl mb-2">Theory Will Only Take You So Far</h1>
      <p className="text-gray-500 text-lg">Max Ovsiankin&apos;s theoretical computer science blog</p>
      <div className="mt-5">
        {posts.map(post => {
          return <Link href={`/blog/${post.meta.slug}/`} passHref key={post.meta.slug} className="hover:text-gray-600 transition">
            <div className="py-4">
              <div className="flex justify-between align-middle gap-2">
                <div>
                  <h2 className="text-xl font-bold">{post.meta.title}</h2>
                </div>
                <div className="my-auto text-gray-500">
                  <p>{post.meta.date}</p>
                </div>
              </div>
              {post.meta.description && <div className="text-gray-700">
                {post.meta.description}
              </div>}
            </div>        
          </Link>;
        })}
      </div>
    </div>
  </>;
}
