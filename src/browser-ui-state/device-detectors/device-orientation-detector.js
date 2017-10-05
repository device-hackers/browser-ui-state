export const Orientation = {
    LANDSCAPE: 'LANDSCAPE',
    PORTRAIT:  'PORTRAIT'
}

export default class DeviceOrientationDetector {
    constructor(win) {
        this._win = win
    }

    get orientation() {
        const orientationType = this._win.screen.orientation ? this._win.screen.orientation.type : null
        if (orientationType) {
            if (orientationType.indexOf(Orientation.LANDSCAPE.toLowerCase()) != -1) {
                return Orientation.LANDSCAPE
            } else {
                return Orientation.PORTRAIT
            }
        } else {
            if (this._win.innerWidth > this._win.innerHeight) {
                return Orientation.LANDSCAPE
            } else {
                return Orientation.PORTRAIT //Can't handle Portrait + On-screen keyboard case!
            }
        }
    }
}