const fs = require('fs');
const path = require('path');

let gridsomeModules = fs.realpathSync("node_modules/gridsome");
gridsomeModules = path.resolve(gridsomeModules, "..");

module.exports = function (api) {
  api.chainWebpack((config) => {
    config.resolveLoader.modules.prepend(gridsomeModules);
    return config;
  });
}
