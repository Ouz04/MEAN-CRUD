const mongoose = require('mongoose');

var Schtroumpf = mongoose.model('Schtroumpf', {
    age: {type: Number},
    famille: {type: String},
    race: {type: String},
    nourriture: {type: String}
});

module.exports = { Schtroumpf };