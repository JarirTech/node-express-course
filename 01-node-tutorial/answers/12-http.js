// hhtp module
// create a simple web server that listens on port 3000.
const http = require('http');
const server = http.createServer((req, res) =>{

    if ( req.url === '/home'){
        res.end('Welcome to the home page');
    }
    else if (req.url ==='/about'){
        res.end('Welcome to the about page');
    }
    else{
        res.end('error 404 Page not found');
    }


});


server.listen(3000);
console.log('listining on port 3000')
