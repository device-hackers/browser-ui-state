import fscreen from 'fscreen'
import StateProvider from './state-provider'
import States from './states'

export default class StaticStateProvider extends StateProvider {
    constructor(win) {
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
        super(win, thresholds)
    }

    get state() {
        if (fscreen.fullscreenElement) {
            return States.HTML5_FULLSCREEN
        } else {
            return States.STATIC
        }
    }
}