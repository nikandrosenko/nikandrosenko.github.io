$(document).ready(function(){
	$('.slider2').slick({
		arrows:true,
		dots:false,
		slidesToShow:4,
		swipeToSlide:true,
		autoplay:false,
		speed:1000,
        autoplaySpeed:10000,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});
