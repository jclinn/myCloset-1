var models = require('../models');

exports.view = function(req, res){
  res.render('camera');
};

exports.camera = function(req, res){
	var form_data = req.body;
	console.log(form_data);

	var newImage = new models.Top(form_data);
	newImage.save(function(err) {
		if(err) console.log(err);
		res.send();
	});
};
