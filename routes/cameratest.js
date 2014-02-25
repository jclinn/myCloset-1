
var models = require('../models');

/*
 * GET home page.
 */

exports.view = function(req, res){

  models.Closet
    .find()
    .exec(renderTops);

  function renderTops(err, cameraviews) {
    console.log("are you rendering?");
    res.render('cameraviews', { 'cameraviews': cameraviews });
  }

};

