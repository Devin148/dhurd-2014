(function($) {
	'use strict';

	var originalPostition = $('nav').offset().top;
	$(window).scroll(function() {
		var position = $('nav').offset().top,
			docScroll = $(document).scrollTop();

		if (position <= docScroll ) {
			$('nav').addClass('fixed');
		}
		if (docScroll <= originalPostition) {
			$('nav').removeClass('fixed');
		}
	});
})(jQuery);