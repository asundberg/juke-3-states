'use strict';

var bodyParser = require('body-parser');
// -- bodyParser turns the request body from a json object into a JS object
// -- THIS is why we can use the property req.body, which in turn will have different properties.
module.exports = function (app) {

  // Parse our POST and PUT bodies.
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

};
