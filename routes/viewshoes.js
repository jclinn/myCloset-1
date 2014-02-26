var models = require('../models');

exports.view = function(req, res){
  res.render('viewshoes');
};

exports.deleteShoe = function(req, res) {
	var shoe = req.body;
	console.log(shoe);

	models.Closet
		.find(shoe)
		.remove()
		.exec(deleteShoes);

	function deleteShoes(err) {
		if(err) console.log(err);
		res.send();
	}
}