//ToDO Maybe to rewrite to single run approach used in Detect.js
export const Devices = {
    SAMSUNG_GALAXY_NOTE_EDGE: 'SAMSUNG_GALAXY_NOTE_EDGE',
    SAMSUNG_GALAXY_TAB_4_10_1: 'SAMSUNG_GALAXY_TAB_4_10_1',
    SAMSUNG_GALAXY_TAB_3_10_1: 'SAMSUNG_GALAXY_TAB_3_10_1',
    SAMSUNG_GALAXY_S8: 'SAMSUNG_GALAXY_S8',
    SAMSUNG_GALAXY_S4: 'SAMSUNG_GALAXY_S4',
    GOOGLE_PIXEL: 'GOOGLE_PIXEL',
    LENOVO_A889: 'LENOVO_A889'
}

const DevicesRegExp = {
    SAMSUNG_GALAXY_NOTE_EDGE: /(?:N915)/i,
    SAMSUNG_GALAXY_TAB_4_10_1: /(?:SM-T53)/i,
    SAMSUNG_GALAXY_TAB_3_10_1: /(?:GT-P52)/i,
    SAMSUNG_GALAXY_S8: /(?:G950)/i,
    SAMSUNG_GALAXY_S4: /(?:GT-I95|SHV-E300)/i,
    GOOGLE_PIXEL: /(?:Pixel Build)/i,
    LENOVO_A889: /(?:A889)/i
}

export default class DeviceDetector {
    constructor(userAgentObj) {
        this._detectedDevice = null
        for (let regexp in DevicesRegExp) {
            if (DevicesRegExp[regexp].test(userAgentObj)) {
                this._detectedDevice = Devices[regexp]
                break
            }
        }
    }

    get device() {
        console.debug(`DeviceDetector.device = ${this._detectedDevice}`)
        return this._detectedDevice
    }
}