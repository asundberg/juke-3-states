/*
    These environment variables are not hardcoded so as not to put
    production information in a repo. They should be set in your
    heroku (or whatever VPS used) configuration to be set in the
    applications environment, along with NODE_ENV=production

 */

module.exports = {
  'DATABASE_URI': process.env.POSTGRESQL_URI
};

// -- production environment is where users use my app
// -- In production, we don't want to set this DATABASE_URI var to anything specific, because we want this to be configured by the machine that eventually would be running the script --> it would be set later / some other way.
// -- Our code would break in production, if this var is not set.
