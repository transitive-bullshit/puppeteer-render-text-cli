'use strict'

const program = require('commander')

const renderText = require('puppeteer-render-text')
const { version } = require('../package')

module.exports = async (argv) => {
  program
    .name('puppeteer-render-text')
    .version(version)
    .usage('[options] <text>')
    .option('-o, --output <path>', 'path of image file to store result', 'out.png')
    .option('-w, --width <number>', 'optional max width', (s) => parseInt(s))
    .option('-h, --height <number>', 'optional max height', (s) => parseInt(s))
    .option('-g, --load-google-font', 'load font families from google', false)
    .option('-l, --load-font-family <string>', 'font family to load with fontfaceobserver')
    .option('-s, --style <string>', 'JSON string of CSS styles', '{ }')
    .option('-F, --font-family <string>', 'font-family to add to style')
    .option('-S, --font-size <string>', 'font-size to add to style')
    .option('-P, --padding <string>', 'padding to add to style')
    .option('-C, --color <string>', 'color to add to style')
    .parse(argv)

  const opts = {
    output: program.output,
    width: program.width,
    height: program.height,
    loadGoogleFont: program.loadGoogleFont,
    loadFontFamily: program.loadFontFamily,
    style: JSON.parse(program.style)
  }

  if (program.fontFamily) opts.style.fontFamily = program.fontFamily
  if (program.fontSize) opts.style.fontSize = program.fontSize
  if (program.padding) opts.style.padding = program.padding
  if (program.color) opts.style.color = program.color

  if (program.args.length === 1) {
    opts.text = program.args[0]
  } else {
    console.error('invalid arguments')
    program.help()
    process.exit(1)
  }

  await renderText(opts)
}

module.exports(process.argv)
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
