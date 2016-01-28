// expose the routes to our app with module.exports
var model = require('../models/model');
var data = require('../data/data');
module.exports = function(app) {
    app.get('/getData', function(req, res) {
        console.log("i received a get request ");
        model.find(function(err,docs){
            res.json(docs);
        });
    });
};
