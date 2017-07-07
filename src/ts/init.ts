import * as Nav from './nav'

export namespace Init {
    export function index() {
        Nav.attachNavbarScrollWatcher()
        // TODO: would love to achieve the ease-in effect when featured article summaries become visible on scrolling
    }
}