import KeyboardNoResizeStateProvider from './keyboard-no-resize-state-provider'

/**
 * The fact this class extends KeyboardNoResizeStateProvider is not 100% accurate due to:
 * - UC EN regular mode : keyboard resizes viewport
 * - UC EN fullscreen   : no resize
 * - UC CN regular mode : keyboard resizes viewport
 * - UC CN fullscreen   : keyboard resizes viewport
 */
export default class UcbrowserIosStateProvider extends KeyboardNoResizeStateProvider {
    constructor(win, initialOrientation) {
        let thresholds = {
            landscape : {
                collapsed: 37.05,
                keyboard: 60.6,
            },
            portrait : {
                collapsed: 15.45,
                keyboard: 29.1
            }
        }

        if (isIphone4WithUcCN()) {
            thresholds = {
                landscape : {
                    collapsed: 42.35,
                    keyboard: 60.7,
                },
                portrait : {
                    collapsed: 20,
                    keyboard: 32.7
                }
            }
        }

        function isIphone4WithUcCN() {
            return /\WiPhone\W.*\Wzh-CN\W.*\WUCBrowser\W/i.test(win.navigator.userAgent) &&
                win.screen.height === 480
        }

        super(win, thresholds, initialOrientation)
        this._device = `isIphone4WithUcCN=${isIphone4WithUcCN()}`
    }
}