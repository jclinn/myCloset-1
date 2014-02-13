var pants = require("../pants.json");

exports.view = function(req, res){
  res.render("pants");
};

exports.getPants = function(req, res){
	console.log("hello");
	res.render( 'pants', { "pants_list" : pants } );
};

