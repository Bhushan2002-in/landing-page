/**
 * Configure static export so the site can be served from GitHub Pages.
 * NEXT_PUBLIC_BASE_PATH defaults to repo name; override to "" when using a custom domain/username.github.io
 */
const repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH
  ? `/${process.env.NEXT_PUBLIC_BASE_PATH.replace(/^\//, "")}`
  : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: repoBasePath || undefined,
  assetPrefix: repoBasePath || undefined,
};

export default nextConfig;
