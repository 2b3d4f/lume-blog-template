export const layout = "layouts/tag.tsx";

interface TagsProps extends Lume.Data {
  search: Lume.Data["search"];
  tagDescs: Lume.Data["tagDescs"];
}

export default function* ({ search, tagDescs }: TagsProps) {
  for (const tag of search.values("tags")) {
    const lastMod = search.page(`type=post ${tag}`, "date=desc");
    const tagDesc = tagDescs[tag as string] || "";
    yield {
      url: `/tags/${tag}/`,
      title: String(tag).charAt(0).toUpperCase() + String(tag).slice(1),
      type: "tag",
      query: `type=post ${tag}`,
      lastMod: lastMod?.date,
      tagDesc: tagDesc,
      tag,
    };
  }
}
