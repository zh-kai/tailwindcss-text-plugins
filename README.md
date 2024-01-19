# @freeloop/tailwindcss-text-plugins

text plugins for tailwindcss.

## Installation

Install the plugin from npm:

```sh
npm install -D @freeloop/tailwindcss-text-plugins
```

Then add the plugin to your `tailwind.config.js` file:

```js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require("@freeloop/tailwindcss-text-plugins"),
    // ...
  ],
};
```

## Usage

Provide instructions for how to use the plugin.

## Configuration

If your plugin is configurable, show users how to configure it.

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require("tailwindcss-plugin-name")({
      className: "markdown",
    }),
    // ...
  ],
};
```

[github-ci]: https://github.com/maizzle/tailwindcss-plugin-starter/actions
[github-ci-shield]: https://github.com/maizzle/tailwindcss-plugin-starter/actions/workflows/nodejs.yml/badge.svg
[license]: ./LICENSE
[license-shield]: https://img.shields.io/github/license/maizzle/tailwindcss-plugin-starter?color=0e9f6e

## Class

- `text-stroke`
- `text-stroke-{color}`
- `text-stroke-{width}`
