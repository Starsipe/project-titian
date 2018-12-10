const http = require('http');
const func = require('./index.js'); //own methods

var data_to_insert = {name: 'pizza', rating: 11.0}; //måste ha den datastruktur
func.data.Insert_data(data_to_insert);
var x = func.data.Get_data_by_ID('5c0c18e50b0d8b61cd950c6b');
console.log('\nx: ');
console.log(x);

var y = func.data.Get_data();
console.log('\ny: ');
console.log(y);

const server = http.createServer(function(req, res){
  if (req.url == '/'){
    res.write('hello world');
    res.end();
  }

  if (req.url == '/node'){
    res.write(JSON.stringify([1,2,3]));
    res.end();
  }
  else res.write('Error 404'); res.end();
});
server.on('connection', function(socket){
  console.log('new connection');
})
server.listen(3000);
console.log('Listening on port 3000 ...');



/* import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Issue from './models/Issue';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/issues');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

router.route('/issues').get((req, res) => {
    Issue.find((err, issues) => {
        if (err)
            console.log(err);
        else
            res.json(issues);
    });
});

router.route('/issues/:id').get((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (err)
            console.log(err);
        else
            res.json(issue);
    });
});

router.route('/issues/add').post((req, res) => {
    let issue = new Issue(req.body);
    issue.save()
        .then(issue => {
            res.status(200).json({'issue': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/issues/update/:id').post((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (!issue)
            return next(new Error('Could not load document'));
        else {
            issue.title = req.body.title;
            issue.responsible = req.body.responsible;
            issue.description = req.body.description;
            issue.severity = req.body.severity;
            issue.status = req.body.status;

            issue.save().then(issue => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.route('/issues/delete/:id').get((req, res) => {
    Issue.findByIdAndRemove({_id: req.params.id}, (err, issue) => {
        if (err)
            res.json(err);
        else
            res.json('Remove successfully');
    })
})

app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));
 */
