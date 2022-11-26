const express = require('express');

// Create the express app
const app = express();

// GET /show-vaccinations
app.get('/', require('../controllers/show-vaccinations/GET_show-vaccinations'));

// Export the router
module.exports = app;
