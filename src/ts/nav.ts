namespace Nav {
    export function attachNavbarScrollWatcher(threshold = 100) {
        let navBar = document.querySelector('header')
        document.addEventListener('scroll', (event) => {   
            let top = window.pageYOffset || document.documentElement.scrollTop
            
            if ((top > threshold && navBar.classList.contains(Util.Classes.hidden)) || (top < threshold && !navBar.classList.contains(Util.Classes.hidden))) {
                navBar.classList.toggle(Util.Classes.hidden)
            }
        })
    }
}