const DB = process.env.HDB;
const PORT = 3001;

const server = require('./server');
server.runServer(DB, PORT);
