import StateProvider from './state-provider'
import DeviceDetector, {Devices} from '../device-detectors/device-detector'

export default class ChromeAndroidStateProvider extends StateProvider {
    constructor(userAgentObj, screenObj, windowObj) {
        let thresholds = {
            portrait : {
                collapsed: 11.5,
                keyboard: 30.2
            },
            landscape : {
                collapsed: 14.75,
                keyboard: 49.4,
            }
        }

        const deviceDetector = new DeviceDetector(userAgentObj)

        //Need to provide different thresholds at least for Note Edge (N915) and maybe for S8 (G950)
        switch (deviceDetector.device) {
            case Devices.SAMSUNG_GALAXY_NOTE_EDGE : overrideThresholds({
                    portrait : {
                        collapsed: 7.0
                    }
                }); break
            case Devices.SAMSUNG_GALAXY_S8 : overrideThresholds(undefined, {
                    landscape : {
                        collapsed: 5.0
                    }
                }); break
        }

        function overrideThresholds(portraitObj = { portrait : {} }, landscapeObj = { landscape : {} }) {
            Object.assign(thresholds.portrait, portraitObj.portrait)
            Object.assign(thresholds.landscape, landscapeObj.landscape)
        }

        super(screenObj, windowObj, thresholds)
    }
}