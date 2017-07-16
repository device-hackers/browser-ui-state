//ToDO Maybe to rewrite to single run approach used in Detect.js
export const UserAgents = {
    SAMSUNG_BROWSER: 'SAMSUNG_BROWSER',
    CHROME_ANDROID: 'CHROME_ANDROID',
    CHROME_IOS: 'CHROME_IOS',
    SAFARI_IPHONE: 'SAFARI_IPHONE',
    SAFARI_IPAD: 'SAFARI_IPAD',
    DESKTOP: 'DESKTOP'
}

const UserAgentsRegExp = {
    SAMSUNG_BROWSER: /(?:Android.+SamsungBrowser)/i,
    CHROME_ANDROID: /(?:Android(?!.+(?:SamsungBrowser|Version)).+Chrome)(?!.+(?:Edge|UCBrowser|UBrowser|Opera|OPR|MQQBrowser|YaBrowser|baidubrowser|bdbrowser|360 Aphone Browser))/i,
    CHROME_IOS: /(?:iPhone|iPod|iPad).+(?:Chrome|CriOS|CrMo)/i,
    SAFARI_IPHONE: /(?:iPhone|iPod).+(?:Version\/)/i,
    SAFARI_IPAD: /(?:iPad).+(?:Version\/)/i,
    DESKTOP: /(?:Mozilla|Opera)(?!.+(?:Android|iPhone|iPod|iPad))/i
}

export default class UserAgentDetector {
    constructor(userAgentObj) {
        this._detectedDevice = null
        for (let regexp in UserAgentsRegExp) {
            if (UserAgentsRegExp[regexp].test(userAgentObj)) {
                this._detectedDevice = UserAgents[regexp]
                break
            }
        }
    }

    get userAgent() {
        console.debug(`UserAgentDetector.userAgent = ${this._detectedDevice}`)
        return this._detectedDevice
    }
}