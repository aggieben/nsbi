namespace Nav {
    export function toggleMenu() {
        let toggle = document.querySelector('.nav-toggle')
        let menu = document.querySelector('.nav-menu')

        if (toggle.classList.contains('is-active'))
        {
            toggle.classList.remove('is-active')
            menu.classList.remove('is-active')
        }
        else
        {
            toggle.classList.add('is-active')
            menu.classList.add('is-active')
        }
    }
}

document.querySelector('.nav-toggle').addEventListener('click', Nav.toggleMenu)