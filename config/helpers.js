var path = require('path');

const EVENT = process.env.npm_lifecycle_event || '';

// Helper functions
var ROOT = path.resolve(__dirname, '..');

function hasProcessFlag(flag) {
  return process.argv.join('').indexOf(flag) > -1;
}

function hasNpmFlag(flag) {
  return EVENT.includes(flag);
}

function isWebpackDevServer() {
  return process.argv[1] && !! (/webpack-dev-server/.exec(process.argv[1]));
}

var root = path.join.bind(path, ROOT);

function extendAppConfig(enviromentVars,environment_config){
  enviromentVars['ENVIRONMENT_CONFIG'] = {}; 
  for(var newVar  in environment_config){
    if(!enviromentVars.hasOwnProperty(newVar)){
      enviromentVars.ENVIRONMENT_CONFIG[newVar] = JSON.stringify(environment_config[newVar]);
    }
  }
  return enviromentVars;
}

exports.hasProcessFlag = hasProcessFlag;
exports.hasNpmFlag = hasNpmFlag;
exports.isWebpackDevServer = isWebpackDevServer;
exports.root = root;
exports.extendAppConfig = extendAppConfig;
