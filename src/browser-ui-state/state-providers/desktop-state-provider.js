import fscreen from 'fscreen'
import StateProvider from './state-provider'
import States from './states'

export default class DesktopStateProvider extends StateProvider {
    constructor(userAgentObj, screenObj, windowObj) {
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
        super(screenObj, windowObj, thresholds)
    }

    get state() {
        if (fscreen.fullscreenElement) {
            return States.DESKTOP_HTML5_FULLSCREEN
        } else {
            return States.DESKTOP_EXPANDED
        }
    }
}