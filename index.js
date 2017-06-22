const DB = 'mongodb://localhost:27017/upstar_music';
const PORT = 3001;

const server = require('./server');
server.runServer(DB, PORT);
