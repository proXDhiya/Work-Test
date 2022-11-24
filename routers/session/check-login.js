// Function to check if the user is logged in
// If the user is logged in, the function will return true
// If the user is not logged in, the function will return false

module.exports = (req) => {
    if (req.session.user) {
        return true;
    } else {
        return false;
    }
};
