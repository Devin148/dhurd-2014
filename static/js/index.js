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

(function($) {
    'use strict';

    var $form = $('#contact_form'),
        $input = $form.find(':text, input[type=email], textarea');

    // Thanks RobertPitt
    // http://stackoverflow.com/questions/3806227/how-to-remove-default-value-of-input-on-focus
    $.fn.ToggleInputValue = function() {
        return $(this).each(function() {
            var input = $(this);
            var defaultValue = input.val();

            input.focus(function() {
                if(input.val() === defaultValue) {
                    input.val('');
                }
            }).blur(function() {
                if(input.val().length === 0) {
                    input.val(defaultValue);
                }
            });
        });
    };

    $input.ToggleInputValue();

    $form.submit(function(event) {
        $.ajax({
            type: 'POST',
            url: 'email.php',
            data: $form.serialize(),
            success: function() {
                // Man I hope I remember to remove this alert
                // before publishing...
                alert('Success!');
            }
        });
        event.preventDefault();
    });
})(jQuery);

(function($) {
    'use strict';

    var $about = $('#portfolio_item_about'),
        $item = $('.portfolio-item');

    $about.click(function() {
        $about.animate({
            top: '-100%'
        });
    });

    $item.hover(function() {
        var $hover = $(this).find('.item-hover');
        $hover.show();
        $hover.animate({
            width: '100%'
        }, 200);
    }, function() {
        var $hover = $(this).find('.item-hover');
        $hover.css('width', '0');
        $hover.hide();
    });

    function updatePostion() {
        var distance = $(window).scrollTop() - $item.offset().top,
            y = -(distance / 10),
            position = '50% ' + y + 'px';

        $about.css('background-position', position);
    }

    $item.click(function() {
        var id = $(this).attr('id');
        $about.css('background', 'url("static/images/portfolio/' + id + '.png") top center no-repeat fixed');
        updatePostion();

        $(window).scroll(function() {
            updatePostion();
        });

        $about.animate({
            top: '0'
        }, 500);
    });

})(jQuery);
