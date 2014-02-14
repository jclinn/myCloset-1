var tops = require("../tops.json");

exports.view = function(req, res){
  res.render('viewcloset');
};


exports.getCloset = function(req, res){
	console.log("where are you?");
	res.render( 'viewcloset', { "viewclo_list" : tops } );
};
