import KeyboardNoResizeStateProvider from './keyboard-no-resize-state-provider'

/**
 * In fact Chrome iOS prior to iOS 10 did resize viewport with it's on screen keyboard,
 * but decision made to not introduce extra complexity to split Chrome iOS handling just to
 * manage this case. Let's assume more and more users will gradually upgrade to iOS 10+.
 */
export default class ChromeIosStateProvider extends KeyboardNoResizeStateProvider {
    constructor(win, initialOrientation) {
        const thresholds = {
            landscape : {
                collapsed: 9.75,
                keyboard: 41.3,
            },
            portrait : {
                collapsed: 6.15,
                keyboard: 26.0
            }
        }

        super(win, thresholds, initialOrientation)
    }
}