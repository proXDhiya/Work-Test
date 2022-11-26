// Function to handle POST requests to /register-vaccination

module.exports = (req, res) => {
    // Check if user is logged in
    if(!require('../session/check-login')(req))
        return res.redirect('/dashboard');

    const { cowId, vaccine, date } = req.body;

    // Check if cow exists
    const cows = require('../../modules/module_cows').getCowById(cowId);

    if (!cows) {
        console.log('Cow does not exist');
        req.session.error = 'Cow does not exist';
        return res.redirect('/register-vaccination');
    }

    // Add vaccine to cow
    if (!require('../../modules/module_vaccine').addVaccineToCow(cowId, vaccine, date)) {
        console.log('Error adding vaccine to cow');
        req.session.error = 'Error adding vaccine to cow';
        return res.redirect('/register-vaccination');
    }

    // Redirect to dashboard
    req.session.success = 'Vaccine added to cow';
    return res.redirect('/dashboard');
};
