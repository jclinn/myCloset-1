function selectMyClosetCategory(category) {   
	console.log("clicked " + category);
	var category = category;
	//console.log(imgVal);
	localStorage.setItem("category", category);

	var user = localStorage.getItem("user");
	var category= localStorage.getItem("category");
	console.log("/pants/"+ user+ "/" + category);
	var url_call = '/pants/'+user+'/'+category;
	//$.get(url_call);
	window.location.href=url_call;
	/*function gotPants( pants_json) {
		window.location.href ="/viewpants";
	}*/
}


