import fscreen from 'fscreen'
import BrowserUiState from '../browser-ui-state'

//ToDo add lock screen button
class BrowserUiStateDemo {
    constructor() {
        this.browserUiState = new BrowserUiState()

        window.addEventListener('load', () => {
            this.updateUi()
            this._generateMailToLink()

            document.getElementById('html5FullscreenBtn').addEventListener('click', event => fscreen.fullscreenElement ?
                fscreen.exitFullscreen() : fscreen.requestFullscreen(document.documentElement))

            document.getElementById('refresh').addEventListener('click', event => this.updateUi())
            document.getElementById('refresh2').addEventListener('click', event => this.updateUi())

            /*
            screen.lockOrientationUniversal = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation;

            if (screen.lockOrientationUniversal("landscape-primary")) {
              // orientation was locked
            } else {
              // orientation lock failed
            }
            * */
        })

        const resizeHandler = () => {
            this.updateUi()
            this.safeRun(this.updateUi.bind(this))
        }

        window.addEventListener('resize', resizeHandler)
        window.addEventListener('orientationchange', resizeHandler)
    }

    safeRun(func) {
        setTimeout(func, 300)
    }

    write(elementId, text) {
        document.getElementById(elementId).innerText = text
    }

    updateUi() {
        const write = this.write
        const dpr = window.devicePixelRatio
        const sWH = screen.width + 'x' + screen.height
        const wWH = window.innerWidth + 'x' + window.innerHeight
        const screenAngle = screen.orientation ? screen.orientation.angle : '-'
        const screenType = screen.orientation ? screen.orientation.type : '-'
        const html5FullscreenIsAvailable = `${fscreen.fullscreenEnabled} ( ${document.fullscreenEnabled} )`
        const html5FullscreenIsOn = !!fscreen.fullscreenElement
        const orientation = this.browserUiState.orientation
        const screenAspectRatio = this.browserUiState.screenAspectRatio.toFixed(2)
        const viewportAspectRatio = this.browserUiState.viewportAspectRatio.toFixed(2)
        const delta = this.browserUiState.delta.toFixed(2)
        const deviation = `${this.browserUiState.deviation.toFixed(2)}%`
        const collapsedThreshold = this.browserUiState.collapsedThreshold ? `${this.browserUiState.collapsedThreshold}%` : 'null'
        const keyboardThreshold = this.browserUiState.keyboardThreshold ? `${this.browserUiState.keyboardThreshold}%` : 'null'
        const state = this.browserUiState.state
        document.getElementById('html5FullscreenBtn').disabled = !fscreen.fullscreenEnabled

        write('allReadings', `${dpr} / ${sWH} / ${wWH} / ${screenAngle} / ${screenType} / ` +
            `${html5FullscreenIsAvailable} / ${html5FullscreenIsOn} / ${deviation} / ${state}`)
        write('userAgent', window.navigator.userAgent)
        write('dpr', dpr)
        write('sWH', sWH)
        write('wWH', wWH)
        write('screenAngle', screenAngle)
        write('screenType', screenType)
        write('html5FullscreenIsAvailable', html5FullscreenIsAvailable)
        write('html5FullscreenIsOn', html5FullscreenIsOn)

        write('orientation', orientation)
        write('screenAspectRatio', screenAspectRatio)
        write('viewportAspectRatio', viewportAspectRatio)
        write('delta', delta)
        write('deviation', deviation)
        write('collapsedThreshold', collapsedThreshold)
        write('keyboardThreshold', keyboardThreshold)
        write('state', state)
    }

    _encodeEmailCorrectly(generatedLink) {
        if (/(?:baidubrowser|bdbrowser)/i.test(navigator.userAgent)) {
            return encodeURIComponent(generatedLink)
        } else {
            return encodeURI(generatedLink)
        }
    }

    _generateMailToLink() {
        document.getElementById('mailToLink').addEventListener('click', function() {
            let promptText = prompt('Please enter your device model', '')
            let navigatorInfo = ''

            for (let prop in window.navigator) {
                if (!(window.navigator[prop] instanceof Function) &&
                    !(window.navigator[prop] instanceof Object)) {
                    navigatorInfo += `navigator. ${prop} : ${window.navigator[prop]} \n`
                }
            }

            const screenAngle = screen.orientation ? screen.orientation.angle : '-'
            const screenType = screen.orientation ? screen.orientation.type : '-'

            let generatedLink = `subject=[Browser UI State]&body=${navigator.userAgent}
                screen.width x height : ${screen.width} x ${screen.height}
                window.innerWidth x innerHeight : ${window.innerWidth} x ${window.innerHeight}
                window.devicePixelRatio : ${window.devicePixelRatio}
                window.navigator.standalone : ${window.navigator.standalone}
                window.orientation : ${window.orientation}
                screen.orientation.angle : ${screenAngle}
                screen.orientation.type : ${screenType}
                document.fullscreenEnabled : ${document.fullscreenEnabled}
                document.webkitFullscreenEnabled : ${document.webkitFullscreenEnabled}
                document.mozFullScreenEnabled : ${document.mozFullScreenEnabled}
                document.msFullscreenEnabled : ${document.msFullscreenEnabled} \n
                ${navigatorInfo}`

            document.getElementById('mailToLink').href =
                `mailto:thebit@ukr.net? ${this._encodeEmailCorrectly(generatedLink)}`
        })
    }
}

export default new BrowserUiStateDemo()