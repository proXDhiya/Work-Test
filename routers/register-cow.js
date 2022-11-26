const express = require('express');

// Create the express router
const router = express.Router();

// GET /register-cow
router.get('/', require('../controllers/register-cow/GET_register-cow'));

// POST /register-cow
router.post('/', require('../controllers/register-cow/POST_register-cow'));

// Export the router
module.exports = router;
