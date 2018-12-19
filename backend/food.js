const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  restaurant: String
});

var myFoodModel = mongoose.model('foods', foodSchema); //collection
module.exports = myFoodModel;
