// Function to get milk by date

module.exports = (req, res) => {
    if(!require('../session/check-login')(req))
        return res.redirect('/dashboard');

    // Get milk from database
    const milk = require('../../modules/module_milk').getMilkByDateOrder();

    // Render view-milk.pug
    return res.render('view-milk', {
        user: req.session.user,
        milk
    });
};
