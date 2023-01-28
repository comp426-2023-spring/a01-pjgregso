const http = require('http');
const fs =require('fs');
const minimist = require('minimst');

const argv = mini(process.argv.slice(2));

const port = argv.port || 3000;

const hostname = '127.0.0.1';

fs.readFile('./public/index.html', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data)
    });
    server.listen(port, hostname, () => {
      console.log(`Server listening on port ${port} http://${hostname}:${port}/ `);
    });
  });