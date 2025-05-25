const express = require('express');
const { updateTrophy } = require('../controllers/trophiesController');
const router = express.Router();

router.post('/updateTrophy', updateTrophy);

module.exports = router;
