import BrowserUiState from '../../src/browser-ui-state/index'
import {defineSupportCode} from 'cucumber'

defineSupportCode(function(context) {
    let Given = context.Given
    let When = context.When
    let Then = context.Then

    let browserUiState = null
    let win = {
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

    let updateScreen = (width, height) => {
        win.screen.width = width
        win.screen.height = height
    }

    let updateWindow = (width, height) => {
        win.innerWidth = width
        win.innerHeight = height
    }

    Given('a user agent equals to {string}', userAgent => {
        win.navigator.userAgent = userAgent
        browserUiState = new BrowserUiState(win)
    })

    Given('screen dimensions is {int} x {int}',
        (width, height) => updateScreen(width, height))

    Given('window dimensions is {int} x {int}',
        (width, height) => updateWindow(width, height))

    When('after swipe up window dimensions changes to {int} x {int}',
        (width, height) => updateWindow(width, height))

    When('browser is rotated to portrait',
        () => null)

    When('screen dimensions changes to {int} x {int}',
        (width, height) => updateScreen(width, height))

    When('window dimensions changes to {int} x {int}',
        (width, height) => updateWindow(width, height))

    Then('browser ui state should be {string}', state => {
        if (browserUiState.state !== state) {
            throw new Error(`Incorrect browser ui state (${browserUiState.state})!`)
        }
    })
})