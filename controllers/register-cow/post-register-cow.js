// Function for post request register cow

module.exports = (req, res) => {
    if(!require('../session/check-login')(req))
        return res.redirect('/dashboard');
    
    // Get the data from the request body
    const { name, birthday, color, breed, motherId } = req.body;

    // add cow to database
    if (!require('../../modules/module_cows').setNewCow(name, birthday, color, breed, motherId)) {
        res.session.error = 'Error adding cow to database';
        return res.redirect('/register-cow');
    }

    // Redirect to dashboard
    req.session.success = 'Cow added successfully';
    return res.redirect('/dashboard');
};
