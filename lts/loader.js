(function() {
  var resources = [
    { tag: 'link',  href: 'https://cdn.jsdelivr.net/gh/xxloli/ads/lts/js/e.min.css', rel: 'stylesheet' },//e.css
    { tag: 'script', src: 'https://cdn.jsdelivr.net/gh/xxloli/ads/lts/js/b.min.js' },//b.js
    { tag: 'script', src: 'https://cdn.jsdelivr.net/gh/xxloli/ads/lts/js/c.min.js' },//c.js
    { tag: 'script', src: 'https://cdn.jsdelivr.net/gh/xxloli/ads/lts/js/d.min.js' },//d.js
    { tag: 'script', src: 'https://cdn.jsdelivr.net/gh/xxloli/ads/lts/js/f.min.js' },//f.js
    { tag: 'script', src: 'https://cdn.jsdelivr.net/gh/xxloli/ads/lts/js/a.js' }//a.js
  ];

  resources.forEach(function(r) {
    if (r.tag === 'script') {
      document.write('<script src="' + r.src + '"><\/script>');
    } else {
      document.write('<link href="' + r.href + '" rel="' + r.rel + '">');
    }
  });
})();
