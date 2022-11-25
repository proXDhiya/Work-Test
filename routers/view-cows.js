const express = require('express');

// Create the express router
const router = express.Router();

// GET request for view-cows

router.get('/', require('../controllers/view-cows/get-view-cows'));

// Export the router
module.exports = router;
