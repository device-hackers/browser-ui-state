import StateProvider from './state-provider'
import DeviceDetector, {Devices} from '../device-detectors/device-detector'

export default class SamsungBrowserStateProvider extends StateProvider {
    constructor(win, initialOrientation) {
        let thresholds = {
            landscape : {
                collapsed: 19.2,
                keyboard: 65.6,
            },
            portrait : {
                collapsed: 11.9,
                keyboard: 33.8
            }
        }

        const deviceDetector = new DeviceDetector(win.navigator.userAgent)

        switch (deviceDetector.device) {
            case Devices.SAMSUNG_GALAXY_NOTE_EDGE : thresholds = {
                landscape : {
                    collapsed: 21.9,
                    keyboard: 49.4,
                },
                portrait : {
                    collapsed: 67.2,
                    keyboard: 81.9
                }
            }; break
        }

        super(win, thresholds, initialOrientation)
        this._device = deviceDetector.device
    }
}