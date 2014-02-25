'use strict';
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();

});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	var user = localStorage.getItem("user");
	var category= localStorage.getItem("category");
	console.log("/pants/"+ user+ "/" + category);
	var url_call = '/pants/'+user+'/'+category;
	$.get(url_call);

	//window.location.href ="/viewpants";
}