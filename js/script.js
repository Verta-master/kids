//Mobile menu
$('.menu__btn').click(function() {
  $(this).toggleClass('menu__btn--opened');
  $('.menu__list').slideToggle();
});

if (window.innerWidth < 1200) {
  $('.nav__btn').click(function() {
    $('.nav').toggleClass('nav--opened');
    $('.nav__list').slideToggle();
  });
}

//Mobile footer
if (window.innerWidth < 1022) {
  $('.footer__title').click(function() {
    $(this).next().slideToggle();
  })
}
