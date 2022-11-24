const express = require('express');

// Create the express router
const router = express.Router();

// GET /logout
router.get('/', (req, res) => {
    // Destroy the session
    req.session.destroy(() => {
        // Redirect to login
        res.redirect('/');
    });
});

// Export the router
module.exports = router;
