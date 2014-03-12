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
	  
	  var email = $('#loginForm #email').val();
	  var password = $('#loginForm #password').val();
	  
	  var url_call ='/login/'+email+'/'+password;
	  //console.log("email: " + email + " password " + password);

	  // check if valid user
	  function checkUser(user_json) {
	  	//console.log("email from db " + user_json['email'] + " password: " +
	  	//	user_json['password']);
	  	var emailDB = user_json['email'];
	  	var passwordDB = user_json['password'];

	  	// if db returns invalid, then no user found
	  	if(emailDB=="invalid") {
	  		alert("User not found, please sign up");
	  	}
	  	// check if users match
	  	else if((emailDB==email) && (passwordDB==password)) {
	  		//console.log("user email matches");
	  		localStorage.setItem("user", emailDB);
	  		window.location.href ="/home";
	  	}
	  	else {
	  		//console.log("invalid user password pair");
	  		alert("Incorrect username and/or password. Please try again");
	  	}
	  }

	
	  var un = document.loginForm.username.value;
      var pw = document.loginForm.pword.value;
      var valid = false;

      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if(re.test(un)){
          valid = true;
      }

      if(valid){
      //window.location.href = "/home";
	      if(password == "") {
		  	alert("Please enter password");
		  	return false;
		  }
		  else {
	        //issue the GET Request
		  	$.get(url_call, checkUser);
		  }
      return false;
      }
      else{
          alert("Invalid Email");
      }

      document.loginForm.username.value = "";
      document.loginForm.pword.value="";
 	      setTimeout("document.loginForm.username.focus()", 25);
      setTimeout("document.loginForm.username.select()", 25);
      

	});
}

