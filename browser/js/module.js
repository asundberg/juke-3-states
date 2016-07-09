'use strict';

var juke = angular.module('juke', ['ui.router']);
// This "merges" all of the components of the 'ui.router' module into the 'juke' module. This means that our factories and controllers will be able to inject any factory that 'ui.router' defines.
// -- meaning what we define within the juke module. states = routers (??)
// -- ui.router is added as a dependency
