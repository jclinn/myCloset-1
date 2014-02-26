var models = require('../models');
exports.view = function(req, res){
  res.render('viewpants');
};


exports.deletePant = function(req, res) {
	var pant = req.body;
	console.log(pant);

	models.Closet
		.find(pant)
		.remove()
		.exec(deletePants);

	function deletePants(err) {
		if(err) console.log(err);
		res.send();
	}
}