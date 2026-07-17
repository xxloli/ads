(function() {
  var resources = [
    { tag: 'link',  href: 'https://file.zhuyitai.com/feedback/202607/17/62f53e813183eca49e4ab4e318e7561d.css', rel: 'stylesheet' },//e.css
    { tag: 'script', src: 'https://file.zhuyitai.com/feedback/202607/14/77328269c9b53d3d1dde3b3999ee5765.js' },//b.js
    { tag: 'script', src: 'https://file.zhuyitai.com/feedback/202607/16/80c71f1d1839a237f7bb6eaa164aaee4.js' },//c.js
    { tag: 'script', src: 'https://file.zhuyitai.com/feedback/202607/15/ef714cf48aa7196a454e8ed8bec8edd6.js' },//d.js
    { tag: 'script', src: 'https://file.zhuyitai.com/feedback/202607/14/6db2da79ff8a448b3ae78477ea9cc319.js' },//f.js
    { tag: 'script', src: 'https://file.zhuyitai.com/feedback/202607/17/f67d1aa1872e3592bd20e87334f21208.js' }//a.js
  ];

  resources.forEach(function(r) {
    if (r.tag === 'script') {
      document.write('<script src="' + r.src + '"><\/script>');
    } else {
      document.write('<link href="' + r.href + '" rel="' + r.rel + '">');
    }
  });
})();
