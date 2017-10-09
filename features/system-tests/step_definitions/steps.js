import {defineSupportCode} from 'cucumber'
import {should} from 'chai'; should();
import BrowserUiState from '../../../src/browser-ui-state/index'

defineSupportCode(function(context) {
    let Given = context.Given
    let When = context.When
    let Then = context.Then

    let CustomWorld = function() {}

    CustomWorld.prototype.win = {
        innerWidth: 0,
        innerHeight: 0,
        screen: {
            width: 0,
            height: 0
        },
        navigator: {
            userAgent: '',
            standalone: false
        },
        document: {
            documentElement: {
                addEventListener(type, listener, useCapture) { /*NOOP*/ }
            }
        },
        dispatchEvent(event) { /*NOOP*/ }
    }

    CustomWorld.prototype.stateProvider = null
    CustomWorld.prototype.thresholds = {
        landscape : {
            collapsed: null,
            keyboard: null,
        },
        portrait : {
            collapsed: null,
            keyboard: null
        }
    }

    CustomWorld.prototype.browserUiState = null

    CustomWorld.prototype.updateScreen = function(width, height) {
        this.win.screen.width = width
        this.win.screen.height = height
    }

    CustomWorld.prototype.updateWindow = function(width, height) {
        this.win.innerWidth = width
        this.win.innerHeight = height
    }

    context.setWorldConstructor(CustomWorld)

    Given('a user agent equals to {string}', function(userAgent) {
        this.win.navigator.userAgent = userAgent
        this.browserUiState = new BrowserUiState(this.win)
    })

    Given('screen dimensions is {int} x {int}', function(width, height) {
        this.updateScreen(width, height)
    })

    Given('window dimensions is {int} x {int}', function(width, height) {
        this.updateWindow(width, height)
    })

    When('after swipe up window dimensions changes to {int} x {int}', function(width, height) {
        this.updateWindow(width, height)
    })

    When('browser is rotated to portrait', function() { /*NOOP*/ })

    When('screen dimensions changes to {int} x {int}', function(width, height) {
        this.updateScreen(width, height)
    })

    When('window dimensions changes to {int} x {int}', function(width, height) {
        this.updateWindow(width, height)
    })

    Then('browser ui state should be equal {string}', function(state) {
        this.browserUiState.state.should.be.equal(state)
    })
})