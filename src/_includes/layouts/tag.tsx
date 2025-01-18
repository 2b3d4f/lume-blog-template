import Searcher from "lume/core/searcher.ts";

export const layout = "layouts/base.tsx";

interface TagProps extends Lume.Data {
  comp: Lume.Data["comp"];
  query: string;
  title: string;
}

export default ({ query, comp, title }: TagProps) => {
  return (
    <>
      <h1>{title}</h1>
      <comp.Pages query={query} sort="date=desc title=asc" />
    </>
  );
};
