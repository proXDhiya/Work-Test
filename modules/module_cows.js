const fs = require('fs');
const path = require('path');

exports.setNewCow = (name, birthday, color, breed, motherId) => {
    // Read File
    const cows = fs.readFileSync(path.join(__dirname, '../database/cows.json'), 'utf8');

    // Parse JSON
    const cowsJSON = JSON.parse(cows);

    // check if mother cow exists
    if (motherId !== '') {
        const motherCow = cowsJSON.find(cow => cow.id === motherId);
        // if mother cow does not exist, return error
        if (!motherCow) {
            console.log('Mother cow does not exist');
            return false;
        }
    }
    
    // Create new cow
    const newCow = {
        id: (cowsJSON.length + 1).toString(),
        "cow-name": name,
        "birth-day": birthday,
        "color": color,
        "breed": breed,
        "mother-id": motherId === '' ? null : motherId,
    };

    // Push new cow to cowsJSON
    cowsJSON.push(newCow);

    // Write to file
    try {
        fs.writeFileSync(path.join(__dirname, '../database/cows.json'), JSON.stringify(cowsJSON, null, 4));
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};


exports.getCows = () => {
    // Read File
    const cows = fs.readFileSync(path.join(__dirname, '../database/cows.json'), 'utf8');

    // Parse JSON
    const cowsJSON = JSON.parse(cows);

    return cowsJSON;
};
