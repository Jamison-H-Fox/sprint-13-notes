const express = require('express');
const apiRoutes = require('./apiRoutes');

const server = express();

server.use('/api', apiRoutes);

server.use('/', (req, res) => res.send('Lord of the Rings exampleAPI up and running!'));

module.exports = server