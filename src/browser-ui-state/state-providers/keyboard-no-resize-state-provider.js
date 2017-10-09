import StateProvider from './state-provider'
import States from './states'

export default class KeyboardNoResizeStateProvider extends StateProvider {
    constructor(win, thresholds) {
        super(win, thresholds)
    }

    get state() {
        if (this._deviceOrientationDetector._keyboardNoResizeDetector.keyboardShown) {
            return States.KEYBOARD_NO_RESIZE //TODO maybe add handling to resize happens when keyboardShown to catch it disappearing?
        } else {
            return super.state
        }
    }
}