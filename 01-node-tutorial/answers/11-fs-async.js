// async method
//This should load the fs module, and use the asynchronous function writeFile to write 3 lines to a file

const { readFile, writeFile} = require('fs');
console.log('at start')

readFile('./content/first.txt', 'utf8', (err, result) =>{

    if (err)
        {
        console.log(err)
        return;
        }

    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) =>{

    if (err){
        console.log("This error happened: ", err);
        return;
    }
    const second = result;
    writeFile('./content/result-async.txt', `Here is the result file: ${first} ${second}`, (err, result)=>{

        if (err)
            {
            console.log("This error happened: ", err);
            return;
           }
    console.log('done with this task.');
        }
    )

    })
})

console.log('at end')
