const mongoose = require('mongoose');

//Collection names always plural => end with s

const zenitSchema = new mongoose.Schema({
  name: String,
  ratings: [Number],
  ratingAvg: Number,
  restaurant: String
});

var zenitModel = mongoose.model('zenits', zenitSchema); //collection
module.exports = zenitModel;
