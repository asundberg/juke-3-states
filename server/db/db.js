'use strict';
// -- path is a node module - one thing it allows us to do is use file paths of different operating systems, e.g. windoes uses '\' while all others use '/', and understand how to apply that.
const path = require('path');
const chalk = require('chalk');
const Sequelize = require('sequelize');
// -- This is where we determine which database to connect to based on which environment we've configure - it would have to provide a different link if it was in production, vs development. At this stage, we are in development by default.
// -- 'path.join()' merges the first argument with the second.
// -- '__dirname' indicates the entire ABSOLUTE PATH to the directory containing this file (NOT including the file name).
const DATABASE_URI = require(path.join(__dirname, '../env')).DATABASE_URI;

console.log(chalk.yellow('Opening connection to PostgreSQL'));

// create the database instance
// -- We're exporting the Sequelize instance so we can use that when referring to this module.
module.exports = new Sequelize(DATABASE_URI, {
  logging: false // set to console.log to see the raw SQL queries
});
