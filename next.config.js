const fs = require('fs');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  exportPathMap: function () {
    const dataPath = path.resolve(__dirname + '/static/data/data.json');
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    return Object.assign(
    {
      "/": { page: "/" },
    },
    data.montage
      .data
      .compositions
      .reduce((total, citation, index) => {
        total['composition/' + index] = {
          page: '/composition', 
          query: {
            id: index
          }
        };
        return total;
      }, {})
    );
  },
  webpack: function (config, {dev}) {


    // use uglifyjs
    for (let index = 0; index < config.plugins.length; index += 1) {
      if (config.plugins[index].constructor.name === "UglifyJsPlugin") {
        // Delete the UglifyJS plugin
        // And add uglify-es plugin (https://github.com/webpack-contrib/uglifyjs-webpack-plugin)
        config.plugins.splice(index, 1, new UglifyJSPlugin({
          sourceMap: false,
          parallel: true,
        }));
        break;
      }
    }

    // Perform customizations to webpack config
    config.module.rules.push(

      {
        test: /\.(css|scss|csl|xml)$/,
        use: ['raw-loader']
      }
    )    

    config.node = {
      'fs': 'empty',
      'child_process': 'empty'
    };

    return config
  }
}