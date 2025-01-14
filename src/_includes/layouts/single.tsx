import { ReactNode } from "npm:@types/react@*";

export const layout = "layouts/base.tsx";

export default (data: Lume.Data, helpers: Lume.Helpers) => (
  <>
    <article className="px-4 flex flex-col gap-4">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">{data.title}</h1>
        {data.type === "post" && data.date && (
          <p>
            <time dateTime={helpers.date(data.date, "ATOM")}>
              {helpers.date(data.date, "MMMM do, yyyy")}
            </time>
          </p>
        )}
      </header>
      <section className='prose prose-blockquote:not-italic prose-blockquote:font-normal [&_cite]:before:content-["—"] '>
        {data.content as ReactNode}
      </section>
    </article>
  </>
);
