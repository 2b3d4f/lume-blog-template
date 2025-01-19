export const layout = "layouts/base.tsx";

interface TagProps extends Lume.Data {
  comp: Lume.Data["comp"];
  query: string;
  title: string;
  tagDesc: string;
}

export default ({ query, comp, title, tagDesc }: TagProps) => {
  return (
    <>
      <article>
        <header>
          <h1>{title}</h1>
          {tagDesc && <p>{tagDesc}</p>}
        </header>
        <comp.Pages query={query} sort="date=desc title=asc" />
      </article>
    </>
  );
};
