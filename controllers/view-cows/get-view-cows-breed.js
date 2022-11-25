// Function for get request view cows

module.exports = (req, res) => {
    // check if user is logged in
    if (!require('../session/check-login')(req))
        return res.redirect('/');

    // Get all cows from database
    const cows = require('../../modules/module_cows').getCowsByBreed((req.params.breed).split('=')[1]);
    
    // Render view cows page
    return res.render('view-cows', {
        user: req.session.user,
        cows: cows,
    });
};
