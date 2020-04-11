$(function() {
  $.get('http://data.fixer.io/api/latest', {'access_key': 'f8dffaf30b333232dcd8f180c40466fe'}, function(course) {

    let usd = course.rates.USD,
        rub = course.rates.RUB,
        eur = rub / usd;

    $('.usd').text(eur.toFixed(2)+' руб.');
    $('.eur').text(rub.toFixed(2)+' руб.');

  });

  $('.burger').on('click', function() {
    $('.main-nav__list').slideToggle(300, function() {
      if($(this).css('display') === 'none') {
        $(this).removeAttr('style');
      }
    });

    $('.burger__item:first-child').toggleClass('burger__item--first');
    $('.burger__item:nth-child(2)').toggleClass('burger__item--midl');
    $('.burger__item:last-child').toggleClass('burger__item--last');
  })

  let headerForm = $(".header-form");

  $('.hide-btn').on('click', function() {
    headerForm.css('display', 'flex');
  })

  $('.header-btn').on('click', function() {
    headerForm.hide();
  })

   $(document).mouseup(function (e){
    if (!headerForm.is(e.target)
        && headerForm.has(e.target).length === 0) {
      headerForm.hide();
    }
  });
});