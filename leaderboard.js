var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var LeaderboardSchema = mongoose.Schema({
    name: String,
    score:{type: Number, min:10, max:20}
});



var Leaderboard = mongoose.model('Leaderboard',LeaderboardSchema);
module.exports = Leaderboard;
