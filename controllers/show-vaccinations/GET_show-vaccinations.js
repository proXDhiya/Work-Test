// Function to handle GET requests to /show-vaccinations

module.exports = (req, res) => {
    // check if user is logged in
    if (!require('../session/check-login')(req))
        return res.redirect('/');

    // Get all vaccinations from database
    const vaccinations = require('../../modules/module_vaccine').getVaccinations();

    // render show vaccinations page
    return res.render('show-vaccinations', {
        user: req.session.user,
        vaccinations: vaccinations,
    });
};
