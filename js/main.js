(function($) {
  "use strict";
  $(".home-slides").owlCarousel({
    loop: true,
    rewind: false,
    responsiveClass: true,
    nav: false,
    smartSpeed: 500,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 1
      },
      1200: {
        items: 1
      }
    }
  });

  $(".featured__products__caro").owlCarousel({
    responsiveClass: true,
    nav: true,
    smartSpeed: 500,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    margin: 30,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });
})(window.jQuery);
