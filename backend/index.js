const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb'); //:27017

var myFirstSchema = new mongoose.Schema(
  { name: String }
  );

var myModel = mongoose.model('myModel', myFirstSchema);

var blum = new myModel({name: 'blumName'});
console.log('blum: ');
console.log(blum.name);

myFirstSchema.methods.ingred = function () {
  var greeting = this.name
  ? "Meow name is " + this.name
  : "I don't have a name";
  console.log(greeting);
}

var flip = mongoose.model('myFlipModel', myFirstSchema); //collection

var _instance = new flip({name: 'Fluffy'}); //instance of document-schema
_instance.ingred();

_instance.save( (err, _instance) => {
  if (err) console.error(err);
  _instance.ingred();
});

console.log('rword');
flip.find( (err, rword) => {
  if (err) console.error(err);
  console.log(rword);
});




const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('we are connected');
});
