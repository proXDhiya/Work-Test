const { checkUser } = require('../modules/module_users.js');

// Function for post request login

module.exports = (req, res) => {
    // Get user input
    const { username, password } = req.body;

    // check if username and password are empty
    if (!username || !password)
        return res.render('login', { error: 'Username or password is empty' });

    // Check if username and password are correct
    const user = checkUser(username, password);

    // Check if user exists
    if (!user)
        return res.render('login', { error: 'Username or password is incorrect' });

    // Set session
    req.session.user = user;

    // Redirect to home page
    return res.redirect('/dashboard');
};
