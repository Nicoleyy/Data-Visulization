// load mongoose since we need it to define a model
var mongoose = require('mongoose');

module.exports = mongoose.model('chartdata', {
    date : String,
    title : String,
	titleValue : Number,
    directive : String,
    speed : Number,
    value : Number,
    country : String,
    visits : Number,
    y : Number,
    x : Number,
    y2 : Number,
    x2 : Number,
    value2 : Number
});