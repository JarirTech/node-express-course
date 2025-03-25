/*
1. create an async function called writer that takes 0 arguments, and that writes three lines
 to a file named temp.txt, by calling the writeFile function with await. 
 The Promise version of writeFile takes the same arguments as the one you used in last week’s 
 exercise 10-fs-sync but will return a Promise instead of a result directly.
*/
const { writeFile, readFile } = require("fs").promises;

// writer function
async function writer() {
  try {
    await writeFile(
      "./content/temp.txt",
      "This is the first line\n This is the second line 2\n This is the third line\n",
      
    );
  } catch (error) {
    console.log("Error writting the file: ", error);
  }
}
//writer(); // calling writer function

// reader function
async function reader() {
    try{
        const temp = await readFile("./content/temp.txt", "utf8");
        console.log(temp); 
    } catch(error){
        console.log("Error reading the file: ", error)
    }
    
}
// reader(); // calling reader function

// readWrite function 

async function readWrite() {
    await writer();
    await reader();
    
}

readWrite();// Calling readWrite

   