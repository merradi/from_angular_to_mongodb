/**
 * Created by ERRADI on 21/02/2016.
 */
var mongoose    = require('mongoose');

var schema = {
    name: String,
    price: Number,
    category: String,
    image: String,
    brewery: String,
    alcohol: Number
};

var Product = mongoose.model("Product", schema);
module.exports = Product;