

module.exports = {
  webpack: function (config, {dev}) {

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