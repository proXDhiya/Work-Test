const express = require('express');
const checkLogin = require('./session/check-login');

// Create the express router
const router = express.Router();

// GET /login
router.get('/', (req, res) => {
    // Check if the user is logged in
    if (checkLogin(req)) {
        // If the user is logged in, redirect to the home page
        res.redirect('/');
    } else {
        // If the user is not logged in, render the login page
        res.render('login');
    }
});

// Export the router
module.exports = router;
