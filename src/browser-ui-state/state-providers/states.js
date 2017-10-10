export default {
    COLLAPSED:                      'COLLAPSED',
    //Initial browser state with address bar visible on the screen

    EXPANDED:                       'EXPANDED',
    //State which usually received after swiping up so that address bar gets hidden

    KEYBOARD:                       'KEYBOARD',
    //After tapping on input element when on-screen keyboard appears and resizes viewport

    KEYBOARD_NO_RESIZE:             'KEYBOARD_NO_RESIZE',
    //After tapping on input element when on-screen keyboard appears but doesn't resize viewport (mostly iOS)

    HTML5_FULLSCREEN:               'HTML5_FULLSCREEN',
    //After switching to HTML5 Full Screen mode (not supported by all browsers, completely absent on iOS)

    SPLIT_MODE:                     'SPLIT_MODE',
    //Aka 'multi-tasking', 'split-view', 'split screen', 'side-by-side', e.g.:
    // - iOS 10+ iPad Safari 'Split View': https://support.apple.com/en-us/HT207522
    // - iOS 9+ iPad 'Split View': https://support.apple.com/en-us/HT207582
    // - Android 7+ 'Multi-Window': https://developer.android.com/guide/topics/ui/multi-window.html

    HTML5_FULLSCREEN_IN_SPLIT_MODE: 'HTML5_FULLSCREEN_IN_SPLIT_MODE',
    //When HTML5 Full Screen mode is launched in Split Mode - it still covers only the area of the browser initiated
    //Full Screen, so it might be needed to differentiate this mode

    DESKTOP:                        'DESKTOP',
    //Regular desktop browser

    DESKTOP_HTML5_FULLSCREEN:       'DESKTOP_HTML5_FULLSCREEN',
    //Desktop browser in HTML5 full screen mode

    STATIC:                         'STATIC',
    //Browser doesn't resize it's window content when it's bars get displayed or hidden,
    // or the bars are static and doesn't disappear at all; used only for browsers which are known to behave like this,
    // no programmatic way to detect this in other way

    SAFARI_HOMESCREEN:              'SAFARI_HOMESCREEN',
    //No browser's UI, page added as app to homescreen, just a shortcut for window.navigator.standalone property

    UNKNOWN:                        'UNKNOWN'
    //Browser is unknown to the library, so impossible to find-out it's state
}