import fscreen from 'fscreen'
import States from './states'
import DeviceOrientationDetector, {Orientation} from '../device-detectors/device-orientation-detector'
import DeviceDetector from '../device-detectors/device-detector'

export default class StateProvider {
    constructor(win, thresholds, initialOrientation) {
        this._win = win
        this._thresholds = thresholds
        this._deviceOrientationDetector = new DeviceOrientationDetector(win, initialOrientation)
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
        const viewportWiderSize = currentOrientation === Orientation.LANDSCAPE ? viewportWidth : viewportHeight
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
        const isSplitMode = this._deviceOrientationDetector._isSplitMode()

        let state = States.EXPANDED

        if (fscreen.fullscreenElement && isSplitMode) {
            state = States.HTML5_FULLSCREEN_IN_SPLIT_MODE //Case with keyboard in HTML5 fullscreen mode can't be traced correctly
        } else if (isSplitMode) {
            state = States.SPLIT_MODE
        } else if (fscreen.fullscreenElement) {
            state = States.HTML5_FULLSCREEN
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
    get _viewportWidthAdjustedIfNeeded() {
        return DeviceDetector.isIphoneX(this._win.navigator.userAgent, this._win.screen.height) ?
            this._win.screen.height : this._win.innerWidth
    }
}