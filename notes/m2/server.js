const express = require('express');

const apiRoutes = require('./apiRoutes.js');

const server = express();

server.use('/api', apiRoutes);

module.exports = server;