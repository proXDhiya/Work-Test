// Function to handle the POST request to register a new birth

module.exports = function (req, res) {
    // Check if user is logged in
    if (!require('../session/check-login')(req))
        return res.redirect('/dashboard');

    const { name, birthday, color, breed, motherId } = req.body;

    // add cow to database
    if (!require('../../modules/module_cows').setNewCow(name, birthday, color, breed, motherId)) {
        // if cow could not be added, return error
        req.session.error = 'Cow could not be added';
        return res.redirect('/register-cow');
    }

    // Redirect to dashboard
    req.session.success = 'New birth Cow added successfully';
    return res.redirect('/dashboard');
};
