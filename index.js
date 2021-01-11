// Write your solution in this file!
const driver = {
    name: 'Sam'
};


//returns a driver with the original key value pairs and the new key value pair
function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = { ...driver };

    newDriver['address'] = '11 Broadway';

    return newDriver;
}

//destructively update driver with new key value pair and return udpated driver
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver.address = '12 Broadway';
    return driver
}

//clone driver and delete the key of name, return clone
function deleteFromDriverByKey(driver, key) {
    const newDriver = { ...driver };

    delete newDriver.name;

    return newDriver;
}

//delete name from driver
function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver.name;

    return driver;
}