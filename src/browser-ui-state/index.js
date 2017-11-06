import fscreen from 'fscreen'
import UserAgentDetector, {UserAgents} from './device-detectors/user-agent-detector'
import UcbrowserEnAndroidStateProvider from './state-providers/ucbrowser-en-android-state-provider'
import ChromeAndroidStateProvider from './state-providers/chrome-android-state-provider'
import ChromeIosStateProvider from './state-providers/chrome-ios-state-provider'
import SafariIphoneStateProvider from './state-providers/safari-iphone-state-provider'
import SafariIpadStateProvider from './state-providers/safari-ipad-state-provider'
import SamsungBrowserStateProvider from './state-providers/samsung-browser-state-provider'
import DesktopStateProvider from './state-providers/desktop-state-provider'
import UnknownStateProvider from './state-providers/unknown-state-provider'
import UcbrowserCnAndroidStateProvider from './state-providers/ucbrowser-cn-android-state-provider'
import UcbrowserIosStateProvider from './state-providers/ucbrowser-ios-state-provider'
import StaticStateProvider from './state-providers/static-state-provider'
import OperaMiniIphoneStateProvider from './state-providers/opera-mini-iphone-state-provider'
import QqCnIphoneStateProvider from './state-providers/qq-cn-iphone-state-provider'
import DeviceDetector from './device-detectors/device-detector'
import AndroidStockStateProvider from './state-providers/android-stock-state-provider'

//TODO hide internals in private scope using WeakMaps and expose just strings for debug widgets
class BrowserUiState {
    constructor(initialOrientation = null, win = window) {
        this._userAgentDetector = new UserAgentDetector(win.navigator.userAgent)

        switch (this._userAgentDetector.userAgent) {
            case UserAgents.CHROME_ANDROID :
                this._provider = new ChromeAndroidStateProvider(win, initialOrientation); break
            case UserAgents.CHROME_IOS :
                this._provider = new ChromeIosStateProvider(win, initialOrientation); break
            case UserAgents.SAFARI_IPHONE :
                this._provider = new SafariIphoneStateProvider(win, initialOrientation); break
            case UserAgents.SAFARI_IPAD :
                this._provider = new SafariIpadStateProvider(win, initialOrientation); break
            case UserAgents.SAMSUNG_BROWSER :
                this._provider = new SamsungBrowserStateProvider(win, initialOrientation); break
            case UserAgents.UC_BROWSER_EN_ANDROID :
                this._provider = new UcbrowserEnAndroidStateProvider(win, initialOrientation); break
            case UserAgents.UC_BROWSER_CN_ANDROID :
                this._provider = new UcbrowserCnAndroidStateProvider(win, initialOrientation); break
            case UserAgents.UC_BROWSER_IOS :
                this._provider = new UcbrowserIosStateProvider(win, initialOrientation); break
            case UserAgents.OPERA_MINI_IPHONE :
                this._provider = new OperaMiniIphoneStateProvider(win, initialOrientation); break
            case UserAgents.QQ_CN_IPHONE :
                this._provider = new QqCnIphoneStateProvider(win, initialOrientation); break
            case UserAgents.ANDROID_STOCK :
                this._provider = new AndroidStockStateProvider(win, initialOrientation); break
            case UserAgents.DU_BROWSER :
            case UserAgents.UC_BROWSER_EN_IOS_STATIC :
            case UserAgents.OPERA_MINI_IPHONE_STATIC :
            case UserAgents.OPERA_MINI_IPAD :
                this._provider = new StaticStateProvider(win, initialOrientation); break
            case UserAgents.DESKTOP :
                this._provider = new DesktopStateProvider(win, initialOrientation); break
            default :
                this._provider = new UnknownStateProvider(win, initialOrientation)
        }

        //Thanx Opera Mini iOS for this :( It has completely the same user-agent as Safari on homescreen/standalone
        if (win.navigator.standalone && DeviceDetector.isIphone(win.navigator.userAgent)) {
            this._provider = new SafariIphoneStateProvider(win, initialOrientation)
        } else if (win.navigator.standalone && DeviceDetector.isIpad(win.navigator.userAgent)) {
            this._provider = new SafariIpadStateProvider(win, initialOrientation)
        }
    }

    get orientation() {
        return this._provider.orientation
    }

    get screenAspectRatio() {
        return this._provider.screenAspectRatio
    }

    get viewportAspectRatio() {
        return this._provider.viewportAspectRatio
    }

    get delta() {
        return this._provider.delta
    }

    get deviation() {
        return this._provider.deviation
    }

    get collapsedThreshold() {
        return this._provider.collapsedThreshold
    }

    get keyboardThreshold() {
        return this._provider.keyboardThreshold
    }

    get state() {
        return this._provider.state
    }

    get fscreen() {
        return fscreen
    }
}

export default BrowserUiState