const mongoose = require('mongoose'); //import
const assert = require('assert');
mongoose.connect('mongodb://localhost/mydb'); //:27017

_foodtruck = 'Sukaldari';
_rating = 4.85;

//connecting to mongoDB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  //console.log('we are connected to the database');
});

//Defining structure for documents
var food = new mongoose.Schema(
  { name: String, rating: Number }
  );

var myModel = mongoose.model('foods', food); //collection
//instance of document-schema
//Defining data to add to DB
var _instance = new myModel({name: _foodtruck, rating: _rating});

//Methods to iteract with database
function Insert_data() {
  _instance.save( (err, _instance) => {
    if (err) console.error(err);
    console.log('Data successfully saved to mongoDB');
  });
}

function Retrive_data_by_ID(_id, callback) {
  myModel.findById({_id: _id}, function(err, food) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, food);
    }
  });
};

function Retrive_data(callback) {
  myModel.find({}, function(err, food) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, food);
    }
  });
};


//Example of using methods

Insert_data();

_id = '5c0c18bb27fce761bacc2757';
Retrive_data_by_ID(_id, function(err, food) {
  if (err) {
    console.log(err);
  }
  console.log('food_id: ');
  console.log(food);
});

Retrive_data(function(err, food) {
  if (err) {
    console.log(err);
  }
  console.log('\n\nfood_all: ');
  console.log(food);
});
