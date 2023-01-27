const express = require('express');

const raceRoutes = require('./races/raceRoutes');
const villainRoutes = require('./villains/villainRoutes');

const router = express.Router();

router.use('/races', raceRoutes);
router.use('/villains', villainRoutes);

module.exports = router;