import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath, remarkGfm, remarkToc],
    rehypePlugins: [rehypeKatex, rehypeSlug, 
      [rehypeAutolinkHeadings, {
        behavior: 'wrap'
      }]
    ]
  }
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // experimental: {
  //   mdxRs: true
  // }
};

export default withMDX(nextConfig);
