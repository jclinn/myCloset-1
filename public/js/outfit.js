// pull from db, entire closet
function viewOutfit() {
	var user = localStorage.getItem("user");
	var url_call = '/viewoutfits/'+user;
	window.location.href=url_call;
}

function createOutfit() {
	var user = localStorage.getItem("user");
	var url_call = '/createoutfit/'+user;
	window.location.href=url_call;	
}