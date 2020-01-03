const path = require('path');

module.exports = function module (moduleOptions) {
  // Don't include on dev mode
  if (this.options.dev && process.env.NODE_ENV !== 'production') {
    return;
  }

  const defaults = {
    pixelId: null,
    track: 'PageView',
    version: '2.0',
  };
  const options = Object.assign({}, defaults, this.options.facebook, moduleOptions);

  // Register plugin
  this.addPlugin({
    src: path.resolve(__dirname, './plugin.js'),
    ssr: false,
    options,
  });

};
