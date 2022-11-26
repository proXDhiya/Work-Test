const express = require('express');

// Create the express router
const router = express.Router();

// GET /login
router.get('/', require('../controllers/login/GET_login'));

// POST /login
router.post('/login', require('../controllers/login/POST_login'));

// Export the router
module.exports = router;
