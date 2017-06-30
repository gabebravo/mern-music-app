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

const buildQuery = (qObj) => {
  const query = {};
  if(qObj.name){
    query.name = qObj.name.toString()
  }
  if(qObj.ageLow & qObj.ageHigh){
    query.age = {
      $gte: qObj.ageLow,
      $lte: qObj.ageHigh
    }
  }
  if(qObj.yearsLow & qObj.yearsHigh){
    query.yearsActive = {
      $gte: qObj.yearsLow,
      $lte: qObj.yearsHigh
    }
  }
  return query;
}

const getArtistQuery = (req, res) => {
  let count = 0;
  const search = JSON.parse(req.query.criteria);
  const skipVal = Number(req.query.skipVal);

  if( search.sortVal ) {
    Artist.find(buildQuery(search)).sort({[`${search.sortVal}`]: 1 }).count()
    .then( qCount => count = qCount)
    Artist.find(buildQuery(search)).sort({[`${search.sortVal}`]: 1 }).skip(skipVal).limit(10)
    .then( artists => {
      res.status(200).json({ artists: artists, count: count });
    })
    .catch( error => {
      console.log(error);
      res.status(400).json({ message: 'Could not find any results for your query'});
    })
  } else {
    Artist.find(buildQuery(search)).sort({[`${search.sortVal}`]: 1 }).count()
    .then( qCount => count = qCount)
    Artist.find(buildQuery(search)).skip(skipVal).limit(10)
    .then( artists => {
      res.status(200).json({ artists: artists, count: count });
    })
    .catch( error => {
      console.log(error);
      res.status(400).json({ message: 'Could not find any results for your query'});
    })
  }
}

// controllers
router.get('/ageRange', getAgeRange);
router.get('/yearsRange', getYearsRange);
router.get('/queryArtists', getArtistQuery);

//export routes
module.exports = router;
