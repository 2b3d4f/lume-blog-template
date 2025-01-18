import Searcher from "lume/core/searcher.ts";

export const layout = "layouts/base.tsx";

export default (data: Lume.Data, search: Searcher) => {
  return (
    <>
      {data.title ? <h1>{data.title}</h1> : null}
      {data.type === "post" ? (
        <ul>
          {data.tags.map((tag) => (
            <li key={tag}>
              <a href={`/tags/${tag}/`}>
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
      {data.children}
    </>
  );
};
