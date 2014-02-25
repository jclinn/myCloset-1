var pants = require("../pants.json");
var models = require('../models');

exports.view = function(req, res){
  res.render("pants");
};

exports.getPants = function(req, res){
	var email = req.params.user;
	var category = req.params.category;
	console.log ("email: " + email + " category: " + category);
	
	models.Closet
		.find(
			{"user": email,
			"category": category})
		.exec(findPants);

	function findPants(err, pantsDB) {
		console.log(pantsDB);
		res.render('pants', {'pants_list': pantsDB});
	}
		 // res.render("pants");
	//console.log("hello");
	//res.render( 'pants', { "pants_list" : pants } );
};

