var models = require('../models');
exports.view = function(req, res){
  res.render('item');
};


exports.deleteClosetItem = function(req, res) {
	var item = req.body;
	console.log(item);

	models.Closet
		.find(item)
		.remove()
		.exec(deleteItem);

	function deleteItem(err) {
		if(err) console.log(err);
		res.send();
	}
}