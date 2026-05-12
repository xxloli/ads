(function () {
  var STORAGE_KEY = 'ad_click_data';
  var MAX_CLICKS = 13;
  var adObserver = null;

  function getToday() {
    var d = new Date();
    return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
  }

  function loadData() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        return JSON.parse(raw);
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
    var selectors = [
      '.mobile-ad',
      '.sidebar-ad',
      '#video-pause-ad',
      '.exo-ipp',
      '.pna-win',
      '.pna-android'
    ];
    for (var i = 0; i < selectors.length; i++) {
      var elements = document.querySelectorAll(selectors[i]);
      for (var j = 0; j < elements.length; j++) {
        elements[j].style.display = 'none';
      }
    }
  }

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

  function incrementClick() {
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
    if (newCount >= MAX_CLICKS) {
      hideAllAds();
      startAdObserver();
    }
  }

  function isInAdContainer(el) {
    return !!(el.closest('.mobile-ad') ||
              el.closest('.sidebar-ad') ||
              el.closest('#video-pause-ad') ||
              el.closest('.exo-ipp') ||
              el.closest('.pna-win') ||
              el.closest('.pna-android'));
  }

  function attachClickListeners() {
    var lastHoveredEl = null;

    document.addEventListener('mouseover', function (e) {
      lastHoveredEl = e.target;
    }, true);

    window.addEventListener('blur', function () {
      if (lastHoveredEl && isInAdContainer(lastHoveredEl)) {
        incrementClick();
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
