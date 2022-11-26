const express = require('express');

// Create the express router
const router = express.Router();

// GET request for register-milk
router.get('/', require('../controllers/register-milk/GET_register-milk'));

// POST request for register-milk
router.post('/', require('../controllers/register-milk/POST_register-milk'));

// export the router
module.exports = router;
