```javascript
const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  try {
    // Simulate an asynchronous operation that might reject
    const promise = new Promise((resolve, reject) => {
      // Simulate an error condition
      reject(new Error('Something went wrong!') );
    });
    promise.catch(error => {
        console.error('Promise rejected:', error);
        response.writeHead(500);
        response.end(JSON.stringify({ error: error.message }));
    });
  } catch (error) {
    console.error('An error occurred:', error);
    response.writeHead(500);
    response.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
};

const server = http.createServer(requestListener);
const port = 3000;

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Application specific logging, throwing an error, or other logic here
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```