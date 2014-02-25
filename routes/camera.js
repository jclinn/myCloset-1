var models = require('../models');

exports.view = function(req, res){
  res.render('camera');
};

exports.camera = function(req, res){
	var form_data = req.body;
	console.log(form_data);
	var category = form_data.category;
	//console.log("category: " + category);
	var newImage;
	newImage = new models.Closet(form_data);
	/*if(category=="tops") {
		newImage = new models.Top(form_data);
	}
	else if (category == "pants") {
		newImage = new models.Pant(form_data);
	}
	else if (category == "shoes") {
		newImage = new models.Shoe(form_data);
	}
	else {
		newImage = new models.Extra(form_data);
	}*/
	//var newImage = new models.collection(form_data);
	newImage.save(function(err) {
		if(err) console.log(err);
		res.send();
	});
};
