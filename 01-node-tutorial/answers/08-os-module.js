/*This should load the built-in os Node module and display some interesting information 
from the resulting object. As for all modules,you load a reference to it with a
require statement, in this case */

const os = require('os');

//info about the user

const userInf = os.userInfo();
console.log(userInf);

// System uptime
const uTime = os.uptime();
console.log(`The uptime is: ${uTime}`);

// current os

const currentOs = {
    name : os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),

};
console.log(currentOs);


