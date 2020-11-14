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
