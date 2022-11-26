const express = require('express');

// Create the express router
const router = express.Router();

// GET request for view-milk
router.get('/', require('../controllers/view-milk/GET_view-milk'));

// GET request for view-milk-date
router.get('/date', require('../controllers/view-milk/GET_view-milk-date'));

// GET request for view-milk-amount
router.get('/amount', require('../controllers/view-milk/GET_view-milk-amount'));

// export the router
module.exports = router;
