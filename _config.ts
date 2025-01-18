import lume from "lume/mod.ts";
import metas from "lume/plugins/metas.ts";
import date from "lume/plugins/date.ts";
import prism from "lume/plugins/prism.ts";
import jsx from "lume/plugins/jsx.ts";
import mdx from "lume/plugins/mdx.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import basePath from "lume/plugins/base_path.ts";

import "npm:prismjs@*/components/prism-typescript.js";

const site = lume({
  src: "src",
  // Change this to your site URL
  location: new URL("https://2b3d4f.github.io/lume-blog-template"),
});

site.use(metas());
site.use(date());
site.use(jsx());
site.use(mdx());
site.use(
  prism({
    theme: [
      {
        name: "okaidia",
        cssFile: "prism.css",
      },
    ],
  })
);
site.use(resolveUrls());
site.use(basePath());

site.copy([".css"]);

export default site;
