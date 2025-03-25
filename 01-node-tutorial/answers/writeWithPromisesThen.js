//2:then style of asynchronous programming. 
//You don’t need to create any functions. Instead, you just use cascading
const {readFile, writeFile} = require("fs").promises;


writeFile("./content/temp1.txt", "This is the first line.\n ") // line 1  
 .then(() => {  
    return writeFile("./content/temp1.txt", "This is the second line.\n", {flag:"a"});  // line 2.  
    // Return the promise so I we can use then again 
 })  
 .then(()=>{
    return writeFile("./content/temp1.txt", "This is the third line.", {flag:"a"}); // third line
    

 })
    

 .then(()=>{
    return readFile("./content/temp1.txt", "utf8");
 } )
 .then((response)=>{

     console.log(response);


 })
 .catch((error) => {  
    console.log("An error occurred: ", error)  
})








