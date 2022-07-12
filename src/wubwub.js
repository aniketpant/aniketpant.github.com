/*
 * wubwub.js
 */

// Segment.io
window.analytics || (window.analytics = []),
  (window.analytics.methods = [
    'identify',
    'track',
    'trackLink',
    'trackForm',
    'trackClick',
    'trackSubmit',
    'page',
    'pageview',
    'ab',
    'alias',
    'ready',
    'group',
    'on',
    'once',
    'off',
  ]),
  (window.analytics.factory = function (t) {
    return function () {
      var a = Array.prototype.slice.call(arguments);
      return a.unshift(t), window.analytics.push(a), window.analytics;
    };
  });
for (var i = 0; i < window.analytics.methods.length; i++) {
  var method = window.analytics.methods[i];
  window.analytics[method] = window.analytics.factory(method);
}
(window.analytics.load = function (t) {
  var a = document.createElement('script');
  (a.type = 'text/javascript'),
    (a.async = !0),
    (a.src =
      ('https:' === document.location.protocol ? 'https://' : 'http://') +
      'd2dq2ahtl5zl1z.cloudfront.net/analytics.js/v1/' +
      t +
      '/analytics.min.js');
  var n = document.getElementsByTagName('script')[0];
  n.parentNode.insertBefore(a, n);
}),
  (window.analytics.SNIPPET_VERSION = '2.0.8'),
  window.analytics.load('qlxj9aav9n');
window.analytics.page();

// Twitter Widget
!(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = '//platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js, fjs);
  }
})(document, 'script', 'twitter-wjs');

// Google Fonts
WebFontConfig = {
  google: {
    families: ['Playfair+Display:600', 'Inter:300,300italic,400,600,700'],
  },
};
(function () {
  var wf = document.createElement('script');
  wf.src =
    ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

// Date transformation using moment.js
$.each($('.date'), function (index, el) {
  origTime = $(el).text();
  humanizedTime = moment(origTime).fromNow();
  $(this).text(humanizedTime);
});
