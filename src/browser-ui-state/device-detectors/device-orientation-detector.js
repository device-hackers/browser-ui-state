import KeyboardNoResizeDetector from './keyboard-no-resize-detector'
import DeviceDetector from './device-detector'
import UserAgentDetector, {UserAgents} from './user-agent-detector'

export const Orientation = {
    LANDSCAPE: 'LANDSCAPE',
    PORTRAIT:  'PORTRAIT'
}

const splitModeThreshold = 350

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
        if (DeviceDetector.isIos(this._win.navigator.userAgent)) {
            return Math.abs(this._win.orientation) === 90 ? Orientation.LANDSCAPE : Orientation.PORTRAIT
        } else if (this._initialOrientation) {
            return this._currentOrientation
        } else {
            return width > height ? Orientation.LANDSCAPE : Orientation.PORTRAIT
        }
    }

    _isSplitMode() {
        let userAgent = this._win.navigator.userAgent
        if (new UserAgentDetector(userAgent).userAgent === UserAgents.ANDROID_STOCK) return false

        let screenW = this._win.screen.width, screenH = this._win.screen.height
        let windowW = this._win.innerWidth, windowH = this._win.innerHeight

        if (DeviceDetector.isIpad(userAgent)) {
            if (this.orientation === Orientation.LANDSCAPE) {
                return Math.max(screenW, screenH) - windowW > splitModeThreshold
            } else {
                return Math.min(screenW, screenH) - windowW > splitModeThreshold
            }
        } else {
            if (this.orientation === Orientation.LANDSCAPE) {
                return Math.max(screenW, screenH) - windowW > splitModeThreshold
            } else if (!this._keyboardNoResizeDetector.keyboardShown) {
                return Math.max(screenW, screenH) - windowH > splitModeThreshold
            } else {
                return false
            }
        }
    }
}