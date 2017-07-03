const {PORT} = require('./config.js');
const DB = process.env.HDB;

const server = require('./server');
server.runServer(DB, PORT);
