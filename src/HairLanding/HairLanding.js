function animateHamburger() {
    $('#hamburger-button').toggleClass('open');
  /*animation from burger to X*/
  }
  
  function slideMenu(){
    $('.navbar').toggleClass('open');
    /*animation for slide down menu*/
  }
  $('#hamburger-button').click(function(){
    console.log('trying');
    animateHamburger();
    slideMenu(); /*attaching click handler to the burger button*/
  });