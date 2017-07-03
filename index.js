// const DB = 'mongodb://artistsAdmin:735ovarb@ds145952.mlab.com:45952/test_artists';
const DB = 'mongodb://localhost:27017/upstar_music';
const PORT = 3001;

const server = require('./server');
server.runServer(DB, PORT);
