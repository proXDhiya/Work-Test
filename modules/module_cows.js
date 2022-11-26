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
        "name": name,
        "birthday": birthday,
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


exports.getCowsByAge = () => {
    // Read File
    const cows = fs.readFileSync(path.join(__dirname, '../database/cows.json'), 'utf8');

    // Parse JSON
    const cowsJSON = JSON.parse(cows);

    // Sort cows by age (youngest first)
    cowsJSON.sort((a, b) => {
        const aDate = new Date(a.birthday);
        const bDate = new Date(b.birthday);
        return aDate - bDate;
    });

    // reverse array to get oldest first
    cowsJSON.reverse();

    return cowsJSON;
}


exports.getCowsByBreed = (breed) => {
    // Read File
    const cows = fs.readFileSync(path.join(__dirname, '../database/cows.json'), 'utf8');

    // Parse JSON
    const cowsJSON = JSON.parse(cows);

    // Filter cows by breed
    const filteredCows = cowsJSON.filter(cow => cow.breed === breed);

    return filteredCows;
};


exports.getCowsByColor = (color) => {
    // Read File
    const cows = fs.readFileSync(path.join(__dirname, '../database/cows.json'), 'utf8');

    // Parse JSON
    const cowsJSON = JSON.parse(cows);

    // Filter cows by color
    const filteredCows = cowsJSON.filter(cow => cow.color === color);

    return filteredCows;
};


exports.getCowById = (id) => {
    // Read File
    const cows = fs.readFileSync(path.join(__dirname, '../database/cows.json'), 'utf8');

    // Parse JSON
    const cowsJSON = JSON.parse(cows);

    // Find cow by id
    const cow = cowsJSON.find(cow => cow.id === id);

    return cow ? cow : false;
}
