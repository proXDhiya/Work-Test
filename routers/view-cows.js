const express = require('express');

// Create the express router
const router = express.Router();

// GET request for view-cows
router.get('/', require('../controllers/view-cows/get-view-cows'));

// GET request for view-cows by age parameter
router.get('/age', require('../controllers/view-cows/get-view-cows-age'));

// Export the router
module.exports = router;
