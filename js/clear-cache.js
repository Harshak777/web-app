function clearCache(name){
	localStorage.removeItem(name);
	var node;node = document.getElementById("clear");
	node.style.visibility = "hidden";
	alert("Cache cleared and Data is being fetched");
	window.location.reload(false);
}