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
      Artist.find({}).skip(random).limit(1)
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

// no need to convert age or yearsActive values to Numbers
// Mongoose does that automatically
  const newArtist = new Artist({
    name: artist.name,
    age: artist.age,
    yearsActive: artist.yearsActive,
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

const deleteArtist = (req, res) => {
  Artist.remove({ _id: req.body.id })
    .then( () => {
      res.status(200).json({ message: 'You have successfully deleted the artist' });
    })
    .catch( error => {
      console.log(error);
      res.status(400).json({ message: 'Your request could not be processed' });
    })
}

const updateArtist = (req, res) => {
  Artist.update({ _id: req.body.id }, {
    name: req.body.name,
    age: req.body.age,
    yearsActive: req.body.yearsActive,
    genre: req.body.genre
  })
    .then( () => {
      res.status(200).json({ message: 'You have successfully updated the artist' });
    })
    .catch( error => {
      console.log(error);
      res.status(400).json({ message: 'Your request could not be processed' });
    })
}

// controllers
router.get('/random', randomArtist);
router.post('/create', createArtist);
router.delete('/delete', deleteArtist);
router.post('/update', updateArtist);

//export routes
module.exports = router;
