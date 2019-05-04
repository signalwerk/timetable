const fs = require('fs');

const postcssCalc = require('postcss-calc');
const postcssPresetEnv = require('postcss-preset-env');
const postcssNested = require('postcss-nested');
const postcssVars = require('postcss-simple-vars');
const postcssImport = require('postcss-import');

// this could later be exported
const config = {
  root: `${__dirname}/src/`,
};

module.exports = {
  plugins: [
    postcssImport({
      root: config.root,
    }),
    postcssVars(),
    postcssCalc(),
    postcssPresetEnv({
      stage: 0,
      browsers: ['last 2 versions', 'IE > 10'],
    }),
    postcssNested(),
  ],
};
