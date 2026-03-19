const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');

// Single unified API endpoint
router.get('/portfolio', controller.getPortfolioData);

module.exports = router;