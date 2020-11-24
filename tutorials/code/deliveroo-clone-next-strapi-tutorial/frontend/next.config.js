/* const withCSS = require("@zeit/next-css");
module.exports = withCSS({}); */

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? "./" : "",
};
