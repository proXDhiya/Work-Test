// Function for get request register cow

module.exports = (req, res) => {
    if(!require('./session/check-login')(req))
        return res.redirect('/dashboard');
    
    return res.render('register-cow', {
        user: req.session.user
    });
};
