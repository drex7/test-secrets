const http = require('http');

const hostname = '127.0.0.1'; 
const port = process.env.PORT || 3000; 

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  res.setHeader('Content-Type', 'text/plain');
  const responseObject = {
    message: "Hello, World!",
    timestamp: new Date().toISOString(),
    api_version: "1.0"
  };
  res.end(JSON.stringify(responseObject));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log('To stop the server, press Ctrl+C in your terminal.');
});


