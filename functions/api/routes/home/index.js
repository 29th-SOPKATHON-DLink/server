const express = require('express');
const router = express.Router();

router.get('/rank', require('./homeRankGET'));
//router.post('/meeting', require('./homeMeetingGET'));

module.exports = router;