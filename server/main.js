'use strict';
var chalk = require('chalk');

// Requires in ./db/index.js -- which returns a promise that represents
// sequelize syncing its models to the postgreSQL database.
var startDb = require('./db');

// Create a node server instance! cOoL!

// --'http' is a built-in module in node, not in express - we are not using express yet.
// -- '.createServer()' is a function on the 'http' module
var server = require('http').createServer();

var createApplication = function () {
  // -- 'require('./app')' automatically looks for the index.js file in the app folder.
  // -- That file exports 'app' which is 'var app = express()'.
  // -- Also runs the entire index.js file in the app folder.
    var app = require('./app');
    // -- The below runs 'app' whenever there is a request.
    server.on('request', app); // Attaches the Express application.
};

var startServer = function () {
  // -- process.env is an object containing all environment variables on the machine that is running this code.
    var PORT = process.env.PORT || 1337;
    // -- The below runs the 'listen' function, which starts listening to the PORT we set, and then runs the callback which prints into the terminal.
    server.listen(PORT, function () {
        console.log(chalk.blue('Server started on port', chalk.magenta(PORT)));
    });
};

startDb
.then(createApplication)
.then(startServer)
.catch(function (err) {
    console.error(chalk.red(err.stack));
    process.kill(1);
});
// -- 1) 'startDb' is a promise object from the db index.js which syncs the dababase.
// -- 2) Then we create the app. Here we can look in app/index.js to see how that works.
// -- 3) Then we start the server.
// -- 4) Catch errors.
