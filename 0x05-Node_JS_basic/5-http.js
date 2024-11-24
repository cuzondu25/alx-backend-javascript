#!/usr/bin/env node
// Creates a more complex HTTP server using Node's HTTP module
const http = require('http');
const countStudents = require('./3-read_file_async');

const hostName = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
    return;
  }

  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const data = await countStudents(process.argv[2]);
      res.end(`${data.join('\n')}`);
    } catch (error) {
      res.end(error.message);
    }
    return;
  }
  res.end();
});
app.listen(port, hostName, () => { });

module.exports = app;
