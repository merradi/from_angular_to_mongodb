var mongoose    = require('mongoose');

var Product = mongoose.model("Product", {
        name: String,
        price: Number,
        category: String,
        image: String,
        brewery: String,
        alcohol: Number
});

//mongoose.connect('mongodb://localhost' + databaseName);
mongoose.connect('mongodb://localhost/angular_mongodb', function(err) {
    if (err) throw err;
});

var db = mongoose.connection;
db.on("error", console.error);
db.once("open", deleteProducts);

function deleteProducts(){
    Product.remove({}, function(err){
        if(err) console.log(err);
        insertProducts()
    });
}

function insertProducts(){
    var products = new Product({
        name:"Old Rasputin",
        price:40,
        category:"Russian Imerial Stout",
        image:"old_rasputin.jpg",
        brewery:"North Coast Brewing",
        alcohol:9
    });
    products.save(function(err){
        if(err) console.log(err);
    });
}