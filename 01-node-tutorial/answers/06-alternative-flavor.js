/*should export multiple values in the module.exports object, but it should use the alternative approach, adding each value one at a time. The exported values from each should be used in 03-modules.js, 
logging results to the console so that you know it is working. */

const cities = ["Boston", "New York", "Atlanta"];

const person = {name: "AJ", age:"8"};

//console.log(cities, person);

module.exports.cities = ["Boston", "New York"];

module.exports.newPerson = person;