
var models = require('../models');

/*
 * GET home page.
 */

exports.view = function(req, res){

  models.User
    .find()
    .exec(renderUsers);

  function renderUsers(err, users) {
    //console.log("are you rendering?");
    res.render('users', { 'users': users });
  }

};
