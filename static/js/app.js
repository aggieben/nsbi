var Util;
(function (Util) {
    var Classes;
    (function (Classes) {
        Classes["hidden"] = "hidden";
    })(Classes = Util.Classes || (Util.Classes = {}));
})(Util || (Util = {}));
var Nav;
(function (Nav) {
    function attachNavbarScrollWatcher(threshold) {
        if (threshold === void 0) { threshold = 100; }
        var navBar = document.querySelector('header');
        document.addEventListener('scroll', function (event) {
            var top = window.pageYOffset || document.documentElement.scrollTop;
            if ((top > threshold && navBar.classList.contains(Util.Classes.hidden)) || (top < threshold && !navBar.classList.contains(Util.Classes.hidden))) {
                navBar.classList.toggle(Util.Classes.hidden);
            }
        });
    }
    Nav.attachNavbarScrollWatcher = attachNavbarScrollWatcher;
})(Nav || (Nav = {}));
Nav.attachNavbarScrollWatcher();
