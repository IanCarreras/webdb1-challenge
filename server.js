const express = require('express');
const logger = require('./middleware/logger')
const notFound = require('./middleware/notFound')
const error = require('./middleware/error')

const db = require('./data/dbConfig.js');

const server = express();

server.use(logger())
server.use(express.json());

server.get('/', (req, res))

server.use(notFound())
server.use(error())

module.exports = server;