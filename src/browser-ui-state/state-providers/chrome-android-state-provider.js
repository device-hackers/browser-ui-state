import StateProvider from './state-provider'
import DeviceDetector, {Devices} from '../device-detectors/device-detector'

export default class ChromeAndroidStateProvider extends StateProvider {
    constructor(win, initialOrientation) {
        let thresholds = {
            landscape : {
                collapsed: 14.75,
                keyboard: 49.4,
            },
            portrait : {
                collapsed: 11.5,
                keyboard: 30.2
            }
        }

        const deviceDetector = new DeviceDetector(win.navigator.userAgent)

        switch (deviceDetector.device) {
            case Devices.SAMSUNG_GALAXY_TAB_3_10_1 :
            case Devices.SAMSUNG_GALAXY_TAB_4_10_1 :
            case Devices.SAMSUNG_GALAXY_NOTE_8 :
            case Devices.SAMSUNG_GALAXY_NOTE_5 :
            case Devices.SAMSUNG_GALAXY_NOTE_EDGE : thresholds = {
                landscape : {
                    collapsed: 11.7,
                    keyboard: 34.4,
                },
                portrait : {
                    collapsed: 8.55,
                    keyboard: 25.1
                }
            }; break
            case Devices.GOOGLE_PIXEL : thresholds = {
                landscape : {
                    collapsed: 7.0,
                    keyboard: 31.9,
                },
                portrait : {
                    collapsed: 14.05,
                    keyboard: 32.5
                }
            }; break
            case Devices.SAMSUNG_GALAXY_S7 :
            case Devices.SAMSUNG_GALAXY_S8 : thresholds = {
                landscape : {
                    collapsed: 13.45,
                    keyboard: 38.5,
                },
                portrait : {
                    collapsed: 10.45,
                    keyboard: 27.5
                }
            }; break
        }

        super(win, thresholds, initialOrientation)
        this._device = deviceDetector.device
    }
}