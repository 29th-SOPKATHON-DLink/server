const express = require('express');
const router = express.Router();

//router.get('/rank', require('./homeRankGET'));
router.get('/meeting', require('./homeMeetingGET'));

module.exports = router;