function createOutfit() {
	var user = localStorage.getItem("user");
	var top = localStorage.getItem("topimage");
	var pant = localStorage.getItem("pantimage");
	var shoe = localStorage.getItem("shoeimage");
	var extra = localStorage.getItem("extraimage");

	console.log("user: " + user + " top " + top + 
		" pant " + pant + " shoe " + shoe + " extra " + extra);

	var album = localStorage.getItem("album");

	var json = {
		"topurl": top,
		"panturl": pant,
		"shoeurl": shoe,
		"extraurl": extra,
		"user": user,
		"albumurl": album
	};

	//console.log(json);

	$.post('/createoutfit/new', json, function() {
		window.location.href = '/outfitcreated';
	});


}
