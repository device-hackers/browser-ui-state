import StateProvider from './state-provider'

export default class UCBrowserENiOSStateProvider extends StateProvider {
    constructor(userAgentObj, screenObj, windowObj) {
        let thresholds = {
            landscape : {
                collapsed: 32.3,
                keyboard: 60.6,
            },
            portrait : {
                collapsed: 13.75,
                keyboard: 29.1
            }
        }


        super(screenObj, windowObj, thresholds)
    }
}