import {defineSupportCode} from 'cucumber'
import {should} from 'chai'; should();
import StateProvider from '../../../src/browser-ui-state/state-providers/state-provider'
import {Orientation} from '../../../src/browser-ui-state/device-detectors/device-orientation-detector'
import DeviceDetector from '../../../src/browser-ui-state/device-detectors/device-detector'

defineSupportCode(function(context) {
    let Given = context.Given
    let When = context.When
    let Then = context.Then

    Given('testing state provider with a user agent equals to {string}', function(userAgent) {
        this.win.navigator.userAgent = userAgent
        this.stateProvider = new StateProvider(this.win, this.thresholds, Orientation.LANDSCAPE)
        this.win.orientation = 90
    })

    Then('stateProvider.screenAspectRatio should be equal {int}/{int}', function (width, height) {
        this.stateProvider.screenAspectRatio.should.be.equal(width/height)
    })

    Then('stateProvider.viewportAspectRatio should be equal {int}/{int}', function (width, height) {
        let widthAdjusted = this.stateProvider.orientation === Orientation.LANDSCAPE &&
            DeviceDetector.isIphoneX(this.win.navigator.userAgent, this.win.screen.height) ?
                this.win.screen.height : width

        this.stateProvider.viewportAspectRatio.should.be.equal(widthAdjusted/height)
    })

    Then('orientation should be equal {string}', function (orientation) {
        this.stateProvider.orientation.should.be.equal(orientation)
    })

    Then('delta should be equal |stateProvider.screenAspectRatio - stateProvider.viewportAspectRatio|', function () {
        let delta = Math.abs(this.stateProvider.screenAspectRatio - this.stateProvider.viewportAspectRatio)
        this.stateProvider.delta.should.be.equal(delta)
    })

    Then('deviation should be equal stateProvider.delta / stateProvider.screenAspectRatio times {int}', function (percent) {
        let deviation = (this.stateProvider.delta / this.stateProvider.screenAspectRatio) * percent
        this.stateProvider.deviation.should.be.equal(deviation)
    })

    Then('stateProvider.collapsedThreshold should be equal {float}', function (threshold) {
        this.thresholds[this.stateProvider.orientation.toLowerCase()].collapsed = threshold
        this.stateProvider.collapsedThreshold.should.be.equal(threshold)
    })

    Then('stateProvider.keyboardThreshold should be equal {float}', function (threshold) {
        this.thresholds[this.stateProvider.orientation.toLowerCase()].keyboard = threshold
        this.stateProvider.keyboardThreshold.should.be.equal(threshold)
    })

    Then('stateProvider.state should be equal {string}', function (state) {
        this.stateProvider.state.should.be.equal(state)
    })

    Then('stateProvider._viewportWidthAdjustedIfNeeded should be correct', function () {
        let width = DeviceDetector.isIphoneX(this.win.navigator.userAgent, this.win.screen.height) ?
            this.win.screen.height : this.win.innerWidth

        this.stateProvider._viewportWidthAdjustedIfNeeded.should.be.equal(width)
    })

    Then('stateProvider._isIphoneX should correspond to {string}', function (device) {
        if (device === 'iPhone X') {
            DeviceDetector.isIphoneX(this.win.navigator.userAgent, this.win.screen.height).should.be.true
        }
    })
})