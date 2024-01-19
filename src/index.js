const plugin = require("tailwindcss/plugin");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = plugin(({ addUtilities, matchUtilities, theme }) => {
  addUtilities({
    ".text-stroke": {
      "-webkit-text-stroke": "1px #000;",
    },
  });
  matchUtilities(
    {
      "text-stroke": (color) => ({
        "-webkit-text-stroke-color": `${color};`,
      }),
    },
    { values: flattenColorPalette(theme("colors")), type: "color" }
  );
  matchUtilities(
    {
      "text-stroke": (color) => ({
        "-webkit-text-stroke-width": `${color};`,
      }),
    },
    { values: theme("spacing"), type: "length" }
  );
});
