import StateProvider from './state-provider'
import DeviceDetector, {Devices} from "../device-detectors/device-detector"

export default class UCBrowserENAndroidStateProvider extends StateProvider {
    constructor(userAgentObj, screenObj, windowObj) {
        let thresholds = {
            landscape : {
                collapsed: 5.75,
                keyboard: 25.5,
            },
            portrait : {
                collapsed: 5.05,
                keyboard: 18.0
            }
        }

        const deviceDetector = new DeviceDetector(userAgentObj)

        switch (deviceDetector.device) {
            case Devices.LENOVO_A889 :
            case Devices.SAMSUNG_GALAXY_S4 : thresholds = {
                landscape : {
                    collapsed: 12.4,
                    keyboard: 38.0,
                },
                portrait : {
                    collapsed: 13.7,
                    keyboard: 30.7
                }
            }; break
        }

        super(screenObj, windowObj, thresholds)
    }
}