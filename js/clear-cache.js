function clearCache(name){
	localStorage.removeItem(name);
	var node;node = document.getElementById("clear");
	node.style.visibility = "hidden";
	alert("Cache has been cleared");
	window.location.reload(false);
}
