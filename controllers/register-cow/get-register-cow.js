// Function for get request register cow

module.exports = (req, res) => {
    if(!require('../session/check-login')(req))
        return res.redirect('/dashboard');
    
    // if there is an error, render the page with the error
    const error = req.session.error;
    delete req.session.error;

    return res.render('register-cow', {
        user: req.session.user,
        error: error,
    });
};
