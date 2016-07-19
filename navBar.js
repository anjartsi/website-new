var nav = document.getElementById("navBar");
var pageName = document.getElementById("pageName");

nav.innerHTML += createLink("Home", "../home/index.html");
nav.innerHTML += createLink("Resume", "../home/index.html#resume");
nav.innerHTML += createLink("Projects", "../home/index.html#projects");
nav.innerHTML += createLink("Blog", "../resume/index.html");

// returns a string of the form "<li><a href='url'>name [optional]</a></li>"
function createLink(name, url, optional) {
	var link = "<li "  + "><a href='" + url + "'>";
	link += name;
	if(optional != null)
		link += optional; 
	link += "</a></li>";
	return link;
}

