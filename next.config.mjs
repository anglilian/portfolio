// next.config.mjs
const isProd = process.env.NODE_ENV === "production";

export default {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/porfolio" : "",
  assetPrefix: isProd ? "/portfolio/" : "",
};
