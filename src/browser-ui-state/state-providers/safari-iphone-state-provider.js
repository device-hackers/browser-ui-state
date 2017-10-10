import KeyboardNoResizeStateProvider from './keyboard-no-resize-state-provider'
import States from './states'

export default class SafariIphoneStateProvider extends KeyboardNoResizeStateProvider {
    constructor(win, initialOrientation) {
        const thresholds = {
            landscape : {
                collapsed: 5.9,
                keyboard: 48.0,
            },
            portrait : {
                collapsed: 11.45,
                keyboard: 32.7
            }
        }

        super(win, thresholds, initialOrientation)
    }

    get state() {
        if (this._win.navigator.standalone) {
            return States.SAFARI_HOMESCREEN
        } else {
            return super.state
        }
    }
}