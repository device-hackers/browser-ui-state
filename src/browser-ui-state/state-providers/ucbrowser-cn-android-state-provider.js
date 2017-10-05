import StateProvider from './state-provider'

export default class UCBrowserCNAndroidStateProvider extends StateProvider {
    constructor(win) {
        let thresholds = {
            landscape : {
                collapsed: 30.0,
                keyboard: 51.6,
            },
            portrait : {
                collapsed: 13.0,
                keyboard: 26.9
            }
        }

        super(win, thresholds)
    }
}