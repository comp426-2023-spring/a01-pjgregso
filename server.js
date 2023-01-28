const http = require('http');
const fs =require('fs');
const minimist = require('minimst');

const argv = mini(process.argv.slice(2));

const port = argv.port || 3000;

const hostname = '127.0.0.1';

fs.readFile('./public/index.html', utf-8, (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const server = http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    })

    server.listen(port, hostname, () => {
        console.log('Server listening on port ${port} at https://${hostname}:${port}/');
      });
   
});