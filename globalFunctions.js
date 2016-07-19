// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ RANDOM NUMBERS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var seed = 2;
// returns a random-ish number that can be seeded. 
// Should NOT be used in a final product
function randomNotReally() {
    var x = Math.sin(seed++);
    return x - Math.floor(x);
}

// returns a random INTEGER between max and min (inclusive) with an even distribution (tested)
// Note: this isn't really random, but it's a work-around so I can seed the random number
// uncomment the first line and delete the second to make it random every time
// See the randomNotReally function above
var randomInt = function(min, max){
  // return Math.floor(min + (max - min + 1) * Math.random());
  return Math.floor((min + 0.5) + (max - min) * randomNotReally());
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ HTML Class Functions~~~~~~~~~~~~~~~
function addClass(el, cls) {
  var classes = el.className.split(' ');
  classes.push(cls);
  el.className = classes.join(' ');
}

function removeClass(el, cls) {
  el.className = el.className.replace(cls,'');
}

function hasClass(el,cls) {
  return el.className.search(cls)!=-1
}

function toggleClass(el,cls) {
  if(hasClass(el,cls)){removeClass(el,cls)}
  else{addClass(el,cls)};
}



// ~~~~~~~~~~~~~~~~~~~~~~ Making Elements Collapsable ~~~~~~~~~~~~~~~~~~~~
/** 
  adds an event listener to make an element collapsable on click
  first parameter is the element that is the target of the click
    this element should be bigger (or outside of) the collapsing element
  second parameter is the element that will expand/collapse
  third parameter (optional) is an element that holds a + or - to show the state
**/
function collapsable(elemToClick, elemToHide, plusminus) {
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
