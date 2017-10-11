export const Devices = {
    SAMSUNG_GALAXY_NOTE_5: 'SAMSUNG_GALAXY_NOTE_5',
    SAMSUNG_GALAXY_NOTE_EDGE: 'SAMSUNG_GALAXY_NOTE_EDGE',
    SAMSUNG_GALAXY_TAB_4_10_1: 'SAMSUNG_GALAXY_TAB_4_10_1',
    SAMSUNG_GALAXY_TAB_3_10_1: 'SAMSUNG_GALAXY_TAB_3_10_1',
    SAMSUNG_GALAXY_S8: 'SAMSUNG_GALAXY_S8',
    SAMSUNG_GALAXY_S4: 'SAMSUNG_GALAXY_S4',
    GOOGLE_PIXEL: 'GOOGLE_PIXEL',
    LENOVO_A889: 'LENOVO_A889'
}

const DevicesRegExp = {
    SAMSUNG_GALAXY_NOTE_5: /(?:N920)/i,
    SAMSUNG_GALAXY_NOTE_EDGE: /(?:N915)/i,
    SAMSUNG_GALAXY_TAB_4_10_1: /(?:SM-T53)/i,
    SAMSUNG_GALAXY_TAB_3_10_1: /(?:GT-P52)/i,
    SAMSUNG_GALAXY_S8: /(?:G950)/i,
    SAMSUNG_GALAXY_S4: /(?:GT-I95|SHV-E300)/i,
    GOOGLE_PIXEL: /(?:Pixel Build)/i,
    LENOVO_A889: /(?:A889)/i
}

export default class DeviceDetector {
    constructor(userAgent) {
        this.device = null

        for (let regexp in DevicesRegExp) {
            if (DevicesRegExp[regexp].test(userAgent)) {
                this.device = Devices[regexp]
                break
            }
        }
    }

    static isIos(userAgent) {
        return /\W(?:iPhone|iPod|iPad)\W/i.test(userAgent)
    }

    static isIpad(userAgent) {
        return /\WiPad\W/i.test(userAgent)
    }

    static isIphone(userAgent) {
        return /\WiPhone\W/i.test(userAgent)
    }

    static isIphoneX(userAgent, screenHeight) {
        return DeviceDetector.isIphone(userAgent) && screenHeight === 812
    }

    static isIphone4(userAgent, screenHeight) {
        return DeviceDetector.isIphone(userAgent) && screenHeight === 480
    }

    static isIphone4WithUcCn(userAgent, screenHeight) {
        return /\WiPhone\W.*\Wzh-CN\W.*\WUCBrowser\W/i.test(userAgent) && screenHeight === 480
    }
}