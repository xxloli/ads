(function () {
  var STORAGE_KEY = 'ad_click_data';
  var MAX_CLICKS = 13;

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
        el.textContent = '当日已移除固定广告位';
      } else {
        el.textContent = '当日点击广告次数' + current + '/' + MAX_CLICKS;
      }
    }
  }

  function hideAllAds() {
    var selectors = [
      '.mobile-ad',
      '.sidebar-ad',
      '#video-pause-ad'
    ];
    for (var i = 0; i < selectors.length; i++) {
      var elements = document.querySelectorAll(selectors[i]);
      for (var j = 0; j < elements.length; j++) {
        elements[j].style.display = 'none';
      }
    }
  }

  function applyAdFreeState() {
    if (isAdFreeToday()) {
      hideAllAds();
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
    }
  }

  function attachClickListeners() {
    document.addEventListener('click', function (e) {
      var target = e.target;
      while (target) {
        if (target.nodeType === 1) {
          var tag = target.tagName.toLowerCase();
          if (tag === 'ins' || tag === 'a') {
            if (target.closest('.mobile-ad') ||
                target.closest('.sidebar-ad') ||
                target.closest('#video-pause-ad')) {
              incrementClick();
              return;
            }
          }
        }
        target = target.parentElement;
      }
    }, true);
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
