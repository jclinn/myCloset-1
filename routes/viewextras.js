var models = require('../models');

exports.view = function(req, res){
  res.render('viewextras');
};


exports.deleteExtra = function(req, res) {
	var extra = req.body;
	console.log(extra);

	models.Closet
		.find(extra)
		.remove()
		.exec(deleteExtras);

	function deleteExtras(err) {
		if(err) console.log(err);
		res.send();
	}
}