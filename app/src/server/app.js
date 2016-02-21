// Initialize the express framework
var express 	 	= require('express');
var path 	 	= require('path');
var mongoose    = require('mongoose');
var	bodyParser		= require('body-parser');
var	databaseName    = 'angular_mongodb';

// Express setup 
var app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client')));

// Routes set up
var router 	= express.Router();
var product = require('./routes/api/product');

// Get all products
router.get('/api/products', product.getAll);

// Create a product
router.post('/api/product', product.create);

// Get one product, update one product, delete one product
router.route('/api/product/:id')
	.get(product.read)
	.put(product.update)
	.delete(product.delete);

// Register the routing
app.use('/', router);

//mongoose.connect('mongodb://localhost' + databaseName);
mongoose.connect('mongodb://localhost/angular_mongodb', function(err) {
	if (err) throw err;
});

//var db = mongoose.connection;
//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', startServer);

// Start up the server
//function startServer(){
	var server = app.listen(3000, function(){
		var port = server.address().port;
		console.log('Listening on port ' + port);
	})
//}


