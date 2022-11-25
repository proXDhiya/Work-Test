const express = require('express');

// Create the express router
const router = express.Router();

// GET /login
router.get('/', require('../controllers/login/get-login'));

// POST /login
router.post('/login', require('../controllers/login/post-login'));

// Export the router
module.exports = router;
