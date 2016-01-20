// expose the routes to our app with module.exports
var model = require('../public/models/model');
module.exports = function(app) {
    app.get('/getDataset', function(req, res) {
        console.log("i received a get request ");
        res.send("");
    });
};
