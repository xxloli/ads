(function() {
  var resources = [
    { tag: 'link',  href: 'https://cdn.jsdelivr.net/gh/xxloli/ads/lts/js/e.min.css', rel: 'stylesheet' },//e.css
    { tag: 'script', src: 'https://cdn.jsdelivr.net/gh/xxloli/ads/lts/js/b.min.js' },//b.js
    { tag: 'script', src: 'https://cdn.jsdelivr.net/gh/xxloli/ads/lts/js/c.min.js' },//c.js
    { tag: 'script', src: 'https://cdn.jsdelivr.net/gh/xxloli/ads/lts/js/d.min.js' },//d.js
    { tag: 'script', src: 'https://cdn.jsdelivr.net/gh/xxloli/ads/lts/js/f.min.js' },//f.js
  ];

  // 生成 YYYYMMDD 格式的当天日期
  var now = new Date();
  var y = now.getFullYear();
  var m = String(now.getMonth() + 1).padStart(2, '0');
  var d = String(now.getDate()).padStart(2, '0');
  var dateStr = y + m + d;

  // 给 URL 拼接日期参数，避免缓存
  function addDateParam(url) {
    var separator = url.indexOf('?') === -1 ? '?' : '&';
    return url + separator + 'v=' + dateStr;
  }

  resources.forEach(function(r) {
    if (r.tag === 'script') {
      document.write('<script src="' + addDateParam(r.src) + '"><\/script>');
    } else {
      document.write('<link href="' + addDateParam(r.href) + '" rel="' + r.rel + '">');
    }
  });
})();
