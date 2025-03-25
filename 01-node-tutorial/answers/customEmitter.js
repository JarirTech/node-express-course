/*4. Write a program named customEmitter.js 
 In it, create one or several emitters. Then use the emitter .on function to handle the events 
 you will emit, logging the parameters to the screen. Then use the emitter .emit function to emit
  several events, with one or several parameters, and make sure that the events are logged by your 
  event handlers. This is your chance to be creative! You could have an event handler that emits a
   different event to be picked up by a different handler, for example. Here’s a couple tricks to try. 
   You can trigger events with a timer, as follows:*/

   //const eventEmitter = require("events");
   //const customEmitter = new eventEmitter();
   //customEmitter.on("response", ()=>{
        //console.log(`data received`)

   //})
   //eventEmitter.EventEmitter(`responce`);

const EventEmitter = require("events");  

const customEmitter = new EventEmitter();  // new instance
setInterval(() => {  
  customEmitter.emit("res", "hello World");  
}, 3000);  
customEmitter.on("res", (msg) => console.log(msg));