// Wrap all the methods in an object
var Products = require('../../models/products');

var product = {
  read: function(req, res, next){
    res.json({type: "Read", id: req.params.id});
  },
  create: function(req, res, next){
    res.send(req.body);
  },
  update: function(req, res, next){
    res.json({type: "Update", id: req.params.id, body: req.body });
  },
  delete: function(req, res, next){
    res.json({type: "Delete", id: req.params.id});
  },
  getAll: function(req, res, next){
      Products.find(function(err, data){
        if(err) console.error;
        res.json(data);
        /**res.json({
          type: "Get all",
          data: [
            {id: 1, name: "beer1"},
            {id: 2, name: "beer2"}
          ]
        });*/
      })
  } 
}

// Return the object
module.exports = product;
