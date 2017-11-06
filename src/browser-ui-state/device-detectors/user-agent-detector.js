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
    ANDROID_STOCK: 'ANDROID_STOCK',
    DESKTOP: 'DESKTOP'
}

const UserAgentsRegExp = {
    SAMSUNG_BROWSER: /\WAndroid\W.*\WSamsungBrowser\W/i,
    CHROME_ANDROID: /\WAndroid\W(?!.*\W(?:SamsungBrowser|Version)\W).*\WChrome\W(?!.*\W(?:Edge|UCBrowser|UBrowser|Opera|OPR|MQQBrowser|YaBrowser|baidubrowser|bdbrowser|360 Aphone Browser)\W)/i,
    CHROME_IOS: /\W(?:iPhone|iPod|iPad)\W.*\W(?:Chrome|CriOS|CrMo)\W/i,
    SAFARI_IPHONE: /\W(?:iPhone|iPod)\W.*\WVersion\/(?!.*\WMQQBrowser\W)/i,
    SAFARI_IPAD: /\WiPad\W.*\WVersion\//i,
    UC_BROWSER_EN_ANDROID: /\WAndroid\W(?!.*\Wzh-CN\W).*\WUCBrowser\W/i,
    UC_BROWSER_CN_ANDROID: /\WAndroid\W.*\Wzh-CN\W.*\WUCBrowser\W/i,
    UC_BROWSER_IOS: /\W(?:iPhone|iPod|iPad)\W.*\WUCBrowser\/[0-9]{2}/i,
    UC_BROWSER_EN_IOS_STATIC: /\W(?:iPhone|iPod|iPad)\W.*\Wen-.*\WUCBrowser\/[0-9]\./i, //on iPhone 4S, UC EN 9.3 is static (well with manual refreshes it is not)
    DU_BROWSER: /\Wbdbrowser\W/i,
    OPERA_MINI_IPAD: /\WiPad\W(?!.*\WSafari\W)/i,
    OPERA_MINI_IPHONE: /\WiPhone.OS.(?!10)[0-9]{2}(?!.*\WSafari\W)/i, //Aimed to match iOS 11+
    OPERA_MINI_IPHONE_STATIC: /\WiPhone.OS.(?:10|[0-9]{1}_)(?!.*\WSafari\W)/i, //Aimed to match iOS 0-10 inclusively
    QQ_CN_IPHONE: /\WiPhone\W.*\WMQQBrowser\W/i,
    ANDROID_STOCK: /\WAndroid\W.*\W(?:Version|Browser)/i,
    DESKTOP: /(?:^|\W)(?:Mozilla|Opera)\W(?!.*\W(?:Android|iPhone|iPod|iPad)\W)/i
}

/**
 * Iterates over all regular expressions and tries to find first match.
 * Warning! RegExps should be constructed in the way that the order of their appearance in containing object
 * should not matter (e.g. if CHROME_ANDROID would not list all other browsers built on its engine - that
 * would mean detection will always return CHROME_ANDROID for all of them, unless it is moved to the very bottom.
 */
export default class UserAgentDetector {
    constructor(userAgent) {
        this.userAgent = null

        for (let regexp in UserAgentsRegExp) {
            if (UserAgentsRegExp[regexp].test(userAgent)) {
                this.userAgent = UserAgents[regexp]
                break
            }
        }
    }
}