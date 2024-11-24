#!/usr/bin/env node
// Creates a small HTTP server using Express
const express = require('express');

const app = express();
const hostName = '127.0.0.1';
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, hostName, () => { });

module.exports = app;
