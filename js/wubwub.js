/*
 * wubwub.js
 */

$.each($('.list__date'), function(index, el) {
  origTime = $(el).text();
  humanizedTime = moment(origTime).fromNow();
  $(this).text(humanizedTime);
});
