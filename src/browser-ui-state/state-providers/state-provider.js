import fscreen from 'fscreen'
import States from './states'
import DeviceOrientationDetector, {Orientation} from '../device-detectors/device-orientation-detector'

export default class StateProvider {
    constructor(win, thresholds) {
        this._win = win
        this._thresholds = thresholds
        this._deviceOrientationDetector = new DeviceOrientationDetector(win)
    }

    get orientation() {
        return this._deviceOrientationDetector.orientation
    }

    get screenAspectRatio() {
        let {width : screenWidth, height : screenHeight} = this._win.screen
        const screenWiderSize = Math.max(screenWidth, screenHeight)
        const screenNarrowerSize = Math.min(screenWidth, screenHeight)

        return screenWiderSize / screenNarrowerSize
    }

    get viewportAspectRatio() {
        const currentOrientation = this._deviceOrientationDetector.orientation
        let {innerWidth : viewportWidth, innerHeight : viewportHeight} = this._win
        const viewportWiderSize = currentOrientation === Orientation.LANDSCAPE ? this.viewportWidthAdjustedIfNeeded : viewportHeight
        const viewportNarrowerSize = currentOrientation === Orientation.PORTRAIT ? viewportWidth : viewportHeight

        return viewportWiderSize / viewportNarrowerSize
    }

    get delta() {
        const viewportToScreenDelta = Math.abs(this.screenAspectRatio - this.viewportAspectRatio)
        return viewportToScreenDelta
    }

    get deviation() {
        const viewportToScreenDeviation = (this.delta / this.screenAspectRatio) * 100
        return viewportToScreenDeviation
    }

    get collapsedThreshold() {
        return this._thresholds[this._deviceOrientationDetector.orientation.toLowerCase()].collapsed
    }

    get keyboardThreshold() {
        return this._thresholds[this._deviceOrientationDetector.orientation.toLowerCase()].keyboard
    }

    get state() {
        const deviation = this.deviation

        let state = States.EXPANDED

        if (fscreen.fullscreenElement) {
            state = States.HTML5_FULLSCREEN //Case with keyboard in HTML5 fullscreen mode can't be traced correctly
        } else if (deviation > this.keyboardThreshold) {
            state = States.KEYBOARD
        } else if (deviation > this.collapsedThreshold) {
            state = States.COLLAPSED
        }

        return state
    }

    /*
     * Thanx Apple and it's iPhone X for this...
     * This is to workaround "safe zones" mode: http://stephenradford.me/removing-the-white-bars-in-safari-on-iphone-x/
     * Basically to substitute window.innerWidth (which is narrow due to "safe zones") with screen.height (which is
     * always the largest side of the screen).
     * Relevant only for landscape
     */
    get viewportWidthAdjustedIfNeeded() {
        return this.isIphoneX() ? this._win.screen.height : this._win.innerWidth
    }

    isIphoneX() {
        return /\WiPhone\W/i.test(this._win.navigator.userAgent) && this._win.screen.height === 812
    }
}