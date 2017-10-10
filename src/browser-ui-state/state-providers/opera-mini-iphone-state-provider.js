import StateProvider from './state-provider'

export default class OperaMiniIphoneStateProvider extends StateProvider {
    constructor(win, initialOrientation) {
        const thresholds = {
            landscape : {
                collapsed: 10.7,
                keyboard: 44.3,
            },
            portrait : {
                collapsed: 14.6,
                keyboard: 26.3
            }
        }

        super(win, thresholds, initialOrientation)
    }
}