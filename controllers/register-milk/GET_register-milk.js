// Function to register milk

module.exports = (req, res) => {
    if(!require('../session/check-login')(req))
        return res.redirect('/dashboard');

    // if there is an error, render the page with the error
    const error = req.session.error;
    delete req.session.error;

    // get date of today YYYY-MM-DD
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const today = `${year}-${month}-${day}`;

    return res.render('register-milk', {
        user: req.session.user,
        error: error,
        date: today
    });
};
