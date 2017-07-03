const DB = process.env.HDB;
const PORT = process.env.HPORT;

const server = require('./server');
server.runServer(DB, PORT);
