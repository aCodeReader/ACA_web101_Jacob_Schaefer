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