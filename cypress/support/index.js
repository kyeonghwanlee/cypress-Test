// ES2015 구문을 사용하여 commands.js를 가져옵니다. 
import  './commands' ;
require('cypress-commands');

require('@app-config/cypress').register();
const webpackPreprocessor = require('@cypress/webpack-preprocessor');
const { default: AppConfigPlugin } = require('@app-config/webpack');

module.exports = (on) => {
  const options = {
    webpackOptions: {
      mode: 'development',
      module: {
        rules: [
          { test: AppConfigPlugin.regex, use: { loader: AppConfigPlugin.loader } },
          {
            test: /\.jsx?$/,
            exclude: [/node_modules/],
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env'],
                },
              },
            ],
          },
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
      plugins: [new AppConfigPlugin()],
    },
  };

  on('file:preprocessor', webpackPreprocessor(options));
  import addContext from 'mochawesome/addContext'

  Cypress.on("test:after:run", (test, runnable) => {
    
      let videoName = Cypress.spec.name
      videoName = videoName.replace('/.js.*', '.js')
      const videoUrl = 'videos/' + videoName + '.mp4'

      addContext({ test }, videoUrl)
  });

};

