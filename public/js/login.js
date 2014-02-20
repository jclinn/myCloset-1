'use strict';
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();

});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

	$('#loginbt').click(function(e) {
	  e.preventDefault();
	  console.log('clicked');
	  var email = $('#loginForm #email').val();
	  var password = $('#loginForm #password').val();
	  
	  var url_call ='/login/'+email+'/'+password;
	/*  models.User
	  	.find({}).forEach(function (err, user) {
	  	console.log("user "); 
	  }); */

	  console.log("email: " + email + " password " + password);

	  function checkUser(user_json) {
	  	console.log(user_json['email'] + " " +
	  		user_json['password']);
	  	var emailDB = user_json['email'];
	  	var passwordDB = user_json['password'];
	  	if((emailDB==email) && (passwordDB==password)) {
	  		console.log("user email matches");
	  		window.location.href ="/home";
	  	}
	  	else {
	  		console.log("invalid user password pair");
	  		alert("Incorrect username and/or password. Please try again");
	  	}
	  }

	  //issue the GET Request
	  $.get(url_call, checkUser);
	  /*var un = document.loginForm.username.value;
      var pw = document.loginForm.pword.value;
      var valid = false;

      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if(re.test(un)){
          valid = true;
      }

      if(valid){
      //window.location.href = "/home";
      return false;
      }
      else{
          alert("Incorrect username and/or password.");
      }

      document.loginForm.username.value = "";
      document.loginForm.pword.value="";
 	      setTimeout("document.loginForm.username.focus()", 25);
      setTimeout("document.loginForm.username.select()", 25);
      */

	});
}

