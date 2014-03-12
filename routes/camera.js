// camera view
var models = require('../models');

exports.view = function(req, res){
  res.render('camera');
};

//add new image to db
exports.camera = function(req, res){
	var form_data = req.body;
	console.log(form_data);
	var category = form_data.category;
	//console.log("category: " + category);
	var newImage;
	newImage = new models.Closet(form_data);

	// save into db
	newImage.save(function(err) {
		if(err) console.log(err);
		res.send();
	});
};
