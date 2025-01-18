import Searcher from "lume/core/searcher.ts";

interface PagesProps extends Lume.Data {
  search: Searcher;
  query: string;
  sort?: string;
  limit?: number;
}

export default ({ search, query, sort, limit }: PagesProps, helpers: Lume.Helpers) => {
  const pages = search.pages(query, sort, limit);
  return (
    <ul>
      {pages.map((page) => (
        <li key={page.url}>
          <a href={page.url}>
            {page.date ? (
              <>
                <time dateTime={helpers.date(page.date.toISOString(), "ATOM")}>
                  {helpers.date(page.date.toISOString(), "yyyy-MM-dd")}
                </time>
                :{" "}
              </>
            ) : null}
            {page.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
