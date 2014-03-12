'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();

});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// error checking for user input for signup
	$('#signupbt').click(function(e) {
		//console.log('clicked');

		var first = $('#signupForm #firstname').val();
		var last = $('#signupForm #lastname').val();
		var email = $('#signupForm #email').val();
		var password = $('#signupForm #password').val();
		var json = {
			'first': first,
			'last': last,
			'email':  email,
			'password': password
		};


		 var un = document.signupForm.username.value;
	     var pw = document.signupForm.pword.value;
	     var valid = false;

	     var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	     if(re.test(un)){
	         valid = true;
	     }
	              
	     if(valid){
	     	if(pw.length < 1) {
	     		alert("Please enter a password");
	     		setTimeout("document.signupForm.pword.focus()", 25);
         		setTimeout("document.signupForm.pword.select()", 25);
	     	}
	     	else {
			 $.post('/signup/new', json, function() {
			 	localStorage.setItem("user", email);
				window.location.href = '/intro'; // reload the page
			});
			}
		 	return false;
	     }
	     else{
 	         alert("Invalid e-mail.");
	     }
	     document.signupForm.username.value = "";
	     document.signupForm.pword.value="";
	     setTimeout("document.signupForm.username.focus()", 25);
         setTimeout("document.signupForm.username.select()", 25);

		
	});
}

