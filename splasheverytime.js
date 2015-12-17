if (document.cookie && document.cookie != '') {
	var split = document.cookie.split(';');
	for (var i = 0; i < split.length; i++) {
		var name_value = split[i].split("=");
		var prop = decodeURIComponent(name_value[0].replace(/^ /, ''));
		var value = decodeURIComponent(name_value[1]);
		if (prop.indexOf('splash_')!=0) continue;
		document.cookie = prop + "=" + value + "; path=/";
	}
}
