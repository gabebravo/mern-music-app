const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const ArtistSchema = require('../schemas/artist');
const Artist = mongoose.model('artists', ArtistSchema);

// get a single artist
const getOneArtist = (req, res) => {
  Artist.find({ _id: req.query._id })
    .then( artist => {
      res.status(200).json({ artist: artist });
    })
}

// controllers
router.get('/', getOneArtist);

//export routes
module.exports = router;
