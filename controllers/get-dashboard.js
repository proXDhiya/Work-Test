// Function for get request dashboard

module.exports = (req, res) => {
    // Check if user is logged in
    if (!require('./session/check-login')(req))
        return res.redirect('/');

    // Render dashboard page
    return res.render('dashboard', {
        user: req.session.user
    });
};
