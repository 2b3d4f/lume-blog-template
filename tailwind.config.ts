import type { Config } from "lume/deps/tailwindcss.ts";
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{mdx,js,jsx,ts,tsx}"],
  plugins: [typography],
} satisfies Config;
