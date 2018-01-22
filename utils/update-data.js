/**
 * This module exports a function that handles the process
 * of updating new data and deploy it to a static server
 * @module metis-frontoffice/utils/update-data
 */

const {remove, ensureDir, writeFile, move} = require('fs-extra');
const spawn = require('child_process').spawn;
const resolvePath = require('path').resolve;
const axios = require('axios');

const getConfig = require('./config');
const config = getConfig();
const {dataProviderBaseUri} = config;

const staticDir = resolvePath(__dirname + '/../static/');

module.exports = function updateData(data) {
  console.log('update launched');
  console.log('preparing folders');
  // create temp folder
  return ensureDir(`${staticDir}/temp`)
    // write static data
    .then(() => {
      console.log('writing data in a static file');
      return writeFile(`${staticDir}/temp/data.json`, JSON.stringify(data))
    })
    // fetch assets
    .then(() => {
      console.log('fetching assets');

      return data.assets.reduce((prev, asset, index) => {
        return prev.then(() =>
          new Promise((resolve, reject) => {
            // store each asset in separate path
            const filename = asset.filename;
            const url = `${dataProviderBaseUri}asset/${asset._id}`;
            const path = `${staticDir}/temp/${asset._id}/`;
            console.log('with asset ', asset._id);
            ensureDir(path)
            // get asset data
            .then(() => {
              console.log('fetch ', url);
              return axios({
                method:'get',
                responseType: 'arraybuffer',
                url,
              })
            })
            // write file locally
            .then(data => {
              console.log('fetch success: ', url, `${path}${filename}`);
              return writeFile(`${path}${filename}`, data.data, 'binary');
            })
            .then(resolve)
            .catch(reject);
          })
        )
      }, Promise.resolve());
    })
    // remove existing data
    .then(() => remove(`${staticDir}/data`))
    // move temp data to existing data
    .then(() => move(`${staticDir}/temp`, `${staticDir}/data`))
    // build and deploy new site
    .then(() => {
      console.log('all set, run deploy protocol');
      spawn('npm', ['run', 'deploy'])
      console.log('launched');
    })
    .catch(e => {
      console.log('error', e);
    })

}