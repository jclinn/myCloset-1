var categories = require("../categories.json");

exports.view = function(req, res){
  res.render('outfits');
};

exports.getCategories = function(req, res){
	console.log("?????????");
	res.render( 'outfits', { "makec_list" : categories } );
};