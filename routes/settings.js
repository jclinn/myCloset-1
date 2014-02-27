var models = require('../models');

exports.view = function(req, res){
  res.render('settings');
};

exports.deleteCloset = function(req, res){
	var user = req.body;
	console.log(user);

	models.Closet
		.find(user)
		.remove()
		.exec(deleteClosets);

	function deleteClosets(err) {
		if(err) console.log(err);
		res.send();
	}
};

exports.deleteOutfit = function(req, res){
	var user = req.body;
	console.log(user);

	models.Outfit
		.find(user)
		.remove()
		.exec(deleteOutfits);

	function deleteOutfits(err) {
		if(err) console.log(err);
		res.send();
	}
};

exports.reset = function(req, res) {
	var user = req.body;
	console.log(user);

	models.Closet
		.find(user)
		.remove()
		.exec(deleteClosets);

	function deleteClosets(err) {
		models.Outfit
		.find(user)
		.remove()
		.exec(deleteOutfits);
		function deleteOutfits(err) {
			if(err) console.log(err);
			res.send();
		}
	}
};


