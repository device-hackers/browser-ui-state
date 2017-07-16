//ToDO Maybe to rewrite to single run approach used in Detect.js
export const Devices = {
    SAMSUNG_GALAXY_NOTE_EDGE: 'SAMSUNG_GALAXY_NOTE_EDGE',
    SAMSUNG_GALAXY_S8: 'SAMSUNG_GALAXY_S8'
}

const DevicesRegExp = {
    SAMSUNG_GALAXY_NOTE_EDGE: /(?:N915)/i,
    SAMSUNG_GALAXY_S8: /(?:G950)/i
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