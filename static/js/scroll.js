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

})(jQuery);
