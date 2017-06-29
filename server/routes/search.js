const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const ArtistSchema = require('../schemas/artist')
const Artist = mongoose.model('artists', ArtistSchema)

const getAgeRange = (req, res) => {
  let limits = [];
  Artist.find({ age: { $gte: 1 }}).sort({ age: 1})
    .then( ages => {
      let limits = [ages[0].age, ages[ages.length-1].age];
      res.status(200).json({ limits: limits});
    })
    .catch( error => {
      console.log(error);
      res.status(400).json({ message: 'Could not retrieve age range'});
    })
}

const getYearsRange = (req, res) => {
  Artist.find({ yearsActive: { $gte: 1 }}).sort({ yearsActive: 1})
    .then( years => {
      let limits = [years[0].yearsActive, years[years.length-1].yearsActive];
      res.status(200).json({ limits: limits});
    })
    .catch( error => {
      console.log(error);
      res.status(400).json({ message: 'Could not retrieve age range'});
    })
}

const getArtistQuery = (req, res) => {
  const search = JSON.parse(req.query.criteria);
  Artist.find({ name: search.name })
  .then( artists => {
    res.status(200).json({ artists: artists });
  })
  .catch( error => {
    console.log(error);
    res.status(400).json({ message: 'Could not find any results for your query'});
  })
}

const queryBySort = (req, res) => {
  const search = JSON.parse(req.query.criteria);
  Artist.find({}).sort({[`${search.sortVal}`]: 1 }).skip(0).limit(20)
  .then( artists => {
    res.status(200).json({ artists: artists });
  })
  .catch( error => {
    console.log(error);
    res.status(400).json({ message: 'Could not find any results for your query'});
  })
}

// controllers
router.get('/ageRange', getAgeRange);
router.get('/yearsRange', getYearsRange);
router.get('/queryArtists', getArtistQuery);

// test route
router.get('/sortQuery', queryBySort);

//export routes
module.exports = router;
