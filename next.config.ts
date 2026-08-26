import type { NextConfig } from "next";

// A project GitHub Pages site is served from https://<user>.github.io/<repo>/,
// never from the domain root, so every absolute path the build emits has to
// carry the repo name. basePath rewrites the app's own routes and next/link
// hrefs; assetPrefix does the same for the /_next/ chunks. trailingSlash makes
// each route land as <route>/index.html, which is what keeps a deep link
// working on refresh — Pages has no server to fall back to.
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/testproject1",
  assetPrefix: "/testproject1/",
  trailingSlash: true,
  // Pages serves plain files; there is no Next image optimizer at runtime.
  images: { unoptimized: true },
};

export default nextConfig;
