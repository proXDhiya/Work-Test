const express = require('express');
const session = require('express-session');

// Create the express app
const app = express();

// Urlencoded is required for POST requests
app.use(express.urlencoded({ extended: true }));

// Session is required for flash messages
app.use(session({
    secret: 'Simple Secret String',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 },
    sameSite: true,
}));

// Set the view engine to pug
app.set('view engine', 'pug');

// Set the views directory
app.set('views', './views');

// Set Public Directory
app.use(express.static('./public'));

// No cache
app.use((req, res, next) => {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();
});

// Routes
app.use('/', require('./routers/login'));

// Listen on port 3000
app.listen(3000);