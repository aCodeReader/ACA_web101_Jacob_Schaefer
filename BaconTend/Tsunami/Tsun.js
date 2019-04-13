var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndex-1].style.display = "block"; 
}


var popup = document.getElementById('popup');
var popup_window = document.getElementById('popup_window');
popup_window.style.display = 'none';

popup.onclick = function() { 
  if(popup_window.style.display === 'none') {
    popup_window.style.display = 'block';
    var window_height = popup_window.offsetHeight + 35;
    popup_window.style.top = '-' + window_height + 'px';
  } else {
    popup_window.style.display = 'none';
  }
}

function myFunction(x) {
    x.classList.toggle("change");
  }
