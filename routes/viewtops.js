var models = require('../models');
exports.view = function(req, res){
  res.render('viewtops');
};

exports.deleteTop = function(req, res) {
	var top = req.body;
	console.log(top);

	models.Closet
		.find(top)
		.remove()
		.exec(deleteTops);

	function deleteTops(err) {
		if(err) console.log(err);
		res.send();
	}
}