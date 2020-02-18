var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
	  showDivs(slideIndex += n);
}

function showDivs(n) {
	 var i;
	 var x = document.getElementsByClassName("slide");
	  if (n > x.length) {slideIndex = 1}
	  if (n < 1) {slideIndex = x.length} ;
	  for (i = 0; i < x.length; i++) {
	    x[i].style.display = "none";
	  }
	  x[slideIndex-1].style.display = "block";
}
function contacto() {
  var x = document.getElementById("contact");
  var y = document.getElementById("slideshow");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}