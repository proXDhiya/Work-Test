// Function for get request dashboard

module.exports = (req, res) => {
    // Check if user is logged in
    if (!require('../session/check-login')(req))
        return res.redirect('/');

    // Get error and success messages from session
    const error = req.session.error;
    const success = req.session.success;

    // Delete error and success messages from session
    delete req.session.error;
    delete req.session.success;

    // Render dashboard page
    return res.render('dashboard', {
        user: req.session.user,
        error: error,
        success: success
    });
};
