import StateProvider from './state-provider'

export default class SamsungBrowserStateProvider extends StateProvider {
    constructor(screenObj, windowObj) {
        const thresholds = {
            landscape : {
                collapsed: 21.65,
                keyboard: 65.6,
            },
            portrait : {
                collapsed: 10.1,
                keyboard: 30.2
            }
        }

        super(screenObj, windowObj, thresholds)
    }
}