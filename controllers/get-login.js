// Function for get request login

module.exports = (req, res) => {
    if(!require('./session/check-login'))
        return res.redirect('/dashboard');
    
    res.render('login');
};
