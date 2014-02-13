var extra = require("../extra.json");

exports.view = function(req, res){
  res.render("extra");
};

exports.getExtra = function(req, res){
	console.log("hello");
	res.render( 'extra', { "extra_list" : extra } );
};

