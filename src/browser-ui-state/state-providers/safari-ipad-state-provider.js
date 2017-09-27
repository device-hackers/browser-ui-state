import StateProvider from './state-provider'

export default class SafariIpadStateProvider extends StateProvider {
    constructor(userAgentObj, screenObj, windowObj) {
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

        super(screenObj, windowObj, thresholds)
    }

    get state() {
        if (this._windowObj.navigator.standalone) {
            return States.SAFARI_HOMESCREEN
        } else {
            return super.state
        }
    }
}