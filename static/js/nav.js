var Nav;
(function (Nav) {
    function toggleMenu() {
        var toggle = document.querySelector('.nav-toggle');
        var menu = document.querySelector('.nav-menu');
        if (toggle.classList.contains('is-active')) {
            toggle.classList.remove('is-active');
            menu.classList.remove('is-active');
        }
        else {
            toggle.classList.add('is-active');
            menu.classList.add('is-active');
        }
    }
    Nav.toggleMenu = toggleMenu;
})(Nav || (Nav = {}));
document.querySelector('.nav-toggle').addEventListener('click', Nav.toggleMenu);
