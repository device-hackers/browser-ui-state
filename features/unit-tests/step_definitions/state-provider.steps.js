import {defineSupportCode} from 'cucumber'
import StateProvider from '../../../src/browser-ui-state/state-providers/state-provider'
import {Orientation} from "../../../src/browser-ui-state/device-detectors/device-orientation-detector";

defineSupportCode(function(context) {
    let Given = context.Given
    let When = context.When
    let Then = context.Then

    Given('testing state provider with a user agent equals to {string}', function(userAgent) {
        this.win.navigator.userAgent = userAgent
        this.stateProvider = new StateProvider(this.win, this.thresholds)
    })

    Then('stateProvider.screenAspectRatio should be {int}/{int}', function (width, height) {
        let screenAspectRatio = width/height

        if (this.stateProvider.screenAspectRatio !== screenAspectRatio) {
            throw new Error(`Incorrect screenAspectRatio (${this.stateProvider.screenAspectRatio}), should be ${screenAspectRatio}!`)
        }
    })

    Then('stateProvider.viewportAspectRatio should be {int}/{int}', function (width, height) {
        let widthAdjusted = this.stateProvider.orientation === Orientation.LANDSCAPE &&
                                this.stateProvider.isIphoneX() ? this.win.screen.height : width
        let viewportAspectRatio = widthAdjusted/height

        if (this.stateProvider.viewportAspectRatio !== viewportAspectRatio) {
            throw new Error(`Incorrect viewportAspectRatio (${this.stateProvider.viewportAspectRatio}), should be ${viewportAspectRatio}!`)
        }
    })

    Then('orientation should be {string}', function (orientation) {
        if (this.stateProvider.orientation !== orientation) {
            throw new Error(`Incorrect orientation (${this.stateProvider.orientation})!`)
        }
    })

    Then('delta should be |stateProvider.screenAspectRatio - stateProvider.viewportAspectRatio|', function () {
        let delta = Math.abs(this.stateProvider.screenAspectRatio - this.stateProvider.viewportAspectRatio)

        if (this.stateProvider.delta !== delta) {
            throw new Error(`Incorrect delta (${this.stateProvider.delta}), should be ${delta}!`)
        }
    })

    Then('deviation should be stateProvider.delta / stateProvider.screenAspectRatio times {int}', function (percent) {
        let deviation = (this.stateProvider.delta / this.stateProvider.screenAspectRatio) * percent

        if (this.stateProvider.deviation !== deviation) {
            throw new Error(`Incorrect deviation (${this.stateProvider.deviation}), should be ${deviation}!`)
        }
    })

    Then('stateProvider.collapsedThreshold should be {float}', function (threshold) {
        this.thresholds[this.stateProvider.orientation.toLowerCase()].collapsed = threshold

        if (this.stateProvider.collapsedThreshold !== threshold) {
            throw new Error(`Incorrect collapsedThreshold (${this.stateProvider.collapsedThreshold}), should be ${threshold}!`)
        }
    })

    Then('stateProvider.keyboardThreshold should be {float}', function (threshold) {
        this.thresholds[this.stateProvider.orientation.toLowerCase()].keyboard = threshold

        if (this.stateProvider.keyboardThreshold !== threshold) {
            throw new Error(`Incorrect keyboardThreshold (${this.stateProvider.keyboardThreshold}), should be ${threshold}!`)
        }
    })

    Then('stateProvider.state should be {string}', function (state) {
        if (this.stateProvider.state !== state) {
            throw new Error(`Incorrect state (${this.stateProvider.state}), should be ${state}!`)
        }
    })

    Then('stateProvider.viewportWidthAdjustedIfNeeded should be correct', function () {
        let width = this.stateProvider.isIphoneX() ? this.win.screen.height : this.win.innerWidth

        if (this.stateProvider.viewportWidthAdjustedIfNeeded !== width) {
            throw new Error(`Incorrect viewportWidthAdjustedIfNeeded (${this.stateProvider.viewportWidthAdjustedIfNeeded}), should be ${width}!`)
        }
    })

    Then('stateProvider.isIphoneX should correspond to {string}', function (device) {
        if (device === 'iPhone X' && !this.stateProvider.isIphoneX()) {
            throw new Error(`Incorrect isIphoneX() (${this.stateProvider.isIphoneX()}), should be true!`)
        }
    })
})