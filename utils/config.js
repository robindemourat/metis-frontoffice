/**
 * Metis-frontoffice
 * =======
 * Config utils
 */
const configMap = require('../config/config.map');

const constantify = str => str.replace(/([A-Z])/g, '_$1').toUpperCase();

/**
 * Resolves config retrieval method according to mode ('development' or 'production')
 * Uses json file if in dev, env variables if in prod
 * @return {object} config
 */
module.exports = function getConfig () {
  if (process.env.NODE_ENV !== 'production') {
    return require('../config/config.dev');/* eslint node/no-unpublished-require : 0 */
  } else {
    return configMap.reduce((result, key) => ({
      ...result,
      [key]: process.env[constantify(key)]
    }), {});
  }
}
