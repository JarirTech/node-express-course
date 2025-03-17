// This should load writeFileSync and readFileSync functions from the fs module. 

// Sync method
// read from file
const {readFileSync, writeFileSync} = require('fs');
const first = readFileSync('./content/first.txt', 'utf8' );
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

// write to a file
writeFileSync('./content/result-sync.txt', `Here is the result file: ${first} ${second}`);
// we can use {flag: 'a'} to append.


