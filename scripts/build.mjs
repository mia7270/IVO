import { cp, mkdir, readdir, rm } from "node:fs/promises";

const output = "dist/client";

await rm("dist", { recursive: true, force: true });
await mkdir(output, { recursive: true });

const pages = (await readdir(".")).filter(name =>
  name.endsWith(".html")
);

await Promise.all([
  ...pages.map(name => cp(name, `${output}/${name}`)),
  cp("support.js", `${output}/support.js`),
  cp("assets", `${output}/assets`, { recursive: true }),
]);

console.log(`Website built with ${pages.length} HTML pages.`);
