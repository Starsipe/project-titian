const mongoose = require('mongoose');

//Collection names always plural => end with s

const karallenSchema = new mongoose.Schema({
  name: String,
  restaurant: String
});

var karallenModel = mongoose.model('karallens', karallenSchema); //collection
module.exports = karallenModel;
