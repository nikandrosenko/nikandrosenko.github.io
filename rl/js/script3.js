$(document).ready(function(){
	$('.navbar__burger').click(function(event) { 
    // e.preventDefault();
    $('.navbar__burger,.navbar__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
