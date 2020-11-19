$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
		slidesToShow:1,
		autoplay:true,
		speed:1000,
        autoplaySpeed:5000,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
	});
	$('.slider2').slick({
		arrows:true,
		dots:false,
		infinite:true,
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
				breakpoint: 1200,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 1023,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 600,
				settings: {
					// arrows:false,
					slidesToShow:1
				}
			}
		]
	});
	$('.slider-mobile').slick({
		arrows:false,
		dots:false,
		infinite:true,
		slidesToShow:1,
		// centerMode: true,
		swipeToSlide:true,
		autoplay:true,
		speed:1000,
        autoplaySpeed:5000,
        pauseOnFocus:true,
        pauseOnHover:true,
		pauseOnDotsHover:true,
		variableWidth: true,
	});
});
