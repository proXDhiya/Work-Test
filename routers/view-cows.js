const express = require('express');

// Create the express router
const router = express.Router();

// GET request for view-cows
router.get('/', require('../controllers/view-cows/GET_view-cows'));

// GET request for view-cows by age parameter
router.get('/age', require('../controllers/view-cows/GET_view-cows-age'));

// GET request for view-cows by breed parameter
router.get('/breed/:breed', require('../controllers/view-cows/GET_view-cows-breed'));

// GET request for view-cows by color parameter
router.get('/color/:color', require('../controllers/view-cows/GET_view-cows-color'));

// Export the router
module.exports = router;
