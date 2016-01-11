window.require = function(scriptName){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
		  eval(xhttp.responseText);
		}
	};
	xhttp.open("GET", scriptName, true);
	xhttp.send();
}


