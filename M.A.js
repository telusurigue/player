var firstRing = $('.first-ring');
var secondRing = $('.second-ring');
var siblings = firstRing.siblings('.second-ring');
var open = $('#open');

open.click(function() {
  firstRing.toggleClass('show');

  if (!firstRing.hasClass('show')) {
    siblings.removeClass('show');
  }
});

firstRing.children('g').click(function() {
  var data = $(this).data('url');
  siblings.addClass('show');

  secondRing.children('g').children('a').children('text').each(function() {
    var text = $(this).text().split(' ');
    $(this).text(text[0] + ' ' + data + ' ' + text[2]);
  });
});
