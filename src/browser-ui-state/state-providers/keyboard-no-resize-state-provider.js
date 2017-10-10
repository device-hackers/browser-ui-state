import StateProvider from './state-provider'
import States from './states'

export default class KeyboardNoResizeStateProvider extends StateProvider {
    constructor(win, thresholds, initialOrientation) {
        super(win, thresholds, initialOrientation)
    }

    get state() {
        if (this._deviceOrientationDetector._keyboardNoResizeDetector.keyboardShown) {
            return States.KEYBOARD_NO_RESIZE
        } else {
            return super.state
        }
    }
}