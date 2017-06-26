const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const ArtistSchema = require('../schemas/artist');
const Artist = mongoose.model('artists', ArtistSchema);

// get a single artist
const randomArtist = (req, res) => {
  Artist.count()
    .then( count => {
      let random = Math.floor(Math.random() * count);
      Artist.find({}, { _id: 0}).skip(random).limit(1)
        .then( artist => {
            if (artist){
              res.status(200).json({ artist: artist });
            } else {
              res.status(200).json({ message: 'user does not match' });
            }
        })
    })
}

// controllers
router.get('/random', randomArtist);

//export routes
module.exports = router;
