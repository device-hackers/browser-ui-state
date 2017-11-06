import DeviceDetector, {Devices} from '../device-detectors/device-detector'
import StateProvider from './state-provider'
import States from "./states"

export default class AndroidStockStateProvider extends StateProvider {
    constructor(win, initialOrientation) {
        let thresholds = {
            landscape : {
                collapsed: 19.7,
                keyboard: 35.3,
            },
            portrait : {
                collapsed: 9.65,
                keyboard: 22.5
            }
        }

        const deviceDetector = new DeviceDetector(win.navigator.userAgent)

        switch (deviceDetector.device) {
            case Devices.LENOVO_A850 : thresholds = {
                landscape : {
                    collapsed: 40.45,
                    keyboard: 64.5,
                },
                portrait : {
                    collapsed: 15.75,
                    keyboard: 29.7
                }
            }; break
            case Devices.LENOVO_A889 : thresholds = {
                landscape : {
                    collapsed: 9.55,
                    keyboard: 28.5,
                },
                portrait : {
                    collapsed: 15.45,
                    keyboard: 29.7
                }
            }; break
        }

        super(win, thresholds, initialOrientation)
        this._device = deviceDetector.device
    }

    get state() {
        if (this._device === Devices.LG_G4 ||
            this._device === Devices.SAMSUNG_GALAXY_S4 ||
            this._device === Devices.SAMSUNG_GALAXY_TAB_3_10_1 ||
            this._device === Devices.SAMSUNG_GALAXY_TAB_4_10_1) {
            return States.STATIC
        } else {
            return super.state
        }
    }
}