import fscreen from 'fscreen'
import KeyboardNoResizeStateProvider from './keyboard-no-resize-state-provider'
import States from './states'

export default class StaticStateProvider extends KeyboardNoResizeStateProvider {
    constructor(win) {
        const thresholds = {
            landscape : {
                collapsed: null,
                keyboard: null,
            },
            portrait : {
                collapsed: null,
                keyboard: null
            }
        }
        super(win, thresholds)
    }

    get state() {
        if (super.state === States.KEYBOARD_NO_RESIZE) {
            return States.KEYBOARD_NO_RESIZE
        } else if (fscreen.fullscreenElement) {
            return States.HTML5_FULLSCREEN
        } else {
            return States.STATIC
        }
    }
}