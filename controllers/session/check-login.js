module.exports = (req) => {
    // If the user is logged in, return true
    if (req.session.user) {
        return true;
    }
    // If the user is not logged in, return false
    return false;
};
