import fscreen from 'fscreen'
import StateProvider from './state-provider'
import States from './states'

export default class DesktopStateProvider extends StateProvider {
    constructor(win, initialOrientation) {
        const thresholds = {
            landscape : {
                collapsed: null,
                keyboard: null,
            },
            portrait : {
                collapsed: null,
                keyboard: null
            }
        }
        super(win, thresholds, initialOrientation)
    }

    get state() {
        if (fscreen.fullscreenElement) {
            return States.DESKTOP_HTML5_FULLSCREEN
        } else {
            return States.DESKTOP
        }
    }
}