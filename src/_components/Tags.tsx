interface ComponentProps {
  search: Lume.Data["search"];
}

export default function ({ search }: ComponentProps, helpers: Lume.Helpers) {
  const posts = search.pages(`type=tag`, "order=asc title=asc");
  return (
    <>
      {posts.map((post) => {
        const totalPosts = search.pages(`${post.tag}`).length;
        const lastModPage = search.page(`${post.tag}`, "date=desc");
        return (
          <article className="prose-h2:m-0 prose-p:m-0 first:mt-0 last:mb-0 my-5 flex flex-col gap-1">
            <h2>
              <a href={post.url}>{post.title}</a>
            </h2>
            <p className="text-sm flex flex-col">
              <span>
                {totalPosts} {totalPosts === 1 ? "entry" : "entries"}
              </span>
              {lastModPage?.date ? (
                <>
                  <span>
                    Last updated{" "}
                    <time dateTime={helpers.date(lastModPage.date, "ATOM")}>
                      {helpers.date(lastModPage.date, "MMM do, yyyy")}
                    </time>
                  </span>
                </>
              ) : null}
            </p>
          </article>
        );
      })}
    </>
  );
}
