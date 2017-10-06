import StateProvider from './state-provider'
import States from './states'

export default class SafariIpadStateProvider extends StateProvider {
    constructor(win) {
        const thresholds = {
            landscape : {
                collapsed: 6.4,
                keyboard: 19.0,
            },
            portrait : {
                collapsed: 4.15,
                keyboard: 16.0
            }
        }

        super(win, thresholds)
    }

    get state() {
        if (this._win.navigator.standalone) {
            return States.SAFARI_HOMESCREEN
        } else {
            return super.state
        }
    }
}