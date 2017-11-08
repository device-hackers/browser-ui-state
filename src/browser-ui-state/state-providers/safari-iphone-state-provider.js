import KeyboardNoResizeStateProvider from './keyboard-no-resize-state-provider'
import States from './states'
import DeviceDetector from '../device-detectors/device-detector'
import {Orientation} from '../device-detectors/device-orientation-detector'

export default class SafariIphoneStateProvider extends KeyboardNoResizeStateProvider {
    constructor(win, initialOrientation) {
        const thresholds = {
            landscape : {
                collapsed: 5.9,
                keyboard: 48.0,
            },
            portrait : {
                collapsed: 11.45,
                keyboard: 32.7
            }
        }

        super(win, thresholds, initialOrientation)
    }

    get state() {
        if (this._win.navigator.standalone) {
            return States.SAFARI_HOMESCREEN
        } else if (DeviceDetector.isIphoneX(this._win.navigator.userAgent, this._win.screen.height)) {
            return this.stateForIphoneX
        } else {
            return super.state
        }
    }

    get stateForIphoneX() {
        let orientation = this._deviceOrientationDetector.orientation
        let deviation = this.deviation

        if (this._deviceOrientationDetector._keyboardNoResizeDetector.keyboardShown) {
            return States.KEYBOARD_NO_RESIZE
        } else if (orientation === Orientation.LANDSCAPE &&
            (this.isCloseToNumber(deviation, 2.9) || this.isCloseToNumber(deviation, 15.4))) {
            return States.COLLAPSED
        } else if (orientation === Orientation.PORTRAIT && this.isCloseToNumber(deviation, 21.2)) {
            return States.COLLAPSED
        } else {
            return States.EXPANDED
        }
    }

    /**
     * @param inputNumber
     * @param targetNumber
     * @returns {boolean} true if inputNumber is within below threshold (1.5, adjust if needed) near targetNumber
     */
    isCloseToNumber(inputNumber, targetNumber) {
        return inputNumber === targetNumber ||
            (inputNumber - 1.5 < targetNumber && inputNumber + 1.5 > targetNumber)
    }
}