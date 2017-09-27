import UserAgentDetector, {UserAgents} from './device-detectors/user-agent-detector'
import ChromeAndroidStateProvider from './state-providers/chrome-android-state-provider'
import ChromeIOSStateProvider from './state-providers/chrome-ios-state-provider'
import SafariIphoneStateProvider from './state-providers/safari-iphone-state-provider'
import SafariIpadStateProvider from './state-providers/safari-ipad-state-provider'
import SamsungBrowserStateProvider from './state-providers/samsung-browser-state-provider'
import DesktopStateProvider from './state-providers/desktop-state-provider'
import UnknownStateProvider from './state-providers/unknown-state-provider'
import UCBrowserENAndroidStateProvider from "./state-providers/ucbrowser-en-android-state-provider"
import UCBrowserCNAndroidStateProvider from "./state-providers/ucbrowser-cn-android-state-provider"
import UCBrowseriOSStateProvider from "./state-providers/ucbrowser-ios-state-provider"
import StaticStateProvider from "./state-providers/static-state-provider"
import OperaMiniIphoneStateProvider from "./state-providers/opera-mini-iphone-state-provider"

class BrowserUiState {
    constructor(userAgentObj = window.navigator.userAgent, screenObj = screen, windowObj = window) {
        this._userAgentDetector = new UserAgentDetector(userAgentObj)

        switch (this._userAgentDetector.userAgent) {
            case UserAgents.CHROME_ANDROID :
                this._provider = new ChromeAndroidStateProvider(userAgentObj, screenObj, windowObj); break
            case UserAgents.CHROME_IOS :
                this._provider = new ChromeIOSStateProvider(userAgentObj, screenObj, windowObj); break
            case UserAgents.SAFARI_IPHONE :
                this._provider = new SafariIphoneStateProvider(userAgentObj, screenObj, windowObj); break
            case UserAgents.SAFARI_IPAD :
                this._provider = new SafariIpadStateProvider(userAgentObj, screenObj, windowObj); break
            case UserAgents.SAMSUNG_BROWSER :
                this._provider = new SamsungBrowserStateProvider(userAgentObj, screenObj, windowObj); break
            case UserAgents.UC_BROWSER_EN_ANDROID :
                this._provider = new UCBrowserENAndroidStateProvider(userAgentObj, screenObj, windowObj); break
            case UserAgents.UC_BROWSER_CN_ANDROID :
                this._provider = new UCBrowserCNAndroidStateProvider(userAgentObj, screenObj, windowObj); break
            case UserAgents.UC_BROWSER_IOS :
                this._provider = new UCBrowseriOSStateProvider(userAgentObj, screenObj, windowObj); break
            case UserAgents.OPERA_MINI_IPHONE :
                this._provider = new OperaMiniIphoneStateProvider(userAgentObj, screenObj, windowObj); break
            case UserAgents.DU_BROWSER :
            case UserAgents.OPERA_MINI_IPAD :
            case UserAgents.UC_BROWSER_EN_IOS_STATIC :
            case UserAgents.OPERA_MINI_IPHONE_STATIC :
                this._provider = new StaticStateProvider(userAgentObj, screenObj, windowObj); break
            case UserAgents.DESKTOP :
                this._provider = new DesktopStateProvider(userAgentObj, screenObj, windowObj); break
            default :
                this._provider = new UnknownStateProvider(userAgentObj, screenObj, windowObj)
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
}

export default BrowserUiState