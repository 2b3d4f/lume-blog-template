import lume from "lume/mod.ts";
import metas from "lume/plugins/metas.ts";
import jsx from "lume/plugins/jsx.ts";
import base_path from "lume/plugins/base_path.ts";
import date from "lume/plugins/date.ts";
import mdx from "lume/plugins/mdx.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import resolve_urls from "lume/plugins/resolve_urls.ts";
import postcss from "lume/plugins/postcss.ts";
import tailwindConfig from "./tailwind.config.ts";

const site = lume({
  src: "src",
});

site.use(metas());
site.use(jsx());
site.use(base_path());
site.use(date());
site.use(mdx());
site.use(
  tailwindcss({
    options: tailwindConfig,
  })
);
site.use(resolve_urls());
site.use(postcss());

export default site;
