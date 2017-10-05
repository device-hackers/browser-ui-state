import StateProvider from './state-provider'
import States from "./states";

export default class SafariIphoneStateProvider extends StateProvider {
    constructor(win) {
        const thresholds = {
            landscape : {
                collapsed: 6.75,
                keyboard: 48.0,
            },
            portrait : {
                collapsed: 12.0,
                keyboard: 32.7
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