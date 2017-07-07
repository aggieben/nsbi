import * as _ from 'lodash'
import * as verge from 'verge'
import * as Nav from './nav'
import * as Util from './util'

export namespace Init {
    export function index() {
        Nav.attachNavbarScrollWatcher()
        // TODO: would love to achieve the ease-in effect when featured article summaries become visible on scrolling
    }
}