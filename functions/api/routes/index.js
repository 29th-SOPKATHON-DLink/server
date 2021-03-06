const express = require('express');
const router = express.Router();

router.use('/meeting', require('./meeting'));
router.use('/home', require('./home'));

module.exports = router;