// BASE SETUP : import dependencies, import mongoose, instantiate middleware
// =============================================================================
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse application/json
app.use(bodyParser.json())

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// ROUTES FOR OUR API
// =============================================================================

// routes specific to artist CRUD
const artistRouter = require('./server/routes/artist');
  app.use('/artist', artistRouter);

// routes specific to artist search queries
const searchRouter = require('./server/routes/search');
    app.use('/search', searchRouter);


// START THE SERVER
// =============================================================================
const server = function IIFE(db, port){

  let server;

  return {

    runServer: function (db, port) {

      mongoose.connect(db, function(err){
        if(err){
          mongoose.disconnect();
        }

        server = app.listen(port, function() {
          console.log(`listening on port ${port}`);
        })

      });
    }

  }

}();

// EXPORT THE SERVER
// =============================================================================
module.exports = server;
