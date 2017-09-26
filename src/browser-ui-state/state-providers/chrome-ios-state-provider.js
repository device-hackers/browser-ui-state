import StateProvider from './state-provider'

export default class ChromeiOSStateProvider extends StateProvider {
    constructor(userAgentObj, screenObj, windowObj) {
        const thresholds = {
            landscape : {
                collapsed: 9.75,
                keyboard: 41.3,
            },
            portrait : {
                collapsed: 6.15,
                keyboard: 26.0
            }
        }

        super(screenObj, windowObj, thresholds)
    }
}