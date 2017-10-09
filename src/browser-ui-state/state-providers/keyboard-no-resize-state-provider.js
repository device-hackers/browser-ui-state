import StateProvider from './state-provider'
import States from './states'
import KeyboardNoResizeDetector from '../device-detectors/keyboard-no-resize-detector'

export default class KeyboardNoResizeStateProvider extends StateProvider {
    constructor(win, thresholds) {
        super(win, thresholds)
        this._keyboardNoResizeDetector = new KeyboardNoResizeDetector(win)
    }

    get state() {
        if (this._keyboardNoResizeDetector.keyboardShown) {
            return States.KEYBOARD_NO_RESIZE
        } else {
            return super.state
        }
    }
}