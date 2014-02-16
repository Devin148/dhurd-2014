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

(function($) {
    'use strict';

    var $canvas = $('#chart'),
        el = document.getElementById('chart'),
        x = el.width / 2,
        y = el.height / 2,
        radius = 125,
        startAngle = 0,
        endAngle = 0;

    var data = [
        { value: 20, color: '#F6B53B' },
        { value: 30, color: '#F7BF16' },
        { value: 30, color: '#F7A202' },
        { value: 19, color: '#F2CC85' },
    ];

    // JCanvas effect for mouseover
    function mouseOver(layer) {
        $canvas.animateLayer(layer, {
            strokeWidth: '+=20',
        }, 100);
    }

    // JCanvas effect for mouseout
    function mouseOut(layer) {
        $canvas.animateLayer(layer, {
            strokeWidth: '-=20',
        }, 50);
    }

    for (var i=0; i<data.length; i++) {
        // Add on the extra degrees
        endAngle = startAngle + ((data[i].value / 100) * 360);

        // Draw the arc for this section
        $canvas.drawArc({
            layer: true,
            strokeStyle: data[i].color,
            strokeWidth: 90,
            x: x,
            y: y,
            radius: radius,
            start: startAngle,
            end: endAngle,
            mouseover: mouseOver,
            mouseout: mouseOut,
        });

        // Increment the starting degree, add a degree of spacing
        startAngle = endAngle + 1;
    }
})(jQuery);
