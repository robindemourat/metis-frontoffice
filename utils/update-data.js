const {remove, ensureDir, writeFile, move} = require('fs-extra');
const resolvePath = require('path').resolve;
const axios = require('axios');

const getConfig = require('./config');
const config = getConfig();
const {dataProviderBaseUri} = config;

const staticDir = resolvePath(__dirname + '/../static/');

module.exports = function updateData(data) {
  // create temp folder
  return ensureDir(`${staticDir}/temp`)
    // write static data
    .then(() => writeFile(`${staticDir}/temp/data.json`, JSON.stringify(data)))
    // fetch assets
    .then(() => {
      const assetsIds = Object.keys(data.assets);
      const toResolve = assetsIds.map(id => {
        const asset = data.assets[id];
        const filename = asset.filename;
        const url = `${dataProviderBaseUri}/asset/${id}`;
        const path = `${staticDir}/temp/${id}/`;
        
        // console.log('url', url, 'path', path);
        // console.log('filename', filename);

        // store each asset in separate path
        return ensureDir(path)
                // get asset data
                .then(() => {
                  return axios({
                    method:'get',
                    url,
                  })
                })
                // write file locally
                .then(data => 
                  writeFile(`${path}/${filename}`, data)
                )
      })

      return Promise.all(toResolve)
    })
    // remove existing data
    .then(() => remove(`${staticDir}/data`))
    // move temp data to existing data
    .then(() => move(`${staticDir}/temp`, `${staticDir}/data`))

}