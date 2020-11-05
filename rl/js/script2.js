$(document).ready(function(){
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
				breakpoint: 1100,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 860,
				settings: {
					slidesToShow:2
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
