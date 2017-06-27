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

const createArtist = (req, res) => {
  const { artist } = req.body;

  const newArtist = new Artist({
    name: artist.name,
    age: artist.age,
    yearsActive: Number( artist.yearsActive ),
    genre: artist.genre,
  });

  newArtist.save()
    .then( () => {
      res.status(200).json({ message: 'The artist that you added was successfully saved' });
    })
    .catch( error => {
      console.log(error);
      res.status(400).json({ message: 'Your request could not be processed' });
    })
}

// controllers
router.get('/random', randomArtist);
router.post('/create', createArtist);

//export routes
module.exports = router;
