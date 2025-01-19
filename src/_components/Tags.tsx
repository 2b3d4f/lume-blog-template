import Searcher from "lume/core/searcher.ts";

interface PagesProps extends Lume.Data {
  search: Searcher;
}

export default ({ search }: PagesProps, helpers: Lume.Helpers) => {
  const tags = search.pages("type=tag", "order=asc lastMod=desc title=asc");
  return (
    <ul>
      {tags.map((tag) => {
        const total = search.pages(`${tag.tag}`).length;
        const lastMod = tag["lastMod"] as Date;
        return (
          <li>
            <a href={tag.url}>{tag.title}</a>
            <br />
            {total} {total === 1 ? "entry" : "entries"}
            {lastMod && (
              <>
                <br />
                Last modified:{" "}
                <time dateTime={helpers.date(lastMod.toISOString(), "ATOM")}>
                  {helpers.date(lastMod.toISOString(), "yyyy-MM-dd")}
                </time>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
};
