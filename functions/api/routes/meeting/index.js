const express = require('express');
const router = express.Router();


router.get('/user', require('./meetingUserGET'));
router.post('/open', require('./meetingOpenPOST'));
router.get('/:id', require('./meetingChoiceGET'));
router.post('/:id', require('./meetingClosePOST'));

module.exports = router;