const http = require('http');
const fs =require('fs');
const minimist = require('minimst');

//const argv = minimist(process.argv.slice(2));

const port = process.env.port || 3000;

fs.readFile('./public/index.html', (err, data) => {
    if (err) {
        console.err();
    }

    const server = http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    })

    server.listen(port, () => {
        console.log('Server listening on port ${port}');
      });
   
});