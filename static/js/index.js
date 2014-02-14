(function($) {
	'use strict';

	var originalPostition = $('nav').offset().top;
	$(window).scroll(function() {
		var position = $('nav').offset().top,
			scroll = $(document).scrollTop();

		if (position <= scroll) {
			$('nav').addClass('fixed');
		}
		if (scroll <= originalPostition) {
			$('nav').removeClass('fixed');
		}
	});
})(jQuery);