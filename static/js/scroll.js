(function($) {
	'use strict';

	// Well, I can't say this is clean, but it'll do for now...

	var aboutChartTop = $('#chart').offset().top,
		experiencesChartTop = $('#bar_graph').offset().top,
		$canvas = $('canvas'),
		$barGraph = $('#bar_graph');

	$(window).scroll(function() {
		var scroll = $(document).scrollTop(),
			height = $(window).height(),
			midpoint = ((scroll + height) + scroll) / 2;

		if (aboutChartTop < midpoint) {
			$canvas.animate({
				opacity: 1.0
			}, 500, function() {
				$('#chart_titles').animate({
					opacity: 1.0
				}, 500);
			});
		}

		var size;
		if (experiencesChartTop < midpoint) {
			$barGraph.children().each(function() {
				size = $(this).data('size');
				$('div', this).animate({
					width: size
				}, 2000);
			});
		}
	});

	// Smooth Scrolling
	// Good 'ol CSS Tricks http://css-tricks.com/snippets/jquery/smooth-scrolling/
	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});

})(jQuery);
