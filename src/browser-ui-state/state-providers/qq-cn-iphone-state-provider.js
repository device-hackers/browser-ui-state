import KeyboardNoResizeStateProvider from './keyboard-no-resize-state-provider'

export default class QqCnIphoneStateProvider extends KeyboardNoResizeStateProvider {
    constructor(win, initialOrientation) {
        let thresholds = {
            landscape : {
                collapsed: 8.45,
                keyboard: 29.1,
            },
            portrait : {
                collapsed: 17.45,
                keyboard: 31.3
            }
        }

        if (isIphone4()) {
            thresholds = {
                landscape : {
                    collapsed: 9.65,
                    keyboard: 29.3,
                },
                portrait : {
                    collapsed: 23,
                    keyboard: 34.7
                }
            }
        }

        function isIphone4() {
            return win.screen.height === 480
        }

        super(win, thresholds, initialOrientation)
        this._device = `isIphone4=${isIphone4()}`
    }
}