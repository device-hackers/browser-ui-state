import StateProvider from './state-provider'

export default class UCBrowserENiOSStateProvider extends StateProvider {
    constructor(userAgentObj, screenObj, windowObj) {
        let thresholds = {
            landscape : {
                collapsed: 30.3,
                keyboard: 50.4,
            },
            portrait : {
                collapsed: 12.95,
                keyboard: 26.3
            }
        }


        super(screenObj, windowObj, thresholds)
    }
}