# puppeteer-render-text-cli

> CLI for rendering text with headless chrome.

[![NPM](https://img.shields.io/npm/v/puppeteer-render-text-cli.svg)](https://www.npmjs.com/package/puppeteer-render-text-cli) [![Build Status](https://travis-ci.com/transitive-bullshit/puppeteer-render-text-cli.svg?branch=master)](https://travis-ci.com/transitive-bullshit/puppeteer-render-text-cli) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<p align="center">
  <img width="502" alt="Logo" src="https://cdn.rawgit.com/transitive-bullshit/puppeteer-render-text/master/media/logo.png">
</p>

This CLI also has a [library](https://github.com/transitive-bullshit/puppeteer-render-text).

## Why?

ImageMagick is the traditional unix tool to programatically [render text](http://www.imagemagick.org/Usage/text/), and while it works very well for simple use cases, trying to use it to render rich text or html is very difficult. [Pango](https://www.pango.org/) is another option that's been around for ages, but both suffer from archaic syntax and minimal rich text support.

[Puppeteer](https://github.com/GoogleChrome/puppeteer), on the other hand, allows for robust, headless chrome screenshots with best-in-class support for all modern html / text / font features.

**This module makes it easy to use headless chrome to render text + html to images.**

## Features

-   built-in [fontfaceobserver](https://fontfaceobserver.com/)
-   easily load [google fonts](https://fonts.google.com/)
-   optional word-wrap
-   main content is just **html**
-   styling is done via [**css**](https://www.w3schools.com/jsref/dom_obj_style.asp)
-   handles multiple fonts
-   thoroughly tested
-   includes a [CLI](https://github.com/transitive-bullshit/puppeteer-render-text-cli)

## Install

```bash
npm install -g puppeteer-render-text-cli
```

## Usage


## Related

-   [puppeteer-render-text](https://github.com/transitive-bullshit/puppeteer-render-text) - Library for this CLI.
-   [puppeteer](https://github.com/GoogleChrome/puppeteer) - Headless Chrome Node API.
-   [awesome-puppeteer](https://github.com/transitive-bullshit/awesome-puppeteer) - Curated list of awesome puppeteer resources.

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)
