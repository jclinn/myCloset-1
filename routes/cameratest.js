
var models = require('../models');

/*
 * GET home page.
 */

exports.view = function(req, res){

  models.Top
    .find()
    .exec(renderTops);

  function renderTops(err, cameraviews) {
    console.log("are you rendering?");
    res.render('cameraviews', { 'cameraviews': cameraviews });
  }

};

