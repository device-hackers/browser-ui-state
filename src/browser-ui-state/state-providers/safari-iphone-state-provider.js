import StateProvider from './state-provider'

export default class SafariIphoneStateProvider extends StateProvider {
    constructor(userAgentObj, screenObj, windowObj) {
        const thresholds = {
            landscape : {
                collapsed: 6.75,
                keyboard: 48.0,
            },
            portrait : {
                collapsed: 12.5,
                keyboard: 32.7
            }
        }

        super(screenObj, windowObj, thresholds)
    }
}