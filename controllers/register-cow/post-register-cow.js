// Function for post request register cow

module.exports = (req, res) => {
    if(!require('../session/check-login')(req))
        return res.redirect('/dashboard');
    
    // Get the data from the request body
    // Null for now
    return res.redirect('/dashboard');
};
