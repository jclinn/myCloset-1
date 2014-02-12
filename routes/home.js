exports.view = function(req, res){
	var user = req.params.user;
  res.render('home')
};


exports.signup = function(req, res) {
	var firstname = req.query.firstname;
	var lastname = req.query.lastname;
	var email = req.query.email;
	var password = req.query.password;
	console.log("The user is: " + firstname);
	res.render('home', {
		"firstname": firstname
	});
};