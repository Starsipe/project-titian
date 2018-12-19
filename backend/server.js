const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const mongoose = require('mongoose');
const myFoodModel = require('./food.js');

const cors = require('cors');


mongoose.Promise = Promise; // SWitch from callback to promise
mongoose.connect('mongodb://localhost/mydb').then((err) => {
  console.log('Connected to Mongoose ...')
}); //:27017

server.use(bodyParser.json());
server.use(cors());

server.get('/p', async (req, res) => {
  const resp = await myFoodModel.find().sort({'rating':-1}).limit(10); // find fodd top 10 rating
  if (!resp) {
    console.log('Error not found');
  }else{
    res.json(resp); // returning object of foods
  }
});

server.post('/t', function(req, res, next){
  var data = req.body;
  var _instance = new myFoodModel(
    {name: data.name, rating: data.rating, restaurant: data.restaurant});
    _instance.save( (err, _instance) => {
      if (err) console.error(err);
      console.log('Data successfully saved to mongoDB');
    });
});
//send the index.html on every page refresh and let angular handle the routing
/* app.get('/*',  function(req, res, next) {
  console.log("Reloading");
  res.sendFile('index.html', { root: __dirname });
}); */

server.listen(3000, () => {
  console.log('Server running on port 3000...');
});
