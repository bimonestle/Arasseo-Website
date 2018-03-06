$(document).ready(function() {
    // Entering Reserve Page
    $("#wrapper nav div#btn-cta a").click(function(event) {
        // $('#wrapper nav').css({display:'none'});
        // $('html, body').stop().animate({
        //     // left: '200px',
        //     scrollLeft: $('#wrapper').offset().left
        // }, 1500, 'easeInOutQuart');
        $('body #wrapper .page-crop.page-slider').addClass('easing-page');
        // $('#wrapper #reserve').css({display: 'block'}).addClass('animated');
        $('#wrapper #reserve').addClass('animated');
        // $('#wrapper nav').css({display: 'block'});
    });

    // Going back to the first page
    $('#wrapper #reserve .container-fluid .reservation-back a').click(function (event) {
        // $('#wrapper nav').css({display: 'block'});
        event.preventDefault();
        $('body #wrapper .page-crop.page-slider').removeClass('easing-page');
        $('div#reserve').removeClass('animated');
    }) 
});

// jQuery(document).ready(function() {
// 	$('a[href*="#"]').bind('click',function(event){
// 		var $anchor = $(this);
		/*
		if you want to use one of the easing effects:
		$('html, body').stop().animate({
			scrollLeft: $($anchor.attr('href')).offset().left
		}, 1500,'easeInOutExpo');
		 */
// 		$('html, body').stop().animate({
// 			scrollTop: $($anchor.attr('href')).offset().top
// 		}, 1500, 'easeInOutQuart');
// 		event.preventDefault();
// 	});
// });