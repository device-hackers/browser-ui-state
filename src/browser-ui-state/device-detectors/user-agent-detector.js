//ToDo Maybe to rewrite to single run approach used in Detect.js
//ToDo Maybe to add known/supported devices to the list, so lib doesn't block user on unknown exceptional devices
//ToDo Instead of previous item - add hidden workaround - tap quickly 5 times - should prompt user if he(she) is sure
// to remove swipe up overlay for this device (saved to localstorage)
export const UserAgents = {
    SAMSUNG_BROWSER: 'SAMSUNG_BROWSER',
    CHROME_ANDROID: 'CHROME_ANDROID',
    CHROME_IOS: 'CHROME_IOS',
    SAFARI_IPHONE: 'SAFARI_IPHONE',
    SAFARI_IPAD: 'SAFARI_IPAD',
    UC_BROWSER_EN_ANDROID: 'UC_BROWSER_EN_ANDROID',
    UC_BROWSER_CN_ANDROID: 'UC_BROWSER_CN_ANDROID',
    UC_BROWSER_IOS: 'UC_BROWSER_IOS',
    UC_BROWSER_EN_IOS_STATIC: 'UC_BROWSER_EN_IOS_STATIC',
    DU_BROWSER: 'DU_BROWSER', //Also DU HD browser falls here as there is no reliable way to separate them
    OPERA_MINI_IPAD: 'OPERA_MINI_IPAD',
    OPERA_MINI_IPHONE: 'OPERA_MINI_IPHONE',
    OPERA_MINI_IPHONE_STATIC: 'OPERA_MINI_IPHONE_STATIC',
    QQ_CN_IPHONE: 'QQ_CN_IPHONE',
    DESKTOP: 'DESKTOP'
}

const UserAgentsRegExp = {
    SAMSUNG_BROWSER: /(?:Android.+SamsungBrowser)/i,
    CHROME_ANDROID: /(?:Android(?!.+(?:SamsungBrowser|Version)).+Chrome)(?!.+(?:Edge|UCBrowser|UBrowser|Opera|OPR|MQQBrowser|YaBrowser|baidubrowser|bdbrowser|360 Aphone Browser))/i,
    CHROME_IOS: /(?:iPhone|iPod|iPad).+(?:Chrome|CriOS|CrMo)/i,
    SAFARI_IPHONE: /(?:iPhone|iPod).+(?:Version\/)/i,
    SAFARI_IPAD: /(?:iPad).+(?:Version\/)/i,
    UC_BROWSER_EN_ANDROID: /Android.+(?!zh-CN).+(?:UCBrowser|UBrowser)/i,
    UC_BROWSER_CN_ANDROID: /Android.+(?:zh-CN).+(?:UCBrowser|UBrowser)/i,
    UC_BROWSER_IOS: /(?:(iPhone|iPod|iPad).+(?:UCBrowser|UBrowser)\/[0-9]{2})/i,
    UC_BROWSER_EN_IOS_STATIC: /(?:(iPhone|iPod|iPad).+en-.+(?:UCBrowser|UBrowser)\/[0-9]\.)/i, //on iPhone 4S, UC EN 9.3 is static (well with manual refreshes it is not)
    DU_BROWSER: /bdbrowser/i,
    OPERA_MINI_IPAD: /iPad(?!.+Safari)/i,
    OPERA_MINI_IPHONE: /iPhone.OS.(?!10)[0-9]{2}(?!.+Safari)/i,
    OPERA_MINI_IPHONE_STATIC: /iPhone.OS.(?:10|[0-9]{1}_)(?!.+Safari)/i,
    QQ_CN_IPHONE: /iPhone.+MQQBrowser/i,
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