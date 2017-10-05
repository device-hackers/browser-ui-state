export const Orientation = {
    LANDSCAPE: 'LANDSCAPE',
    PORTRAIT:  'PORTRAIT'
}

export default class DeviceOrientationDetector {
    constructor(screenObj, windowObj) {
        this._screenObj = screenObj
        this._windowObj = windowObj
    }

    get orientation() {
        const orientationType = this._screenObj.orientation ? this._screenObj.orientation.type : null
        if (orientationType) {
            if (orientationType.indexOf(Orientation.LANDSCAPE.toLowerCase()) != -1) {
                //console.debug(`(Modern solution) DeviceOrientationDetector.orientation = ${Orientation.LANDSCAPE}`)
                return Orientation.LANDSCAPE
            } else {
                //console.debug(`(Modern solution) DeviceOrientationDetector.orientation = ${Orientation.PORTRAIT}`)
                return Orientation.PORTRAIT
            }
        } else {
            if (this._windowObj.innerWidth > this._windowObj.innerHeight) {
                //console.debug(`(Legacy solution) DeviceOrientationDetector.orientation = ${Orientation.LANDSCAPE}`)
                return Orientation.LANDSCAPE
            } else {
                //console.debug(`(Legacy solution) DeviceOrientationDetector.orientation = ${Orientation.PORTRAIT}`)
                return Orientation.PORTRAIT //Can't handle Portrait + On-screen keyboard case!
            }
        }
    }
}