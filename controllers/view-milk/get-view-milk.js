// Function to get milk

module.exports = (req, res) => {
    if(!require('../session/check-login')(req))
        return res.redirect('/dashboard');

    // Get milk from database
    const milk = require('../../modules/module_milk').getMilk();

    // Render view-milk.pug
    return res.render('view-milk', {
        user: req.session.user,
        milk
    });
};
