import type { Options } from "tsup";
export const tsup: Options = {
  splitting: false,
  sourcemap: true,
  clean: false,
  entryPoints: ["src/index.ts"],
  outDir: "build",
  dts: true,
  minify: true,
};
