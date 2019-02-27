var tailwindcss = require("tailwindcss");
var postcssPresetEnv = require("postcss-preset-env");
module.exports = {
  plugins: [tailwindcss("./tailwind.js"), postcssPresetEnv()]
};
