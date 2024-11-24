#!/usr/bin/env node
// Creates a more complex HTTP server using Express
const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const hostName = '127.0.0.1';
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const title = 'This is the list of our students\n';
  try {
    const data = await countStudents(process.argv[2]);
    res.send(`${title}${data.join('\n')}`);
  } catch (error) {
    res.send(`$title}${error.message} `);
  }
});

app.listen(port, hostName, () => { });

module.exports = app;
