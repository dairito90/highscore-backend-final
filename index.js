var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var leaderboard = require('./leaderboard.js');
mongoose.connect('mongodb://localhost/leaderboard');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));





app.get('/', function(req, res) {
    res.send('Hello World!')
});




app.get('/leaderboard', function(req, res) {
    leaderboard.find().sort({score: -1}).exec(function(err, leaderboard) {
        if (err) {
            res.send('err')
        } else {
            console.log(leaderboard);
            res.json(leaderboard);
        }
    });
});


app.post('/leaderboard', function(req, res) {
    var leaderboard = new leaderboard (req.body);
    leaderboard.save()
        .then(function(saveResults) {
            res.json(saveResults);
        })
        .catch(function(err) {
            res.sendStatus(500);
        });

});









app.listen(7800);
