// Function for get request login

module.exports = (req, res) => {
    if(require('../session/check-login')(req))
        return res.redirect('/dashboard');
    
    return res.render('login');
};
