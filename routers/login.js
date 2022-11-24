const express = require('express');

// Create the express router
const router = express.Router();

// GET /login
router.get('/', require('../controllers/get-login'));

// POST /login
router.post('/login', require('../controllers/post-login'));

// Export the router
module.exports = router;
