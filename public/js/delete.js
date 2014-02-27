function deleteCloset() {
	var user = localStorage.getItem("user");
	var json = {
		'user': user
	};

	$.post('/settings/deleteCloset', json, function () {
		window.location.href='/profiles';
	});
};

function deleteOutfit() {
	var user = localStorage.getItem("user");

	var json = {
		'user': user
	};

	$.post('/settings/deleteOutfit', json, function () {
		window.location.href='/profiles';
	});
};

function reset() {
	var user = localStorage.getItem("user");

	var json = {
		'user': user
	};

	$.post('/settings/reset', json, function () {
		window.location.href='/profiles';
	});
};