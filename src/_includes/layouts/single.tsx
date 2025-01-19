export const layout = "layouts/base.tsx";

export default (data: Lume.Data, helpers: Lume.Helpers) => {
  return (
    <>
      <article>
        <header>
          {data.title ? <h1>{data.title}</h1> : null}
          {data.type === "post" ? (
            <>
            <div><time dateTime={helpers.date(data.date.toISOString(), "ATOM")}>{helpers.date(data.date.toISOString(), "yyyy-MM-dd HH:mm")}</time></div>
              <ul>
                {data.tags.map((tag) => (
                  <li key={tag}>
                    <a href={`/tags/${tag}/`}>
                      {tag.charAt(0).toUpperCase() + tag.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </header>
        {data.children}
      </article>
    </>
  );
};
