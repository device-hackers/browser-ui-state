import KeyboardNoResizeDetector from './keyboard-no-resize-detector'

export const Orientation = {
    LANDSCAPE: 'LANDSCAPE',
    PORTRAIT:  'PORTRAIT'
}

export default class DeviceOrientationDetector {
    constructor(win, initialOrientation) {
        this._win = win
        this._keyboardNoResizeDetector = new KeyboardNoResizeDetector(win)

        this._initialOrientation = this._currentOrientation = initialOrientation

        if (initialOrientation) {
            this._win.addEventListener('orientationchange', () => this._toggleCurrentOrientation())
        }

        this._toggleCurrentOrientation = () => {
            this._currentOrientation = this._currentOrientation === Orientation.LANDSCAPE ?
                Orientation.PORTRAIT : Orientation.LANDSCAPE
        }
    }

    get orientation() {
        const orientationType = this._win.screen.orientation ? this._win.screen.orientation.type : null

        if (orientationType) {
            return this._getOrientationModern(orientationType)
        } else {
            return this._getOrientationLegacy(this._win.innerWidth, this._win.innerHeight)
        }
    }

    _getOrientationModern(orientationType) {
        if (orientationType.indexOf(Orientation.LANDSCAPE.toLowerCase()) !== -1) {
            return Orientation.LANDSCAPE
        } else {
            return Orientation.PORTRAIT
        }
    }

    _getOrientationLegacy(width, height) {
        if (this._initialOrientation) {
            return this._currentOrientation
        } else {
            return width > height ? Orientation.LANDSCAPE : Orientation.PORTRAIT
        }
    }
}