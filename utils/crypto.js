/**
 * Metis-frontoffice
 * =======
 * Crypto utils
 */
const bcrypt = require('bcrypt');
const saltRounds = 10;

/**
 * Encodes a string into a crypted hash
 * @param {str} pwd - the string to encoded
 * @return {Promise}
 */
const hash = (pwd) => bcrypt.hash(pwd, saltRounds);

/**
 * Checks whether string matches hash
 * @param {string} pwd
 * @param {string} hash
 * @return {Promise} - resolves with a boolean as parameter
 */
const comparePwd = (pwd, hash) => bcrypt.compare(pwd, hash);

module.exports = {
  hash,
  comparePwd
}