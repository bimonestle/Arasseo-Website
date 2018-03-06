$(document).ready(function() {
	// Test
	$('div.slider li:first-child').addClass('active animated')
	var sliderItem = 'div.slider li'
	var navItem = 'ul.slider-controls li'
	$(navItem + ' a').on('click',function(event){
		event.preventDefault();

		$('ul.slider-controls').addClass('off')
		$(navItem + '.active').removeClass('active')
		$(this).parent().addClass('active')	
		
		var eq = $(this).parent().index();
		var sliderActive = $(sliderItem + '.active').removeClass('active');
		setTimeout(function(){
			sliderActive.removeClass('animated');
		},1100);
		$(sliderItem).eq(eq).addClass("active animated");
	});
	// 1st Slider
	// $('ul.slider-controls li:first-child a').on('click',function(event){
	// 	var $anchor = $(this);
	// 	event.preventDefault();
	// 	/*
	// 	if you want to use one of the easing effects:
	// 	$('html, body').stop().animate({
	// 		scrollLeft: $($anchor.attr('href')).offset().left
	// 	}, 1500,'easeInOutExpo');
	// 	 */
	// 	// $('div.slider li').stop().animate({
	// 	// 	scrollLeft: $('li[data-slide]').offset().left
	// 	// }, 1500,'easeInOutQuart').removeClass("div.slider li");
	// 	// $('div.slider li:first-child').prevAll().removeClass();
	// 	// $('div.slider li:first-child').nextAll().removeClass();
	// 	var activatedslider = $('div.slider li.active.animated').removeClass('active');
	// 	setTimeout(function(){
	// 		activatedslider.removeClass();
	// 	},1100);
	// 	$('div.slider li:first-child').addClass("active animated");
		
	// });
	// // 2nd Slider
	// $('ul.slider-controls li:nth-child(2) a').on('click',function(event){
	// 	var $anchor = $(this);
	// 	// jQuery('div.slider li.active').addClass("slidebefore");
	// 	// $('div.slider li:nth-child(2)').prevAll().removeClass();
	// 	// $('div.slider li:nth-child(2)').nextAll().removeClass();
	// 	var activatedslider = $('div.slider li.active.animated').removeClass('active');
	// 	setTimeout(function(){
	// 		activatedslider.removeClass();
	// 	},1100);
	// 	$('div.slider li:nth-child(2)').addClass("active animated");
	// 	event.preventDefault();
	// });
	// // 3rd Slider
	// $('ul.slider-controls li:nth-child(3) a').on('click',function(event){
	// 	var $anchor = $(this);
		
	// 	// $('div.slider li:nth-child(3)').prevAll().removeClass();
	// 	// $('div.slider li:nth-child(3)').nextAll().removeClass();
	// 	var activatedslider = $('div.slider li.active.animated').removeClass('active');
	// 	setTimeout(function(){
	// 		activatedslider.removeClass();
	// 	},1100);
	// 	$('div.slider li:nth-child(3)').addClass("active animated");
	// 	event.preventDefault();
	// });
	// // 4th Slider
	// $('ul.slider-controls li:nth-child(4) a').on('click',function(event){
	// 	var $anchor = $(this);
		
	// 	// $('div.slider li:nth-child(4)').prevAll().removeClass();
	// 	// $('div.slider li:nth-child(4)').nextAll().removeClass();
	// 	var activatedslider = $('div.slider li.active.animated').removeClass('active');
	// 	setTimeout(function(){
	// 		activatedslider.removeClass();
	// 	},1100);
	// 	$('div.slider li:nth-child(4)').addClass("active animated");
	// 	event.preventDefault();
	// });
	// // 5th Slider
	// $('ul.slider-controls li:nth-child(5) a').on('click',function(event){
	// 	var $anchor = $(this);
		
	// 	// $('div.slider li:nth-child(5)').prevAll().removeClass();
	// 	var activatedslider = $('div.slider li.active.animated').removeClass('active');
	// 	setTimeout(function(){
	// 		activatedslider.removeClass();
	// 	},1100);
	// 	$('div.slider li:nth-child(5)').addClass("active animated");
	// 	event.preventDefault();
	// });
});
// ORIGINAL CODE
// $(function() {
// 	$('ul.nav a').bind('click',function(event){
// 		var $anchor = $(this);
// 		/*
// 		if you want to use one of the easing effects:
// 		$('html, body').stop().animate({
// 			scrollLeft: $($anchor.attr('href')).offset().left
// 		}, 1500,'easeInOutExpo');
// 		 */
// 		$('html, body').stop().animate({
// 			scrollLeft: $($anchor.attr('href')).offset().left
// 		}, 1000);
// 		event.preventDefault();
// 	});
// });