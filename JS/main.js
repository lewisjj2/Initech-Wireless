/* Show and Hide Menu*/

$(document).ready(function () {

    'use strict';

    $(window).scroll(function () {

        'use strict';

        if ($(window).scrollTop() < 80) {


            $('.navbar-default').css({
                'background-color': 'rgba(59,59,59,0)'
            });

        } else {
            $('.navbar').css({
                'margin-top': '0px',
                'opacity': '1'
            });

            $('.navbar-default').css({
                'background-color': 'rgba(59,59,59,0.7)',
                'border-color': '#444'
            });

            $('.navbar-brand img').css({
                'height': '35px',
                'padding-top': '0px'
            });

            $('.navbar-nav > li > a ').css({
                'padding-top': '15px'
            });

        }
    });

});

/*Progressbar Animation*/
let progress = document.getElementById('progressbar');

let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 165;
    progress.style.height = progressHeight + "%";
}


        
/*Add Smooth Scrolling*/

$(document).ready(function () {

    'use strict';

    $('.nav-item, #scroll-to-top,.btn-download,.btn-tour,.btn-purchase-now').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

});

/*Active Menu Item Onclick*/

$(document).ready(function () {

    'use strict';

    $('.navbar-nav li a').click(function () {

        'use strict';

        $('.navbar-nav li a').parent().removeClass("active");

        $(this).parent().addClass("active");

    });
});


/*Mobile Collapse Menu*/
$(document).ready(function(){
    'use strict';
    
     $ ('a.nav-item').click(function(){
         $('.navbar-collapse').slideUp();
     })            
    });

$(document).ready(function(){
    $('.navbar-toggle').click(function(){
        $('.navbar-collapse').slideDown();
    })
});

/*Highlight Menu Item On Scroll*/

$(document).ready(function () {

    'use strict';

    $(window).scroll(function () {

        'use strict';

        $("section").each(function () {
            'use strict';

            var bb = $(this).attr("id");
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;

            if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
                $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
            } else {
                $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
            }
        });
    });
});


/*Add Auto Padding to Header*/

$(document).ready(function () {

    'use strict';

    setInterval(function () {

        'use strict';

        var windowHeight = $(window).height();

        var containerHeight = $(".header-container").height();

        var padTop = windowHeight - containerHeight;

        $('.header-container').css({

            'padding-top': Math.round(padTop / 2) + 'px',
            'padding-bottom': Math.round(padTop / 2) + 'px',
        });

    }, 10)
});

/*Add Bx Slider to Screens Section*/

$(document).ready(function(){
    
  $('.bxslider').bxSlider({
      
      slideWidth: 292.5,
      auto: true,
      minSlides: 1,
      maxSlides: 3,
      slideMargin: 50
  });
});

/*Counter Up*/

$(document).ready(function(){
    
    $('.counter-num').counterUp({
        delay: 10,
        time: 2000
});
});

/*Add Animation-Wow-On Scroll Effects*/

$(document).ready(function(){
    
    'use strict';
    
    new WOW().init();
});








