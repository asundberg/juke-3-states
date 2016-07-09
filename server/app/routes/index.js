'use strict';

const router = require('express').Router();
module.exports = router;

// -- This is where we set more mountpoints for how to access and/or modify the info in the database in the browser.
router.use('/artists', require('./artists'));
router.use('/albums', require('./albums'));
router.use('/playlists', require('./playlists'));
router.use('/songs', require('./songs'));

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
  res.status(404).end();
});
