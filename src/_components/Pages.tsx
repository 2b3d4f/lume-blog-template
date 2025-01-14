interface ComponentProps {
  search: Lume.Data["search"];
  query: string;
  order: string;
  limit: number;
  showMore?: boolean;
}

export default function (
  { search, query, order, limit, showMore }: ComponentProps,
  helpers: Lume.Helpers
) {
  const posts = search.pages(query, order, limit);
  const totalPosts = search.pages(query).length;
  return (
    <>
      {posts.map((post) => {
        return (
          <article className="prose-h2:m-0 prose-p:m-0 first:mt-0 last:mb-0 my-5 flex flex-col gap-1">
            <h2>
              <a href={post.url}>{post.title}</a>
            </h2>
            <p className="text-sm">
              <time dateTime={helpers.date(post.date, "ATOM")}>
                {helpers.date(post.date, "MMM do, yyyy")}
              </time>
            </p>
          </article>
        );
      })}
      {showMore && totalPosts > limit && (
        <a href="/posts/" className="block my-5 last:mb-0">
          Show more posts
        </a>
      )}
    </>
  );
}
