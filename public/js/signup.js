'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();

});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

	/*$('.project a').click(function(e) {
		// Prevent following the link
		e.preventDefault();

		// Get the div ID, e.g., "project3"
		var projectID = $(this).closest('.project').attr('id');
		// get rid of 'project' from the front of the id 'project3'
		var idNumber = projectID.substr('project'.length);

		// this is the URL we'll call
		var url_call = '/project/'+idNumber;

		// How to respond to the GET request
		function addProjectDetails(project_json) {
			// We need to compute a display string for the date
			// Search 'toLocaleDateString' online for more details.
			var date_obj = new Date(project_json['date']);
			var options = {
				weekday: "long",
				year: "numeric",
				month: "long",
				day: "numeric"
			};
			var display_date = date_obj.toLocaleDateString('en-US', options);

			// compose the HTML
			var new_html =
				'<div class="project-date">'+display_date+'</div>'+
				'<div class="project-summary">'+project_json['summary']+'</div>'+
				'<button class="project-delete btn btn-default" '+
					'type="button">delete</button>';

			// get the DIV to add content to
			var details_div = $('#project' + idNumber + ' .details');
			// add the content to the DIV
			details_div.html(new_html);

			details_div.find('.project-delete').click(function(e) {
				$.post('/project/'+idNumber+'/delete', function() {
					window.location.href = '/';
				});
			});
		}

		// issue the GET request
		$.get(url_call, addProjectDetails);
	});*/

	$('#signupbt').click(function(e) {
		console.log('clicked');

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
			 $.post('/signup/new', json, function() {
			 	localStorage.setItem("user", email);
				window.location.href = '/home'; // reload the page
			});
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
