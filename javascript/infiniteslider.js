$(document).ready(function() {
	// Test
	var navItem = 'ul.slider-controls li';
    setInterval(function(){
        if (!$('ul.slider-controls').hasClass('off')) {
            var eq = $(navItem + '.active').index();
            console.log(eq);
            $(navItem).eq(eq === 4 ? 0 : eq + 1).find('a').click();
        }
    },5000);
});