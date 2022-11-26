const express = require('express');

// Create the express router
const router = express.Router();

// GET request for register-new-birth
router.get('/', require('../controllers/register-new-birth/GET_register-new-birth'));

// POST request for register-new-birth
router.post('/', require('../controllers/register-new-birth/POST_register-new-birth'));

// export the router
module.exports = router;
