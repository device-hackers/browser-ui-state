import fscreen from 'fscreen'
import States from './states'
import DeviceOrientationDetector, {Orientation} from '../device-detectors/device-orientation-detector'

export default class StateProvider {
    constructor(screenObj, windowObj, thresholds, userAgentObj) {
        this._screenObj = screenObj
        this._windowObj = windowObj
        this._thresholds = thresholds
        this._userAgentObj = userAgentObj
        this._deviceOrientationDetector = new DeviceOrientationDetector(screenObj, windowObj)
        this._keyBoardShown = null
        this._handleKeyboard()
    }

    get orientation() {
        return this._deviceOrientationDetector.orientation
    }

    get screenAspectRatio() {
        let {width : screenWidth, height : screenHeight} = this._screenObj
        const screenWiderSize = Math.max(screenWidth, screenHeight)
        const screenNarrowerSize = Math.min(screenWidth, screenHeight)

        return screenWiderSize / screenNarrowerSize
    }

    get viewportAspectRatio() {
        const currentOrientation = this._deviceOrientationDetector.orientation
        let {innerWidth : viewportWidth, innerHeight : viewportHeight} = this._windowObj
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
            state = States.HTML5_FULLSCREEN
        } else if (deviation > this.keyboardThreshold) {
            state = States.UNKNOWN
        } else if (deviation > this.collapsedThreshold) {
            state = States.COLLAPSED
        }

        if (this._keyBoardShown) {
            state = States.KEYBOARD
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
        return this.isIphoneX() ? this._screenObj.height : this._windowObj.innerWidth
    }

    isIphoneX() {
        return /iPhone/i.test(this._userAgentObj) && this._screenObj.height === 812
    }

    // ToDo add input focus handling for iOS 10+ WARNING - doesn't work well in Android due to possibility to hide keyboard via button on navigatio bar which leads to no focusout events at all!
    _handleKeyboard() {
        document.documentElement.addEventListener('focus', getKeyboardShownHandler(true).bind(this), true);
        document.documentElement.addEventListener('blur', getKeyboardShownHandler(false).bind(this), true);
        document.documentElement.addEventListener('focusout', getKeyboardShownHandler(false).bind(this), true);

        function getKeyboardShownHandler(shown) {
            return function (e) {
                if (isEditableInput(e.target) && !isEditableInput(e.relatedTarget)) {
                    this._keyBoardShown = shown
                    window.dispatchEvent(new Event('resize'));
                }
            }
        }

        function isEditableInput(element) {
            if (!element) {
                return false;
            }

            let type = element.getAttribute('type');
            let ignoredTypes = ['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'reset', 'submit'];
            let tagName = element.tagName.toLowerCase();

            return (tagName === 'textarea' || tagName === "select" ||
                (tagName === 'input' && ignoredTypes.indexOf(type) === -1));
        }
    }
}