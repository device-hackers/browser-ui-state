import StateProvider from './state-provider'
import DeviceDetector, {Devices} from "../device-detectors/device-detector"

export default class SamsungBrowserStateProvider extends StateProvider {
    constructor(userAgentObj, screenObj, windowObj) {
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

        const deviceDetector = new DeviceDetector(userAgentObj)

        switch (deviceDetector.device) {
            case Devices.SAMSUNG_GALAXY_NOTE_EDGE : thresholds = {
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