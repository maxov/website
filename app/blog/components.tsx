import { ReactNode } from "react";

type PostMeta = {
  title: string,
  date: string
};

type TheoremProps = {
  children: ReactNode,
  subtitle?: string
}
export function Theorem({ children, subtitle }: TheoremProps) {
  return <div className="bg-slate-100 pt-3 p-3 pb-1 rounded">
    <div style={{marginBottom: '-1.25rem'}}>
      <span className="font-bold">Theorem.</span>
      { subtitle !== undefined && <span className="italic">({subtitle})</span>}
    </div>
    {children}
  </div>
}

type PostLayoutProps = {
  children: ReactNode,
  meta: PostMeta
}
export function PostLayout({
  children,
  meta
}: PostLayoutProps) {
  return (
    <div className="max-w-4xl px-4 py-12 m-auto">
      <h1 className="font-bold text-4xl mb-2">{meta.title}</h1>
      <h3 className="text-gray-500 text-lg">{meta.date}</h3>
      <div className="mt-6">
      <article className="prose prose-a:no-underline prose-a:text-blue-600 hover:prose-a:text-blue-400 prose-a:transition prose-headings:font-bold max-w-none prose-h2:mt-4">
        {children}
      </article>
      </div>
  </div>
  )
}

export function metad(meta: PostMeta) {
  return {
    title: `Theory Will Only Take You So Far | ${meta.title}`
  };
}
