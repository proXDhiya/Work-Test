// Function to register milk

module.exports = (req, res) => {
    if(!require('../session/check-login')(req))
        return res.redirect('/dashboard');

    const { date, milkAmount } = req.body;

    // add milk to database
    if (!require('../../modules/module_milk').setMilk(date, milkAmount)) {
        // if milk could not be added, return error
        req.session.error = 'Milk could not be added May already exist';
        return res.redirect('/register-milk');
    }

    // Redirect to dashboard
    req.session.success = 'Milk added successfully';
    return res.redirect('/dashboard');
};
