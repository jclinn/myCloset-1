// pull from db by category
function selectMyClosetCategory(category) {   
	console.log("clicked " + category);
	var category = category;
	//console.log(imgVal);
	localStorage.setItem("category", category);

	var user = localStorage.getItem("user");
	var category= localStorage.getItem("category");
	console.log("/pants/"+ user+ "/" + category);
	var url_call;

	if(category=='pants') {
		url_call = '/pants/'+user+'/'+category;
	}
	else if(category=='tops') {
		url_call = '/tops/'+user+'/'+category;
	}
	else if(category=='shoes') {
		url_call = '/shoes/'+user+'/'+category;
	}
	else {	//extras
		url_call = '/extra/'+user+'/'+category;
	}
	window.location.href=url_call;
}

// pull from db, entire closet
function viewCloset() {
	var user = localStorage.getItem("user");
	var url_call = '/viewcloset/'+user;
	window.location.href=url_call;
}

