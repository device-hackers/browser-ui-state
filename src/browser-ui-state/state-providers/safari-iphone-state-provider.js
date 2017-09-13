import StateProvider from './state-provider'

export default class SafariIphoneStateProvider extends StateProvider {
    constructor(userAgentObj, screenObj, windowObj) {
        const thresholds = {
            landscape : {
                collapsed: 6.75,
                keyboard: 47.6,
            },
            portrait : {
                collapsed: 11.8,
                keyboard: 29.1
            }
        }

        super(screenObj, windowObj, thresholds)
    }
}