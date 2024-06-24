// next.config.mjs
const isProd = process.env.NODE_ENV === "production";

export default {
  output: "export",
  images: {
    unoptimized: false,
  },
  basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio" : "",
};
