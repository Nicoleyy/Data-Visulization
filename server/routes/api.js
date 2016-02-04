// expose the routes to our app with module.exports
var model = require('../models/model');
module.exports = function(app) {
    app.get('/getData', function(req, res) {
        console.log("i received a get request ");
        model.find({},{'_id':0},function(err,docs){
            res.json(docs);
        });
    });
};
