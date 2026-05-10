var today = new Date();
var y = today.getFullYear();
var m = (today.getMonth() + 1).toString().padStart(2, '0');
var d = today.getDate().toString().padStart(2, '0');
var dateParam = y + m + d;

(function () {
    try {
        if (!window.AdProvider) {
            window.AdProvider = [];
        }
        var adConfigs = [
            { className: "eas6a97888e2", zoneid: "5910938" },
            { className: "eas6a97888e2", zoneid: "5911752" },
            { className: "eas6a97888e2", zoneid: "5910936" },
            { className: "eas6a97888e10", zoneid: "5909834" },
            { className: "eas6a97888e10", zoneid: "5909830" },
            { className: "eas6a97888e38", zoneid: "5921986" }, 
            { className: "eas6a97888e20", zoneid: "5921988" }, 
            { className: "eas6a97888e10", zoneid: "5923402" }, 
            { className: "eas6a97888e2", zoneid: "5923412" }, 
            { className: "eas6a97888e2", zoneid: "5923412" }, 
            { className: "eas6a97888e2", zoneid: "5923414" }, 
            { className: "eas6a97888e2", zoneid: "5923416" }, 

        ];
        var hiddenContainer = document.createElement("div");
        hiddenContainer.style.display = "none"; 
        function insertMultipleAds() {
            if (document.body) {
                document.body.appendChild(hiddenContainer);
                adConfigs.forEach(function(config) {
                    var ins = document.createElement("ins");
                    ins.className = config.className;
                    ins.setAttribute("data-zoneid", config.zoneid);
                    hiddenContainer.appendChild(ins);
                });
            } else {
                document.addEventListener("DOMContentLoaded", function() {
                    document.body.appendChild(hiddenContainer);
                    adConfigs.forEach(function(config) {
                        var ins = document.createElement("ins");
                        ins.className = config.className;
                        ins.setAttribute("data-zoneid", config.zoneid);
                        hiddenContainer.appendChild(ins);
                    });
                });
            }
        }
        insertMultipleAds();
        var magScript = document.createElement("script");
        magScript.async = true;
        magScript.src = "https://cdn.jsdmirror.com/gh/xxloli/ads/exo/1.js?" + dateParam; 
        magScript.onload = function () {
            try {
                (window.AdProvider = window.AdProvider || []).push({ "serve": {} });
            } catch (e) {
            }
        };
        magScript.onerror = function () {
        };
        var firstScript = document.getElementsByTagName("script")[0];
        firstScript.parentNode.insertBefore(magScript, firstScript);
    } catch (e) {
    }
})();

(function() {
    var adScript = document.createElement("script");
    adScript.async = true;
    adScript.src = "https://cdn.jsdmirror.com/gh/xxloli/ads/54/1.js?" + dateParam; 
    var adContainer = document.createElement("div");
    adContainer.style.display = "none";
    adContainer.innerHTML = '<ins class="5a165732" data-key="05257ceaf4c2ac5ae71dbc805cdbe7a5"></ins>' +
                            '<ins class="5a165732" data-key="80e98bca8418c00afacdbc93fda6eb0c"></ins>' +
                            '<ins class="5a165732" data-key="05257ceaf4c2ac5ae71dbc805cdbe7a5"></ins>' +
                            '<ins class="5a165732" data-key="80e98bca8418c00afacdbc93fda6eb0c"></ins>';
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
        var c = "https://cdn.jsdmirror.com/gh/xxloli/ads/51/1.js?" + dateParam;
        function deleteCurrentDomainLACookies() {
            var cookies = document.cookie.split("; ");
            for (var j = 0; j < cookies.length; j++) {
                var cookie = cookies[j];
                var cookieName = cookie.split("=")[0];
                if (cookieName.indexOf("_la_") === 0) {
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
}({ id: "Jfpcnt0H2uEfXtSf", ck: "Jfpcnt0H2uEfXtSf" });

var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?b289e3414e1a95f58db4b2b2fc007357";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

