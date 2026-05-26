//1.0
(function() {
    if (window._popLoaded) return;
    window._popLoaded = true;

    function run() {
        var cfg = window.popConfig || {},
            URL            = cfg.url           || 'https://code.54ads.com/zFBG8Am-XNBj0-sEJn34F_suSS6agKTWfnfRL9QEDBdYRBI_qBxlYOU1UYbr-CvEf0dIABHRe',
            SECS           = cfg.secs          || 60,
            SEL            = cfg.sel           || '[exo-pop]',
            CD_KEY         = '_pop_cd',
            CHROME_ENABLED = cfg.chromeEnabled !== false,
            MAX_DEPTH      = 20,
            fired          = false,
            storageOk      = true,
            browser        = null;

        function isChromeOrChromium() {
            var nav = window.navigator,
                ua = (nav.userAgent || '').toLowerCase(),
                vd = nav.vendor || '';
            if (ua.indexOf('crios') !== -1) return false;
            if (nav.userAgentData && Array.isArray(nav.userAgentData.brands) && nav.userAgentData.brands.length > 0) {
                var brands = nav.userAgentData.brands;
                return brands.some(function(b) { return b.brand === 'Google Chrome'; }) ||
                       (brands.some(function(b) { return b.brand === 'Chromium'; }) && brands.length === 2);
            }
            var chrome = !!window.chrome,
                edge = ua.indexOf('edg') !== -1,
                opr = !!window.opr || ua.indexOf('opr') !== -1,
                brave = !!(nav.brave && nav.brave.isBrave),
                vivaldi = ua.indexOf('vivaldi') !== -1,
                yabrowser = ua.indexOf('yabrowser') !== -1,
                samsung = ua.indexOf('samsungbrowser') !== -1,
                uc = ua.indexOf('ucbrowser') !== -1;
            return chrome && vd === 'Google Inc.' && !edge && !opr && !brave && !vivaldi && !yabrowser && !samsung && !uc;
        }

        function getBrowserInfo() {
            var ua = window.navigator.userAgent;
            return {
                name: 'other',
                isChrome: isChromeOrChromium(),
                isMobile: !!ua.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WebOS|Windows Phone/i)
            };
        }

        try {
            var stored = localStorage.getItem(CD_KEY);
            if (stored) {
                var elapsed = Date.now() - parseInt(stored, 10);
                if (elapsed >= 0 && elapsed < SECS * 1000) {
                    fired = true;
                    var remaining = SECS * 1000 - elapsed;
                    setTimeout(function() { fired = false; }, remaining);
                }
            }
        } catch (e) {
            storageOk = false;
        }

        function setCd() {
            if (!storageOk) return;
            try { localStorage.setItem(CD_KEY, String(Date.now())); } catch (e) {}
        }

        function safeOpen(url) {
            var w;
            try { w = window.open(url, '_blank'); } catch (e) {}
            if (w) return w;
            try {
                var a = document.createElement('a');
                a.href = url;
                a.target = '_blank';
                a.style.position = 'fixed';
                a.style.left = '-9999px';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            } catch (e) {}
            return null;
        }

        function attrName() {
            return SEL.replace(/^\[|\]$/g, '');
        }

        function matchesSel(el) {
            var name = attrName(), d = 0;
            while (el && d < MAX_DEPTH) {
                if (el.hasAttribute && el.hasAttribute(name)) return true;
                el = el.parentElement;
                d++;
            }
            return false;
        }

        function findLink(el) {
            var d = 0;
            while (el && d < MAX_DEPTH) {
                if (el.tagName === 'A' && el.href) {
                    var raw = el.getAttribute('href') || '';
                    if (/^(javascript:|#)/.test(raw)) return null;
                    if (el.hasAttribute && el.hasAttribute('download')) return null;
                    return el;
                }
                el = el.parentElement;
                d++;
            }
            return null;
        }

        function chromeTabPop(linkUrl, popUrl) {
            var a = document.createElement('a');
            a.href = linkUrl;
            document.body.appendChild(a);
            var evt = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window,
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                ctrlKey: true,
                altKey: false,
                shiftKey: false,
                metaKey: true,
                button: 0
            });
            evt.preventDefault = undefined;
            var dispatched = a.dispatchEvent(evt);
            a.parentNode.removeChild(a);
            if (!dispatched) {
                safeOpen(linkUrl);
            }
            window.open(popUrl, '_self');
        }

        function handleClick(e) {
            if (fired) return;
            fired = true;
            setTimeout(function() { fired = false; }, SECS * 1000);

            var a = findLink(e.target);
            var linkHref = a ? a.href : location.href;

            if (a) {
                e.preventDefault();
                e.stopImmediatePropagation();
            }

            if (CHROME_ENABLED && browser && browser.isChrome && !browser.isMobile) {
                setCd();
                chromeTabPop(linkHref, URL);
                return;
            }

            if (a) {
                safeOpen(a.href);
                location.href = URL;
                return;
            }

            if (fallbackMode) {
                setCd();
                safeOpen(location.href);
                location.href = URL;
            } else {
                var w = safeOpen(URL);
                if (w) { try { w.blur(); } catch (e) {} window.focus(); }
            }
        }

        var fallbackMode = false;

        function bind() {
            var els = document.querySelectorAll(SEL);

            if (els.length === 0) {
                fallbackMode = true;
                document.addEventListener('click', handleClick);
                document.addEventListener('touchstart', function() {}, { passive: true });
                return;
            }

            document.addEventListener('click', function(e) {
                if (matchesSel(e.target)) handleClick(e);
            });
            document.addEventListener('touchstart', function() {}, { passive: true });
        }

        browser = getBrowserInfo();
        bind();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', run);
    } else {
        run();
    }
})();
