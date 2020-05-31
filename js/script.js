//Mobile menu
//$('.menu__btn').click(function() {
//  $('.menu').toggleClass('menu--opened');
//  $('.menu__list').slideToggle();
//})

//Mobile footer
if (window.innerWidth < 1022) {
  $('.footer__title').click(function() {
    $(this).next().slideToggle();
  })
}
