export const layout = "layouts/tag.tsx";

export default function* ({search}: Lume.Data) {
  for ( const tag of search.values("tags")) {
    yield {
      url: `/tags/${tag}/`,
      title: String(tag).charAt(0).toUpperCase() + String(tag).slice(1),
      type: "tag",
      query: `type=post ${tag}`,
      tag
    }
  }
}
