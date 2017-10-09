import KeyboardNoResizeDetector from './keyboard-no-resize-detector'

export const Orientation = {
    LANDSCAPE: 'LANDSCAPE',
    PORTRAIT:  'PORTRAIT'
}

export default class DeviceOrientationDetector {
    constructor(win) {
        this._win = win
        this._keyboardNoResizeDetector = new KeyboardNoResizeDetector(win)
    }

    get orientation() {
        const orientationType = this._win.screen.orientation ? this._win.screen.orientation.type : null
        if (orientationType) {
            if (orientationType.indexOf(Orientation.LANDSCAPE.toLowerCase()) !== -1) {
                return Orientation.LANDSCAPE
            } else {
                return Orientation.PORTRAIT
            }
        } else {
            let winAspectRatio = Math.max(this._win.innerWidth, this._win.innerHeight) / Math.min(this._win.innerWidth, this._win.innerHeight)

            if (this._win.innerWidth > this._win.innerHeight && !this._keyboardNoResizeDetector.keyboardShown) {
                return Orientation.LANDSCAPE
            } else if (this._win.innerWidth <= this._win.innerHeight && !this._keyboardNoResizeDetector.keyboardShown) {
                return Orientation.PORTRAIT
            } else if (this._win.innerWidth > this._win.innerHeight && this._keyboardNoResizeDetector.keyboardShown && winAspectRatio <= 2.4) {
                return Orientation.PORTRAIT
            } else {
                return Orientation.LANDSCAPE
            }
        }
    }
}