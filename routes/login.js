var models = require('../models');

exports.view = function(req, res){
  res.render('login');
};


//login: checks if user is in db
exports.userInfo = function(req, res){
	var userEmail = req.params.user;
	var password = req.params.password;
	//console.log("user email: " + userEmail + " pass: " + password);

	models.User
		.find({"email": userEmail})
		.exec(findUser);

	function findUser(err, user_post) {
		console.log (user_post[0]);
		// if no user in db then pass in invalid for check 
		if(user_post[0]==null) {
			res.json(		{
			"email": "invalid"
			});
		}
		else {
			res.json(user_post[0]);
		}
	}

};