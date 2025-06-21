const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');
const EventEmitter = require('events');

const myEmitter = new EventEmitter();
myEmitter.on('pageServed', (url) => {
  console.log(`Served: ${url}`);
});

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  const ext = path.extname(filePath);
  let contentType = 'text/html';

  if (ext === '.css') {
    contentType = 'text/css';
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 - Not Found</h1>');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
      myEmitter.emit('pageServed', req.url);
    }
  });
});

console.log("Operating System Info:");
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("Home Dir:", os.homedir());
console.log("CPU Cores:", os.cpus().length);

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});