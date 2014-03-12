var models = require('../models');

exports.view = function(req, res){
  res.render('viewcloset');
};

// generate json object with closet items by user
exports.getCloset = function(req, res){
	var email = req.params.user;
	var tops = "tops";
	console.log("email: " + email + " category: " + tops);
	var tops;
	var pants;
	var shoes;
	var extra;

	models.Closet
		.find({"user": email, 
			   "category": tops})
		.exec(findTops);

	function findTops (err, topsDB) {
		//console.log(topsDB);
		tops=topsDB;

	    models.Closet
		.find({"user": email, 
			   "category": "pants"})
		.exec(findPants);

		function findPants(err, pantsDB) {
			pants=pantsDB;
			models.Closet
				.find({"user": email, 
			   "category": "shoes"})
				.exec(findShoes);

				function findShoes (err, shoesDB) {
					shoes=shoesDB;

					models.Closet
					.find({"user": email, 
			   			"category": "extra"})
					.exec(findExtra);

					function findExtra (err, extraDB) {
						extra=extraDB;
						res.render('viewcloset', {
							"tops_list" : tops,
							"pants_list" : pants,
							"shoes_list" : shoes,
							"extra_list" : extra
						});
					}
				}

		}

	}
};


exports.deleteClosetItem = function(req, res) {
	var closetItem = req.body;
	console.log(closetItem);

	models.Closet
		.find(closetItem)
		.remove()
		.exec(deleteItem);

	function deleteItem(err) {
		if(err) console.log(err);
		res.send();
	}
}