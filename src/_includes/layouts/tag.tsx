export const layout = "layouts/base.tsx";

interface TagsProps {
  comp: Lume.Data["comp"];
  search: Lume.Data["search"];
  query: string;
  title: string;
}

export default function (
  { comp, query, title }: TagsProps,
) {
  return (
    <>
      <article className="px-4 flex flex-col gap-4">
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">{title}</h1>
        </header>
        <section className='prose prose-blockquote:not-italic prose-blockquote:font-normal'>
          <comp.Pages query={query} order="date=desc title=asc"/>
        </section>
      </article>
    </>
  );
}
