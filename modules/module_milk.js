const fs = require('fs');
const path = require('path');

exports.setMilk = (date, milkAmount) => {
    // Read File
    const milk = fs.readFileSync(path.join(__dirname, '../database/milk.json'), 'utf8');

    // Parse JSON
    const milkJSON = JSON.parse(milk);

    // check if milk already exists for this date
    const milkExists = milkJSON.find(milk => milk.date === date);

    // if milk already exists, return error
    if (milkExists) {
        console.log('Milk already exists for this date');
        return false;
    }

    // Create new milk
    const newMilk = {
        id: (milkJSON.length + 1).toString(),
        "date": date,
        "milkAmount": milkAmount
    };

    // Push new milk to milkJSON
    milkJSON.push(newMilk);

    // Write to file
    try {
        fs.writeFileSync(path.join(__dirname, '../database/milk.json'), JSON.stringify(milkJSON, null, 4));
        return true;
    }
    catch (err) {
        console.log(err);
        return false;
    }
};
