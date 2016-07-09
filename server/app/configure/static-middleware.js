'use strict';

// -- express.statis is SUPER IMPORTANT, because it creates a path that links to the relevant place in our folders/files, which servs up what we need to render a page.
// -- the links & scripts we include in our html are made through express.static, per the below.

var path = require('path');
var express = require('express');
var favicon = require('serve-favicon');

module.exports = function (app) {
  var root = app.getValue('projectRoot');
  var npmPath = path.join(root, './node_modules');
  var publicPath = path.join(root, './public');
  var browserPath = path.join(root, './browser');
  app.use(favicon(app.getValue('faviconPath')));
  app.use(express.static(npmPath));
  app.use(express.static(publicPath));
  app.use(express.static(browserPath));
};
