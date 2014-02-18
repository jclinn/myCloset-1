var tops = require("../tops.json");
var pants = require("../pants.json");
var shoes = require("../shoes.json");
var extra = require("../extra.json");

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

