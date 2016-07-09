var path = require('path');
var devConfigPath = path.join(__dirname, './development.js');
var productionConfigPath = path.join(__dirname, './production.js');

// -- NODE_ENV is not set up now, but if you deployed it to heroku, you would have to set that variable on the machine that's running the web production. (Heroku sets the Node environment to production for you, and is most commonly used nowadays, to produce example or test production. IRL you might do it manually / by using different web services.)
if (process.env.NODE_ENV === 'production') {
  module.exports = require(productionConfigPath);
} else {
  // -- Until we deploy, this is the file that would be set for our configuration.
  module.exports = require(devConfigPath);
}
