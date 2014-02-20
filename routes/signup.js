var models = require('../models');

exports.view = function(req, res){
  res.render('signup');
};

exports.signup = function(req, res){
	var form_data = req.body;
	console.log(form_data);

	var newUser = new models.User(form_data);

	newUser.save(function(err) {
		if(err) console.log(err);
		res.send();
	});
};