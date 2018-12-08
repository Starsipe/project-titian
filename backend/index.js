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
function Save_data() {
  _instance.save( (err, _instance) => {
    if (err) console.error(err); //error message
   //console.log('saved data');
  });
}

function Retrive_data(uname, callback) {
  myModel.find({name: uname}, function(err, users) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, users[0]);
    }
  });
};


Save_data();

uname = 'Sukaldari'

Retrive_data(uname, function(err, user) {
  if (err) {
    console.log(err);
  }
  console.log('user: ');
  console.log(user);
});
