// cypress/plugins/index.js
const fs = require('fs-extra');
const path = require('path');
const wp = require('@cypress/webpack-preprocessor');

module.exports = on => {
  const options = {
    webpackOptions: {
      resolve: {
        extensions: ['.ts', '.tsx', '.js']
      },
      module: {
        rules: [
          {
            test: /\\.tsx?$/,
            loader: 'ts-loader',
            options: { transpileOnly: true }
          }
        ]
      }
    }
  };
  on('file:preprocessor', wp(options));
};

function getConfig(file) {
  const pathToConfigFile = path.resolve('./cypress', 'config', `${file}.json`);
  return fs.readJson(pathToConfigFile);
}

module.exports = (on, config) => {
  const file = config.env.configFile;
  return getConfig(file);
}
