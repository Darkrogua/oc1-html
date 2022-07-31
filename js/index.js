$('button.navbar-toggler').on('click', function() {
   $('header').toggleClass('menu-open');
});


var swiper = new Swiper(".portfolioSlider", {
   slidesPerView: "auto",
   spaceBetween: 30,
   pagination: false,
   navigation: {
      nextEl: '.slider-control__right',
      prevEl: '.slider-control__left',
   },
});