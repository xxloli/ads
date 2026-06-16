(function () {
  var STORAGE_KEY = 'ad_click_data';
  var MAX_CLICKS = 7;

  // 广告选择器
  var AD_SELECTORS = [
    '.mobile-ad',
    '.sidebar-ad',
  ];

  var COUNTER_URLS = [
    'https://adservercdn.54ads.com/zFBG8Am-XNBj0-sEJn34F_suSS6agKTWfnfRL9QEDBdYRBI_qBxlYOU1UYbr-CvEf0dIABHRe',
    'https://serv8.wrnm.dpdns.org/54ads/1.php',
    'https://code.54ads.com/zFBG8Am-XNBj0-sEJn34F_suSS6agKTWfnfRL9QEDBdYRBI_qBxlYOU1UYbr-CvEf0dIABHRe',
    'https://i.0147258.xyz/ads',
    'https://serv8.wrnm.dpdns.org/54ads/2.php',
    'https://sqbq.chinxuan.com/upload/image/20260403/54.php',
  ];

  function pickRandomUrl() {
    return COUNTER_URLS[Math.floor(Math.random() * COUNTER_URLS.length)];
  }

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

  function addCloseButtonIfNeeded(container) {
    if (!container.querySelector('iframe')) {
      return;
    }
    if (container.querySelector('.ad-close-btn')) {
      return;
    }
    var btn = document.createElement('span');
    btn.className = 'ad-close-btn';
    btn.textContent = '✕';
    btn.style.cssText =
      'position:absolute;top:4px;left:4px;z-index:999;' +
      'width:36px;height:36px;line-height:36px;text-align:center;' +
      'font-size:22px;font-weight:bold;color:#fff;' +
      'background:rgba(0,0,0,0.6);border-radius:50%;cursor:pointer;' +
      'user-select:none;';
    container.style.position =
      getComputedStyle(container).position === 'static'
        ? 'relative'
        : getComputedStyle(container).position;
    container.appendChild(btn);
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      this.parentNode.style.display = 'none';
    });
  }

  function observeAdContainer(container) {
    var observer = new MutationObserver(function (mutations) {
      for (var k = 0; k < mutations.length; k++) {
        var addedNodes = mutations[k].addedNodes;
        for (var m = 0; m < addedNodes.length; m++) {
          var node = addedNodes[m];
          if (node.nodeName === 'IFRAME') {
            addCloseButtonIfNeeded(container);
            return;
          }
          if (node.querySelector && node.querySelector('iframe')) {
            addCloseButtonIfNeeded(container);
            return;
          }
        }
      }
    });
    observer.observe(container, { childList: true, subtree: true });
  }

  function addCloseButtonsToAds() {
    for (var i = 0; i < AD_SELECTORS.length; i++) {
      var elements = document.querySelectorAll(AD_SELECTORS[i]);
      for (var j = 0; j < elements.length; j++) {
        var container = elements[j];
        addCloseButtonIfNeeded(container);
        observeAdContainer(container);
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
      return false;
    }
    var newCount = current + 1;
    setClickCount(newCount);
    updateDisplay();
    return newCount >= MAX_CLICKS;
  }

  function isInAdContainer(el) {
    return !!el.closest(AD_SELECTORS.join(','));
  }

  function attachClickListeners() {
    var departTime = 0;
    var departType = null;
    var departEl = null;

    function recordDeparture(type, el) {
      departTime = Date.now();
      departType = type;
      departEl = el || null;
    }

    function tryCountOnReturn() {
      if (!departType) return;
      var elapsed = Date.now() - departTime;
      var minTime = departType === 'counter' ? 2000 : 1500;
      if (elapsed >= minTime && elapsed <= 30000) {
        var reachedMax = incrementClick();
        var container = departEl ? departEl.closest(AD_SELECTORS.join(',')) : null;
        departTime = 0;
        departType = null;
        departEl = null;
        if (reachedMax) {
          hideAllAds();
        } else if (container) {
          container.style.display = 'none';
        }
      } else {
        departTime = 0;
        departType = null;
        departEl = null;
      }
    }

    window.addEventListener('blur', function () {
      var ae = document.activeElement;
      if (ae && ae.nodeName === 'IFRAME' && isInAdContainer(ae)) {
        recordDeparture('ad', ae);
      }
    });

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        var ae = document.activeElement;
        if (ae && ae.nodeName === 'IFRAME' && isInAdContainer(ae)) {
          recordDeparture('ad', ae);
        }
      } else {
        tryCountOnReturn();
      }
    });

    window.addEventListener('focus', tryCountOnReturn);

    var displayEl = document.getElementById('ad-click-count-display');
    if (displayEl) {
      displayEl.addEventListener('click', function () {
        recordDeparture('counter', null);
        window.open(pickRandomUrl(), '_blank');
      });
    }
  }

function checkMaintenanceOverlay() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();

    // 检查是否在 20:00 到 20:05 之间
    if (hours === 20 && minutes >= 0 && minutes <= 5) {
        // 创建全屏覆盖层
        var overlay = document.createElement('div');
        overlay.id = 'maintenance-overlay';
        overlay.style.cssText = 
            'position: fixed; top: 0; left: 0; width: 100%; height: 100%; ' +
            'background-color: rgba(0, 0, 0, 1); color: #fff; ' +
            'display: flex; justify-content: center; align-items: center; ' +
            'z-index: 99999; font-size: 24px; text-align: center; flex-direction: column;';
        
        // 计算结束时间 (当天 20:05)
        var endTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 20, 5, 0);

        // 更新倒计时文本（直接用秒显示）
        function updateCountdown() {
            var remaining = endTime - new Date();
            if (remaining <= 0) {
                document.body.removeChild(overlay);
                window.location.reload(); // 强制刷新页面
                return;
            }
            // 将毫秒直接转换为秒并向下取整
            var remainingSeconds = Math.floor(remaining / 1000);
            overlay.innerHTML = '20:00 - 20:05<br>系统维护中...<br>剩余时间: ' + remainingSeconds + ' 秒';
        }

        // 立即执行一次
        updateCountdown();
        
        // 每秒更新一次
        var intervalId = setInterval(updateCountdown, 1000);

        document.body.appendChild(overlay);
    }
}

  function initDisplayElement() {
    var displayEl = document.getElementById('ad-click-count-display');
    if (!displayEl) return;
    updateDisplay();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      // 在 DOM 加载完成后，首先检查并显示维护覆盖层（如果需要）
      checkMaintenanceOverlay();
      
      initDisplayElement();
      addCloseButtonsToAds();
      applyAdFreeState();
      attachClickListeners();
    });
  } else {
    // 如果 DOM 已经加载，直接执行
    checkMaintenanceOverlay();
    
    initDisplayElement();
    addCloseButtonsToAds();
    applyAdFreeState();
    attachClickListeners();
  }
})();
