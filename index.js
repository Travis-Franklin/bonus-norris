console.log('hello');
const http = require('http');
const chuck = require('./module');

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.write(req.url);
    // module.getJoke();
    res.end();
});


server.listen(3000);

