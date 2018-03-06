jQuery(document).ready(function(){
    // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links

  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
    //   event.preventDefault();
      $('html, body').animate({ 
        scrollTop: target.offset().top
      }, 1500, 'easeInOutQuart', function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex',''); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
});

// ALTERNATIVE CODE

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