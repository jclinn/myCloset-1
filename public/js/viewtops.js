function deleteTops() {
	var user = localStorage.getItem("user");
	var url = localStorage.getItem("viewtops");

	console.log("user: " + user + " url " + url);
	var json = {
		'user': user,
		'url': url,
		'category': "tops"
	};

	$.post('/viewtops/delete', json, function () {
		window.location.href='/mycloset';
	});
};

function deletePants() {
	var user = localStorage.getItem("user");
	var url = localStorage.getItem("viewpants");

	console.log("user: " + user + " url " + url);
	var json = {
		'user': user,
		'url': url,
		'category': "pants"
	};

	$.post('/viewpants/delete', json, function () {
		window.location.href='/mycloset';
	});
};

function deleteShoes() {
	var user = localStorage.getItem("user");
	var url = localStorage.getItem("viewshoes");

	console.log("user: " + user + " url " + url);
	var json = {
		'user': user,
		'url': url,
		'category': "shoes"
	};

	$.post('/viewshoes/delete', json, function () {
		window.location.href='/mycloset';
	});
};

function deleteExtras() {
	var user = localStorage.getItem("user");
	var url = localStorage.getItem("viewextras");

	console.log("user: " + user + " url " + url);
	var json = {
		'user': user,
		'url': url,
		'category': "extra"
	};

	$.post('/viewextras/delete', json, function () {
		window.location.href='/mycloset';
	});
};

function deleteClosetItem() {
	var user = localStorage.getItem("user");
	var url = localStorage.getItem("closetItem");
	var category = localStorage.getItem("category");
	console.log("user: " + user + " url " + url);
	var json = {
		'user': user,
		'url': url,
		'category': category
	};

	$.post('/viewcloset/delete', json, function () {
		window.location.href='/mycloset';
	});
};

function deleteOutfits() {
	var user = localStorage.getItem("user");
	var topurl = localStorage.getItem("image1");
	var panturl = localStorage.getItem("image3");
	var shoeurl = localStorage.getItem("image4");
	var extraurl = localStorage.getItem("image2");

	var json = {
		'user':user,
		'topurl': topurl,
		'panturl': panturl,
		'shoeurl': shoeurl,
		'extraurl': extraurl
	};
	console.log(json);

	$.post('/viewoutfits/delete', json, function () {
		window.location.href='/viewoutfits/'+user;
	});
};