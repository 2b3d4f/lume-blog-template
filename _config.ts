import lume from "lume/mod.ts";
import metas from "lume/plugins/metas.ts"
import date from "lume/plugins/date.ts";
import jsx from "lume/plugins/jsx.ts";
import mdx from "lume/plugins/mdx.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import basePath from "lume/plugins/base_path.ts";

const site = lume({
  src: "src",
  location: new URL("https://example.com"),
});

site.use(metas());
site.use(date());
site.use(jsx());
site.use(mdx());
site.use(resolveUrls());
site.use(basePath());

site.copy([".css"])

export default site;
