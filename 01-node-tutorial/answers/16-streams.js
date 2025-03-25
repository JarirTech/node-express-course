//create a read stream for the big file (../content/big.txt) with encoding of "utf8"
//  and a highWaterMark of 200.
//The program should initialize a counter to 0. Then it should handle the “data” event 
// for the stream by incrementing the counter and logging the event result to the screen.
//  Then it should handle the “end” event by reporting the number of chunks received. 
// 
// Finally, it should handle the stream “error” event by logging the error to the console.
//  Test the program for several values of highWaterMark

const {createReadStream} = require("fs");
const stream = createReadStream("../content/big.txt", {highWaterMark : 200}, "utf8");

let counter =0;
stream.on(('data'), (chunk)=>{  //  event and callback fct
    counter++;
    console.log(chunk);
})
stream.on('end', () => {
    console.log(`The number of chunks is:  ${counter}.`);
  });
  
  stream.on('error', (error) => {
    console.error('An error has occurred:', error);
  });