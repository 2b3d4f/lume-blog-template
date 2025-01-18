export const layout = "layouts/tag.tsx";

export default function* ({search}: Lume.Data) {

  for ( const tag of search.values("tags")) {
    const lastMod = search.page(`type=post ${tag}`, "date=desc");
    yield {
      url: `/tags/${tag}/`,
      title: String(tag).charAt(0).toUpperCase() + String(tag).slice(1),
      type: "tag",
      query: `type=post ${tag}`,
      lastMod: lastMod?.date,
      tag
    }
  }
}
