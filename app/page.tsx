import Image from 'next/image';
import Content from './content.mdx';
import papers from "../data/papers.json";

const MY_NAME = 'Max Ovsiankin';

type Paper = (typeof papers)[number];
type PaperYears = {
  year: number,
  papers: Paper[]
};

function groupPapers(paperList: typeof papers): PaperYears[] {
  const years = new Map<number, Paper[]>();
  let minYear = Infinity;
  let maxYear = 0;
  for (const paper of paperList.reverse()) {
    minYear = Math.min(minYear, paper.year);
    maxYear = Math.max(maxYear, paper.year);
    if (years.has(paper.year)) {
      years.get(paper.year)!.splice(0, 0, paper);
    } else {
      years.set(paper.year, [paper]);
    }
  }
  let paperYears: PaperYears[] = [];
  for (let year = maxYear; year >= minYear; year--) {
    if (years.has(year)) {
      paperYears.push({
        year,
        papers: years.get(year)!
      });
    }
  }
  return paperYears;
}

const groupedPapers = groupPapers(papers);

export default function Home() {
  return (
    <div className="max-w-4xl px-4 py-12 m-auto">
      <div className="flex items-center">
        <Image className="w-56 h-56 mr-8 rounded-full" src="/profile.jpg" alt={`${MY_NAME}`} width="320" height="320"/>
        <div className="flex-grow prose prose-a:no-underline prose-a:text-blue-600 hover:prose-a:text-blue-400 prose-a:transition prose-headings:font-bold prose-h1:mb-0 leading-normal max-w-none">
          <h1 className="">{MY_NAME}</h1>
          <Content/>
          <p>Email: [concat ma and xov] at ttic dot edu</p>
        </div>
      </div>
      <div className="mt-14">
        <h2 className="font-bold text-2xl">Publications</h2>
        <div className="mt-3">
          All authors are in α-β order as is customary in TCS.
          Also see my <a href="https://scholar.google.com/citations?user=f0tA2foAAAAJ" className="text-blue-600 hover:text-blue-400 transition">Google Scholar</a>.
        </div>
        {groupedPapers.map((group, i) => {
          return <div className="mt-5" key={i}>
            <div className="font-bold text-lg">
              {group.year}
            </div>
            {
              group.papers.map((paper, i) => {
                return <div className="mt-2" key={i}>
                  <div className="font-bold">
                    {paper.title}
                  </div>
                  <div>
                    <span>
                    {paper.authors.map((author, i) => {
                      const authorEl =
                        author === MY_NAME ? <span className="font-bold">MO</span> : author;
                      return <>{authorEl}{i < paper.authors.length - 1 && ', '}</>;
                    })}{'. '}
                    </span>
                    {paper.venue && <span className="italic">{paper.venue}{'. '}</span>}
                    {paper.link && <a href={paper.link.url} className="text-blue-600 hover:text-blue-400 transition">{paper.link.title}</a>}
                  </div>
                </div>;
              })
            }
          </div>
        })}
      </div>
    </div>
  )
}
