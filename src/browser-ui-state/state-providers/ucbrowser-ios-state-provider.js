import KeyboardNoResizeStateProvider from './keyboard-no-resize-state-provider'
import DeviceDetector from '../device-detectors/device-detector'

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

        if (DeviceDetector.isIphone4WithUcCn()) {
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

        super(win, thresholds, initialOrientation)
        this._device = `isIphone4WithUcCN=${DeviceDetector.isIphone4WithUcCn()}`
    }
}