export default {
    COLLAPSED:                'COLLAPSED', //e.g. initial browser state with address bar visible on the screen
    EXPANDED:                 'EXPANDED', //e.g. state usually received after swiping up so that address bar gets hidden
    KEYBOARD:                 'KEYBOARD', //e.g. after tapping on input element when on-screen keyboard appears and resizes viewport
    KEYBOARD_NO_RESIZE:       'KEYBOARD_NO_RESIZE', //e.g. after tapping on input element when on-screen keyboard appears but doesn't resize viewport
    HTML5_FULLSCREEN:         'HTML5_FULLSCREEN', //e.g. after switching to HTML5 Full Screen mode (not supported by all browsers)
    DESKTOP:                  'DESKTOP', //e.g. regular desktop browser
    DESKTOP_HTML5_FULLSCREEN: 'DESKTOP_HTML5_FULLSCREEN', //e.g. desktop browser in HTML5 full screen mode
    STATIC:                   'STATIC', //e.g. browser doesn't resize it's window content when it's bars get displayed
                                        // or hidden, or the bars are static and doesn't disappear at all; used only for
                                        // browsers which are known to behave like this, no programmatic way to detect this in other way
    SAFARI_HOMESCREEN:        'SAFARI_HOMESCREEN', //e.g. no browser's UI, page added as app to homescreen
    UNKNOWN:                  'UNKNOWN' //e.g. browser is unknown to the library, so impossible to find-out it's state
}