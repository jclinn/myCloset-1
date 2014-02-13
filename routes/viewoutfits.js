var viewo = require("../viewoutfits.json");

exports.view = function(req, res){
  res.render("viewoutfits");
};

exports.getviewoutfits = function(req, res){
	console.log("hello shame shame shame");
	res.render( 'viewoutfits', { "viewo_list" : viewo } );
};

