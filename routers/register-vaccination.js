const express = require('express');

// Create the express router    
const router = express.Router();

// GET request for register-vaccination
router.get('/', require('../controllers/register-vaccination/GET_register-vaccination'));

// POST request for register-vaccination
router.post('/', require('../controllers/register-vaccination/POST_register-vaccination'));

// export the router
module.exports = router;
