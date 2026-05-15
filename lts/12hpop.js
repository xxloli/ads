(function() {
    function run() {
        var cfg = window.popConfig || {},
            URL    = cfg.url    || 'https://s.pemsrv.com/v1/link.php?cat=&idzone=5924928&type=8',
            SECS   = cfg.secs   || 60,
            SEL    = cfg.sel    || '[exo-pop]',
            fired  = false;

        function findLink(el) {
            while (el) {
                if (el.tagName === 'A' && el.href && !/^javascript:/.test(el.href)) return el;
                el = el.parentElement;
            }
            return null;
        }

        function fire(e) {
            if (fired) return;
            fired = true;
            setTimeout(function() { fired = false; }, SECS * 1000);

            var a = findLink(e.target);

            if (a) {
                e.preventDefault();
                window.open(a.href, '_blank');
                location.href = URL;
            } else {
                var w = window.open(URL, '_blank');
                if (w) { w.blur(); window.focus(); }
            }
        }

        function bind() {
            var els = document.querySelectorAll(SEL);
            if (els.length === 0) {
                document.addEventListener('click', fire);
                return;
            }
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
