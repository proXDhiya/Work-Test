const fs = require('fs');
const path = require('path');

exports.addVaccineToCow = (cowId, vaccine, date) => {
    // Read File
    const cows = fs.readFileSync(path.join(__dirname, '../database/cows.json'), 'utf8');

    // Parse JSON
    const cowsJSON = JSON.parse(cows);

    // Find cow
    const cow = cowsJSON.find(cow => cow.id === cowId);

    // check if cow does not exist
    if (!cow) {
        console.log('Cow does not exist');
        return false;
    }

    // check if object vaccinations exists
    if (!cow.vaccinations) {
        cow.vaccinations = [];
    }

    // Add vaccine to cow {id, name, date} in vaccinations array
    cow.vaccinations.push({
        id: cow.vaccinations.length + 1,
        name: vaccine,
        date
    });

    // Write to file
    try {
        fs.writeFileSync(path.join(__dirname, '../database/cows.json'), JSON.stringify(cowsJSON, null, 4));
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
};


exports.getVaccinations = () => {
    // Read File
    const cows = fs.readFileSync(path.join(__dirname, '../database/cows.json'), 'utf8');

    // Parse JSON
    const cowsJSON = JSON.parse(cows);

    // Create array to hold all vaccinations
    const vaccinations = [];

    // Loop through cows
    cowsJSON.forEach(cow => {
        // check if cow has vaccinations
        if (cow.vaccinations) {
            // Loop through vaccinations
            cow.vaccinations.forEach(vaccine => {
                // Add cowId and cowName to vaccine object
                vaccine.cowId = cow.id;
                vaccine.cowName = cow.name;

                // Push vaccine to vaccinations array
                vaccinations.push(vaccine);
            });
        }
    });

    return vaccinations;
};
