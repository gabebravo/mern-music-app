// BASE SETUP : import dependencies, import mongoose, instantiate middleware
// =============================================================================
const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const app = express();

// ROUTES FOR OUR API
// =============================================================================

// // routes specific to Movies schema
  const artistRouter = require('./server/routes/artist');
  app.use('/search', artistRouter);


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
