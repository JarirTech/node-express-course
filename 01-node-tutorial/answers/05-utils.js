//  should export a single value, which is a function you will call in 03-modules.js.

const sayHello = (name)=>{
    console.log(`Hello ${name}`)
};
//sayHello("Basma");

module.exports = sayHello;