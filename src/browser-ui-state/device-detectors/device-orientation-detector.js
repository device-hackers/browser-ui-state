import KeyboardNoResizeDetector from './keyboard-no-resize-detector'

export const Orientation = {
    LANDSCAPE: 'LANDSCAPE',
    PORTRAIT:  'PORTRAIT'
}

export default class DeviceOrientationDetector {
    constructor(win) {
        this._win = win
        this._keyboardNoResizeDetector = new KeyboardNoResizeDetector(win)
        this._tooSquareViewportThreshold = 1.55;


        //TODO track initial orientation via width/height and then add orientation change handler and just toggle changes

        this._initialOrientation = this._win.innerWidth > this._win.innerHeight ?
            Orientation.LANDSCAPE : Orientation.PORTRAIT
        this._previousOrientation = this._initialOrientation

        //console.log(this._initialOrientation)

        this._toggleOrientation = () => {
            this._previousOrientation = this._previousOrientation === Orientation.LANDSCAPE ?
                Orientation.PORTRAIT : Orientation.LANDSCAPE
        }

        const orientationChangeHandler = () => {
            this._toggleOrientation()
            alert(this._previousOrientation)
        }

        this._win.addEventListener('orientationchange', orientationChangeHandler)
    }

    get orientation() {
        const orientationType = this._win.screen.orientation ? this._win.screen.orientation.type : null

        if (orientationType) {
            return this._getOrientationModern(orientationType)
        } else {
            return this._previousOrientation
            //return this._getOrientationLegacy(this._win.innerWidth, this._win.innerHeight, this._keyboardNoResizeDetector.keyboardShown)
        }
    }

    _getOrientationModern(orientationType) {
        if (orientationType.indexOf(Orientation.LANDSCAPE.toLowerCase()) !== -1) {
            return Orientation.LANDSCAPE
        } else {
            return Orientation.PORTRAIT
        }
    }

    /**
     * TODO add resize handling as must, because Pixel QQ EN in ladscape after showing and hiding keyboard with OS nav bar - reports portrait
     */
    _getOrientationLegacy(width, height, keyboardShown) {
        if (width > height && !keyboardShown) {
            return Orientation.LANDSCAPE
        } else if (width <= height && !keyboardShown) {
            return Orientation.PORTRAIT
        } else if (width > height && keyboardShown && this._isViewportTooSquare(width, height)) {
            return Orientation.PORTRAIT
        } else {
            return Orientation.LANDSCAPE
        }
    }

    _isViewportTooSquare(width, height) {
        let viewportAspectRatio = Math.max(width, height) / Math.min(width, height)
        return viewportAspectRatio <= this._tooSquareViewportThreshold
    }
}