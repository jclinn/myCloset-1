'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	

});

/*
 * Function that is called when the document is ready.
 */
function selectCameraCategory(category) {   
	//console.log("clicked " + category);
	var category = category;
	//console.log(imgVal);
	localStorage.setItem("category", category);
}