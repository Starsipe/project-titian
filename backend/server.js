const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const mongoose = require('mongoose');
const myFoodModel = require('./food.js');
const karallenModel = require('./karallen.js'); // samma sak som karallenmodel = function{...}

const cors = require('cors');

mongoose.Promise = Promise; // SWitch from callback to promise
mongoose.connect('mongodb://localhost/mydb').then((err) => {
  console.log('Connected to Mongoose ...')
}); //:27017

server.use(bodyParser.json());
server.use(cors());

server.get('/getTop10', async (req, res) => {
  const resp = await myFoodModel.find().sort({'ratingAvg':-1}).limit(10); // find food top 10 rating
  if (!resp) {
    console.log('Error not found');
  }else{
    res.json(resp); // returning object of foods
  }
});

server.get('/getKarallen', async (req, res) => {
  //const resp = await karallenModel.find({});
  const resp = await karallenModel.find();
  if (!resp) {
    console.log('Error not found');
  }else{
    res.json(resp); // returning object of foods
  }
});

server.post('/create', function(req, res, next){
  var data = req.body;
  var _instance = new myFoodModel(
    {name: data.name, ratings: data.rating, ratingAvg: data.rating, restaurant: data.restaurant});
    _instance.save( (err, _instance) => {
      if (err) console.error(err);
      console.log('Data successfully saved to mongoDB');
    });
});

server.post('/addRating', async function(req, res, next){
  var data = req.body;
  var x = await myFoodModel.find({_id: data.id});
  var newAvg = (x[0].ratingAvg * x[0].ratings.length + data.rating)/(x[0].ratings.length + 1); // x being returnd as array with 1 index
  // push new rating to ratings list
  myFoodModel.findOneAndUpdate({_id: data.id},
    {$push: {ratings: data.rating}},
    function (error, success) {
      if (error) {
          console.log(error);
      } else {
          console.log('Push success');
      }
  });

  // update new rating average
  myFoodModel.updateOne({_id: data.id},
    {ratingAvg: newAvg},
    function (error, success) {
      if (error) {
          console.log(error);
      } else {
          console.log('Update avg success');
      }
  });

});

server.listen(3000, () => {
  console.log('Server running on port 3000...');
});
