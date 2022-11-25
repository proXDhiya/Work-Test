const express = require('express');

// Create a new router
const router = express.Router();

// GET /dashboard
router.get('/', require('../controllers/dashboard/get-dashboard'));

// Export the router
module.exports = router;
