import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact(), mdx(), expressiveCode()],
  output: "static"
});