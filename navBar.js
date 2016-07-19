/*************************************************************************
									NavBar
**************************************************************************/

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

/*************************************************************************
							Collapsable
To make elements collapsable: 
	1) give the element class="collapse-collapsable"
	2) make another element (outside of this one) with class="collapse-clickable"
	3) OPTIONAL create a third element with class="collapse-pm" with a plus sign
			(or minus depending on the initial state) to show the state of the 
			collapsable object (also acts as a clickable and can replace #2)
IMPORTANT: Each collapsable element must have exactly ONE pm and clickable element to go with it
**************************************************************************/
var pm = document.getElementsByClassName("collapse-pm");
var clickable = document.getElementsByClassName("collapse-clickable");
var collapsable = document.getElementsByClassName("collapse-collapsable");
/** 
  adds an event listener to make an element collapsable on click
  first parameter is the element that is the target of the click
    this element should be bigger (or outside of) the collapsing element
  second parameter is the element that will expand/collapse
  third parameter (optional) is an element that holds a + or - to show the state
**/
function makeCollapsable(elemToClick, elemToHide, plusminus) {
  if(elemToClick) {
    elemToClick.style.cursor = "pointer";
    elemToClick.addEventListener('click', function() {
      toggleClass(elemToHide,'hide'); 
      // Change the plus/minus sign accordingly
      if(plusminus) {

        if(!hasClass(elemToHide,'hide'))
          plusminus.innerHTML='[ &minus; ]';  
        else
          plusminus.innerHTML='[ &plus; ]';
      } // end if(plusminus)
    })
  }
}

for (var i = 0; i < pm.length; i++) {
	makeCollapsable(clickable[i], collapsable[i], pm[i]);
	makeCollapsable(pm[i], collapsable[i], pm[i]);
}