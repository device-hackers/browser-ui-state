import fscreen from 'fscreen'
import StateProvider from './state-provider'
import States from './states'

export default class UnknownStateProvider extends StateProvider {
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
            return States.HTML5_FULLSCREEN
        } else {
            return States.UNKNOWN
        }
    }
}