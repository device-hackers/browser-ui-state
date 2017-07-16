import StateProvider from './state-provider'

export default class ChromeiOSStateProvider extends StateProvider {
    constructor(screenObj, windowObj) {
        const thresholds = {
            landscape : {
                collapsed: 9.5,
                keyboard: 40.9,
            },
            portrait : {
                collapsed: 6.1,
                keyboard: 23.5
            }
        }

        super(screenObj, windowObj, thresholds)
    }
}