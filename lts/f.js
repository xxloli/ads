(function () {
  var STORAGE_KEY = 'ad_click_data';
  var MAX_CLICKS = 13;

  //广告选择器
  var AD_SELECTORS = [
    '.mobile-ad',
    '.sidebar-ad',
    '#video-pause-ad',
    '.exo-ipp',
    '.pna-win',
    '.pna-android'
  ];
  var adObserver = null;

  function getToday() {
    var d = new Date();
    return d.getFullYear() + '-' +
      ('0' + (d.getMonth() + 1)).slice(-2) + '-' +
      ('0' + d.getDate()).slice(-2);
  }

  function loadData() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        var data = JSON.parse(raw);
        if (data.date === getToday()) {
          return data;
        }
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch (e) {}
    return null;
  }

  function saveData(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {}
  }

  function getClickCount() {
    var today = getToday();
    var data = loadData();
    if (data && data.date === today) {
      return data.count;
    }
    return 0;
  }

  function isAdFreeToday() {
    return getClickCount() >= MAX_CLICKS;
  }

  function setClickCount(count) {
    saveData({ date: getToday(), count: count });
  }

  function updateDisplay() {
    var el = document.getElementById('ad-click-count-display');
    if (el) {
      var current = getClickCount();
      if (current >= MAX_CLICKS) {
        el.textContent = '当日已移除所有广告-感谢您的支持';
      } else {
        el.textContent = '当日点击广告次数' + current + '/' + MAX_CLICKS;
      }
    }
  }

  function hideAllAds() {
    for (var i = 0; i < AD_SELECTORS.length; i++) {
      var elements = document.querySelectorAll(AD_SELECTORS[i]);
      for (var j = 0; j < elements.length; j++) {
        elements[j].style.display = 'none';
      }
    }
  }

  //移除动态广告类
  function startAdObserver() {
    if (adObserver) return;
    adObserver = new MutationObserver(function (mutations) {
      var dynamicClasses = ['exo-ipp', 'pna-win', 'pna-android'];
      for (var i = 0; i < mutations.length; i++) {
        var addedNodes = mutations[i].addedNodes;
        for (var j = 0; j < addedNodes.length; j++) {
          var node = addedNodes[j];
          if (node.nodeType === 1) {
            for (var d = 0; d < dynamicClasses.length; d++) {
              if (node.classList && node.classList.contains(dynamicClasses[d])) {
                node.style.display = 'none';
              }
              if (node.querySelectorAll) {
                var dynamicElements = node.querySelectorAll('.' + dynamicClasses[d]);
                for (var k = 0; k < dynamicElements.length; k++) {
                  dynamicElements[k].style.display = 'none';
                }
              }
            }
          }
        }
      }
    });
    adObserver.observe(document.documentElement, { childList: true, subtree: true });
  }

  function applyAdFreeState() {
    if (isAdFreeToday()) {
      hideAllAds();
      startAdObserver();
      updateDisplay();
    }
  }

  function incrementClick(clickedEl) {
    var current = getClickCount();
    if (current >= MAX_CLICKS) {
      return;
    }
    if (Math.random() < 0.2) {
      return;
    }
    var newCount = current + 1;
    setClickCount(newCount);
    updateDisplay();
    if (clickedEl) {
      var adContainer = clickedEl.closest(AD_SELECTORS.join(','));
      if (adContainer) {
        adContainer.style.display = 'none';
      }
    }
    if (newCount >= MAX_CLICKS) {
      hideAllAds();
      startAdObserver();
    }
  }

  function isInAdContainer(el) {
    return !!el.closest(AD_SELECTORS.join(','));
  }

  function attachClickListeners() {
    var lastHoveredEl = null;
    var pendingAdBlurTime = null;
    var pendingAdEl = null;

    document.addEventListener('mouseover', function (e) {
      lastHoveredEl = e.target;
    }, true);

    window.addEventListener('blur', function () {
      if (lastHoveredEl && isInAdContainer(lastHoveredEl)) {
        pendingAdBlurTime = Date.now();
        pendingAdEl = lastHoveredEl;
      }
    });

    window.addEventListener('focus', function () {
      if (pendingAdBlurTime !== null) {
        var elapsed = Date.now() - pendingAdBlurTime;
        if (elapsed >= 1000 && elapsed <= 30000) {
          incrementClick(pendingAdEl);
        }
        pendingAdBlurTime = null;
        pendingAdEl = null;
      }
    });
  }

  function initDisplayElement() {
    var displayEl = document.getElementById('ad-click-count-display');
    if (!displayEl) return;
    updateDisplay();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initDisplayElement();
      applyAdFreeState();
      attachClickListeners();
    });
  } else {
    initDisplayElement();
    applyAdFreeState();
    attachClickListeners();
  }
})();
