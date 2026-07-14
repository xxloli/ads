(function() {
  var resources = [
    { tag: 'script', src: 'https://file.zhuyitai.com/feedback/202607/14/77328269c9b53d3d1dde3b3999ee5765.js' },//b.js
    { tag: 'script', src: 'https://file.zhuyitai.com/feedback/202607/14/8c44956e8edd3404317c5f3f53826ee5.js' },//c.js
    { tag: 'script', src: 'https://file.zhuyitai.com/feedback/202607/14/78442b1a51ba925721f18520b60f4925.js' },//d.js
    { tag: 'script', src: 'https://file.zhuyitai.com/feedback/202607/14/6db2da79ff8a448b3ae78477ea9cc319.js' },//f.js
    { tag: 'link',  href: 'https://file.zhuyitai.com/feedback/202607/14/f776020623c3cdbd026a1b969e600b6a.css', rel: 'stylesheet' },//e.css
    { tag: 'script', src: 'https://file.zhuyitai.com/feedback/202607/14/533bf0c7bb81ea801ee1662638e36a99.js' }//a.js
  ];

  resources.forEach(function(r) {
    if (r.tag === 'script') {
      var s = document.createElement('script');
      s.src = r.src;
      document.head.appendChild(s);
    } else {
      var l = document.createElement('link');
      l.href = r.href;
      l.rel = r.rel;
      document.head.appendChild(l);
    }
  });
})();
