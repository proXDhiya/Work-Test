// Function to get register new birth

module.exports = (req, res) => {
    if(!require('../session/check-login')(req))
        return res.redirect('/dashboard');

    // Get date of today
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const today = `${year}-${month}-${day}`;

    // Get error message from session if it exists
    const error = req.session.error;
    delete req.session.error;

    // render register new birth page
    return res.render('register-new-birth', {
        user: req.session.user,
        today,
        error
    });
};
