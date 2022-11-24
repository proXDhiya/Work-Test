const express = require('express');

// Create the express router
const router = express.Router();

// GET /register-cow
router.get('/', require('../controllers/get-register-cow'));

// POST /register-cow
router.post('/', require('../controllers/post-register-cow'));

// Export the router
module.exports = router;
