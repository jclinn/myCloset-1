exports.view = function(req, res){
  res.render("outfitcreated");
};

exports.showOutfit = function(req, res) {
   var name = req.params.name;
   //console.log("The image is: " + name);
  res.render('outfitcreated');
};