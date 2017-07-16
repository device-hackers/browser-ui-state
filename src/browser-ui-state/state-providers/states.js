//ToDo Add iOS standalone (homescreen) state
export default {
    COLLAPSED:                'COLLAPSED', //e.g. initial browser state with address bar visible on the screen
    EXPANDED:                 'EXPANDED', //e.g. state usually received after swiping up so that address bar gets hidden
    KEYBOARD:                 'KEYBOARD', //e.g. after tapping on input element when on-screen keyboard appears and resizes viewport
    HTML5_FULLSCREEN:         'HTML5_FULLSCREEN', //e.g. after switching to HTML5 Full Screen mode (not supported by all browsers)
    DESKTOP_EXPANDED:         'DESKTOP_EXPANDED', //e.g. regular desktop browser state usually with address bar visible on the screen
    DESKTOP_HTML5_FULLSCREEN: 'DESKTOP_HTML5_FULLSCREEN', //e.g. desktop browser in HTML5 full screen mode
    UNKNOWN:                  'UNKNOWN' //e.g. browser is unknown to the library, so impossible to find-out it's state
}