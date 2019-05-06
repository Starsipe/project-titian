const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const mongoose = require('mongoose');
const myFoodModel = require('./food.js');
const karallenModel = require('./karallen.js'); // samma sak som karallenmodel = function{...}
const zenitModel = require('./zenit.js');
//const foodTruckModel = require('./foodTruck.js');

const cors = require('cors');

mongoose.Promise = Promise; // SWitch from callback to promise
mongoose.connect('mongodb://localhost/mydb').then((err) => {
  console.log('Connected to Mongoose ...')
}); //:27017

server.use(bodyParser.json());
server.use(cors());

server.get('/getTop5', async (req, res) => {
  const resp = await myFoodModel.find().sort({'ratingAvg':-1}).limit(5); // find food top 10 rating
  if (!resp) {
    console.log('Error not found');
  }else{
    res.json(resp); // returning object of foods
  }
});

server.get('/getKarallen', async (req, res) => {
  const resp = await karallenModel.find();
  if (!resp) {
    console.log('Error not found');
  }else{
    res.json(resp); // returning object of foods
  }
});

server.get('/getZenit', async (req, res) => {
  const resp = await zenitModel.find();
  if (!resp) {
    console.log('Error not found');
  }else{
    res.json(resp); // returning object of foods
  }
});

server.get('/getFoodTruck', async (req, res) => {
  const resp = await myFoodModel.find({restaurant: 'Foodtruck'});
  if (!resp) {
    console.log('Error not found');
  }else{
    res.json(resp); // returning object of foods
  }
});

server.get('/getMocado', async (req, res) => {
  const resp = await myFoodModel.find({restaurant: 'Mocado'});
  if (!resp) {
    console.log('Error not found');
  }else{
    res.json(resp); // returning object of foods
  }
});

server.get('/getKebabHuset', async (req, res) => {
  const resp = await myFoodModel.find({restaurant: 'Kebabhuset'});
  if (!resp) {
    console.log('Error not found');
  }else{
    res.json(resp); // returning object of foods
  }
});

function insertData(data){
  var _instance = new myFoodModel(
    {
      name: data.name,
      ratings: data.rating,
      ratingAvg: data.rating,
      restaurant: data.restaurant,
      available: data.available,
      price: data.price
    });
    _instance.save( (err, _instance) => {
      if (err) console.error(err);
      console.log('Data successfully saved to mongoDB');
    });
}

server.post('/create', function(req, res, next){
  console.log("create");
	var data = req.body;
    insertData(data);
});

server.post('/addRating', async function(req, res, next){
  var data = req.body;
  var x;
 // var myModel;

  if(data.ratingAvg == 0){
    if(data.restaurant == "Zenit"){
      x = await zenitModel.find({_id: data.id});
      insertData(data);
     // myModel = zenitModel;
    } else {
      x = await karallenModel.find({_id: data.id});
      insertData(data);
      //myModel = karallenmodel;
    }
  } else{
    x = await myFoodModel.find({_id: data.id});
   // myModel = myFoodModel;
  }

  var newAvg = (x[0].ratingAvg * x[0].ratings.length + data.rating)/(x[0].ratings.length + 1); // x being returnd as array with 1 index
  // push new rating to ratings list
  myFoodModel.findOneAndUpdate({_id: data.id},
    {$push: {ratings: data.rating}},
    function (error, success) {
      if (error) {
          console.log(error);
      } else {
          console.log('Push rating successful');
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

server.post('/delete', function(req, res, next){
  console.log("delete: " + req.body.id);
  var data = req.body;
    myFoodModel.deleteOne( {_id: data.id}, function(err) {
    if (!err) {
        console.log('success deleting');
    }
    else {
        console.log(err);
    }
});

});

server.listen(3001, () => {
  console.log('Server running on port 3001...');
});
