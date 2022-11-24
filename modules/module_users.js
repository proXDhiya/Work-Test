// Import users.json file
const users = require('../database/users.json');

// Check if user exists in users.json file and the password is correct
exports.checkUser = (username, password) => {
    // Find user in users.json file
    const user = users.find(user => user.username === username);

    // Check if user exists and password is correct
    if (user && user.password === password)
        return user;
    
    return false;
};
