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
        const orientationType = screen.orientation ? screen.orientation.type : null
        if (orientationType) {
            if (orientationType.includes(Orientation.LANDSCAPE.toLowerCase())) {
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
                // ToDo add input focus handling for iOS 10+
                // ToDo if viewport aspect ratio is less than 1.0 - then it is on screen in portrait!
                // but this is only due to in Excel we know which orientation beforehand, so calculate
                // viewport aspect ratio correctly :(
                // but we still can detect it as too square aspect which is near 1.0!
                // and this is possible only in portrait with on screen keyboard!
            }
        }
    }
}