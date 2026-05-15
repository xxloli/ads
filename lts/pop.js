(function() {
    function run() {
        var cfg = window.popConfig || {},
            URL    = cfg.url    || 'https://s.pemsrv.com/v1/link.php?cat=&idzone=5923404&type=8',
            SECS   = cfg.secs   || 60,
            SEL    = cfg.sel    || '[exo-pop]',
            COOLDOWN_KEY = '_pop_cd',
            fired  = false;

        if (sessionStorage.getItem(COOLDOWN_KEY) === '1') {
            sessionStorage.removeItem(COOLDOWN_KEY);
            fired = true;
            setTimeout(function() { fired = false; }, SECS * 1000);
        }

        function findLink(el) {
            while (el) {
                if (el.tagName === 'A' && el.href && !/^javascript:/.test(el.href)) return el;
                el = el.parentElement;
            }
            return null;
        }

        function makeFire(fallback) {
            return function(e) {
                if (fired) return;
                fired = true;
                setTimeout(function() { fired = false; }, SECS * 1000);

                var a = findLink(e.target);

                if (a) {
                    e.preventDefault();
                    window.open(a.href, '_blank');
                    location.href = URL;
                } else {
                    fallback();
                }
            };
        }

        function bind() {
            var els = document.querySelectorAll(SEL);
            var fire;

            if (els.length === 0) {
                fire = makeFire(function() {
                    sessionStorage.setItem(COOLDOWN_KEY, '1');
                    window.open(location.href, '_blank');
                    location.href = URL;
                });
                document.addEventListener('click', fire);
                return;
            }

            fire = makeFire(function() {
                var w = window.open(URL, '_blank');
                if (w) { w.blur(); window.focus(); }
            });
            for (var i = 0; i < els.length; i++) {
                els[i].addEventListener('click', fire);
            }
        }

        bind();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', run);
    } else {
        run();
    }
})();
