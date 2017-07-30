$('.hamburger-bug').on('click', toggleMenu);
$('.chart-collapse').on('click', toggleCharts);

function toggleMenu() {
  $('body').toggleClass( "hide-menu" );
}

function toggleCharts() {
  console.log('here');
  $('.left-chart').slideToggle('slow');
  $('.right-chart').slideToggle('slow');
  $('.flaticon-next').toggleClass( "icon-reverse" );
}
