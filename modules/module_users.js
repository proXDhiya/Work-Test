// Import users.json file
// const users = require('../database/users.json');
const fs = require('fs');
const path = require('path');

// Check if user exists in users.json file and the password is correct
exports.checkUser = (username, password) => {
    // Read File
    const users = fs.readFileSync(path.join(__dirname, '../database/users.json'), 'utf8');

    // Parse JSON
    const usersJSON = JSON.parse(users);

    // Find user in users.json file
    const user = usersJSON.find(user => user.username === username);

    // Check if user exists and password is correct
    if (user && user.password === password)
        return user;
    
    return false;
};
