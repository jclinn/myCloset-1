var data = require("../tops.json");

exports.view = function(req, res){
  res.render("tops");
};

exports.getTops = function(req, res){
	res.render( 'tops', { "tops_list" : data} );
};

