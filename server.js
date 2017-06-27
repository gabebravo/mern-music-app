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

// // routes specific to Movies schema
  const artistRouter = require('./server/routes/artist');
  app.use('/artist', artistRouter);


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
