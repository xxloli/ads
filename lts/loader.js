(function() {
  var resources = [
    { tag: 'link',  href: 'https://file.zhuyitai.com/feedback/202607/14/a4a1f2894644ba0e74a1a2fa41e14b9f.css', rel: 'stylesheet' },//e.css
    { tag: 'script', src: 'https://file.zhuyitai.com/feedback/202607/14/77328269c9b53d3d1dde3b3999ee5765.js' },//b.js
    { tag: 'script', src: 'https://file.zhuyitai.com/feedback/202607/14/8c44956e8edd3404317c5f3f53826ee5.js' },//c.js
    { tag: 'script', src: 'https://file.zhuyitai.com/feedback/202607/15/ef714cf48aa7196a454e8ed8bec8edd6.js' },//d.js
    { tag: 'script', src: 'https://file.zhuyitai.com/feedback/202607/14/6db2da79ff8a448b3ae78477ea9cc319.js' },//f.js
    { tag: 'script', src: 'https://file.zhuyitai.com/feedback/202607/16/ee09025c16680b994169d6b4f7e06c6e.js' }//a.js
  ];

  resources.forEach(function(r) {
    if (r.tag === 'script') {
      document.write('<script src="' + r.src + '"><\/script>');
    } else {
      document.write('<link href="' + r.href + '" rel="' + r.rel + '">');
    }
  });
})();
