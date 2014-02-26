var tops = require("../tops.json");
var pants = require("../pants.json");
var shoes = require("../shoes.json");
var extra = require("../extra.json");
var models = require('../models');
exports.view = function(req, res){
  res.render('createoutfit');
};

exports.getCloset =function(req, res) {
  res.render('createoutfit', { 
  	"makeo_list" : tops,
	"pants_list" : pants,
	"shoes_list" : shoes,
	"extra_list" : extra	
		}

  	);
};

exports.getClosetItem = function(req, res){
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
						res.render('createoutfit', {
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


