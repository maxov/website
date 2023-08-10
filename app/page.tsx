import Image from 'next/image';
import Content from './content.mdx';
import papers from "../data/papers.json";

const MY_NAME = 'Max Ovsiankin';

export default function Home() {
  return (
    <div className="max-w-4xl py-12 m-auto">
      <div className="flex items-center">
        <Image className="w-56 h-56 mr-8 rounded-full" src="/profile.jpg" alt={`${MY_NAME}`} width="320" height="320"/>
        <div className="flex-grow prose prose-a:no-underline prose-a:text-blue-600 hover:prose-a:text-blue-400 prose-a:transition prose-headings:font-bold prose-h1:mb-0 leading-normal max-w-none">
          <h1 className="">{MY_NAME}</h1>
          <Content/>
          <p>Email: ⟨concat ma and xov⟩ at ttic dot edu</p>
        </div>
      </div>
      <div className="mt-14">
        <h2 className="font-bold text-2xl">Papers (α-β order)</h2>
        <div className="mt-3">
          Also see my <a href="https://scholar.google.com/citations?user=f0tA2foAAAAJ" className="text-blue-600 hover:text-blue-400 transition">Google Scholar</a>.
        </div>
        {papers.map(paper => {
          return <div className="mt-5">
            <div className="font-bold">
              {paper.title}
            </div>
            <div>
              <span>
              {paper.authors.map((author, i) => {
                const authorEl =
                  author === MY_NAME ? <span className="font-semibold">{author}</span> : author;
                return <>{authorEl}{i < paper.authors.length - 1 && ', '}</>;
              })}{'. '}
              </span>
              <span className="italic">{paper.venue}{'. '}</span>
              <a href={paper.link.url} className="text-blue-600 hover:text-blue-400 transition">{paper.link.title}</a>
            </div>
          </div>;
        })}
      </div>
    </div>
  )
}
