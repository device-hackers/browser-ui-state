# Browser UI State
[![npm version](https://badge.fury.io/js/browser-ui-state.svg)](https://badge.fury.io/js/browser-ui-state) 
[![single dependency](https://david-dm.org/TheBit/browser-ui-state.svg)](https://github.com/rafrex/fscreen) 
[![build](https://travis-ci.org/device-hackers/browser-ui-state.svg?branch=master)](https://travis-ci.org/device-hackers/browser-ui-state)
[![gzipped size](http://img.badgesize.io/https://unpkg.com/browser-ui-state?compression=gzip)](https://unpkg.com/browser-ui-state)

[Live Demo](http://browser-ui-state.surge.sh/) - Open in Chrome, emulate to Nexus 5X and play with 
different modes (look for state property with values e.g. EXPANDED, COLLAPSED, KEYBOARD, etc)
![Live Demo Preview](https://i.gyazo.com/ab08ba53bceb0ee8f53e2029236e0308.gif)

## Motivation
Unfortunately browsers does not provide any API to allow us to determine their UI state in context of 
address or other bars visibility, on-screen keyboard presence, etc.

Such need exist for [SPAs](https://en.wikipedia.org/wiki/Single-page_application) (usually games or 
video content) which does not have long body to scroll through so that browser UI disappears. 
So they need some way to "expand" the browser to some kind of "full screen" to provide immersive user-experience. 

There is [HTML5 Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API) to solve 
this problem, but [it is not supported cross-browser](http://caniuse.com/#feat=fullscreen) (for example 
not supported in iOS as well as on some Android stock browsers). Also not all browsers are using unprefixed version of the API, 
leading to creation of vendor-agnostic wrapper libraries like [Fscreen](https://github.com/rafrex/fscreen).

Fortunately with the help of a bit of mathematics, spreadsheets and some gathered browser's statistics - 
it is possible to determine the state by calculating deviation between current viewport aspect ratio 
(reported by window.innerWidth and height) and static screen aspect ratio (reported by screen.width and height).

This, being packaged into library, allows to build on top of it cross-browser full screen solutions like 
displaying overlay (only when needed) with message to the user e.g. "To use this app please swipe up the page".

This very library does not provide (and does not intended to) any out-of-the-box full screen solutions.

## Installation
```shell
$ npm i browser-ui-state
```
[![NPM](https://nodei.co/npm/browser-ui-state.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/browser-ui-state/)

Don't be afraid of caret (^) in your package.json for this dependency - [semver](http://semver.org/) will [be](https://adambard.com/blog/on-library-versioning/) used [correctly](https://bytearcher.com/articles/semver-explained-why-theres-a-caret-in-my-package-json/) for [sure](https://medium.com/front-end-developers/versioning-you-re-doing-it-wrong-5522bb46431) :hand::expressionless: :one:.:zero:.:zero:.

## Usage
The library's API intended to be called whenever browser resize or orientation change happens:

```javascript
import BrowserUiState from 'browser-ui-state'
  
const browserUiState = new BrowserUiState()
  
const resizeHandler = () => {
    console.log(browserUiState.orientation) //LANDSCAPE or PORTRAIT
    console.log(browserUiState.state) //COLLAPSED or EXPANDED or KEYBOARD or other, see states.js below
}
  
window.addEventListener('load', resizeHandler)
window.addEventListener('resize', resizeHandler)
window.addEventListener('orientationchange', resizeHandler)
```
[states.js](https://github.com/TheBit/browser-ui-state/blob/master/src/browser-ui-state/state-providers/states.js) - 
see all supported states

Old school:
```javascript
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" 
        content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">

    <script type="text/javascript" src="https://unpkg.com/browser-ui-state"></script>
    <script>
        var browserUiState = new BrowserUiState.default()
        
        function resizeHandler() {
            console.log(browserUiState.orientation)
            console.log(browserUiState.state) 
        }
        
        window.addEventListener('load', resizeHandler)
        window.addEventListener('resize', resizeHandler)
        window.addEventListener('orientationchange', resizeHandler)
    </script>
</head>
<body>
</body>
</html>
```

### Detecting device orientation
You might wonder why this library also reports orientation.

Well... because it needs it for internal calculations and there is also a problem in Web to 
correctly determine current device's orientation: just check what your orientation media query
will report to you in portrait when on-screen keyboard is shown (and it resizes viewport like in Chrome).

There is [HTML5 Screen Orientation API](https://developer.mozilla.org/en/docs/Web/API/Screen/orientation) 
but it's [browser support](http://caniuse.com/#feat=screen-orientation) is similar to the one with HTML5 Fullscreen API.

## Advanced
Library also allows to access its internal calculations for whatever advanced usage:
```javascript
console.log(browserUiState.screenAspectRatio.toFixed(2))
//Wider side devided to narrower side (screen.width & screen.height)
  
console.log(browserUiState.viewportAspectRatio.toFixed(2))
//Same as above but for window.innerWidth & window.innerHeight
  
console.log(browserUiState.delta.toFixed(2))
//Absolute delta between the 2 above
  
console.log(`${browserUiState.deviation.toFixed(2)}%`)
//Deviation between delta and screen aspect ratio
  
console.log(`${browserUiState.collapsedThreshold}%`)
//Deviation threshold for current user agent to treat state as collapsed (with address bar visible)
  
console.log(`${browserUiState.keyboardThreshold}%`)
//Deviation threshold for current user agent to treat state as the one when on-screen keyboard is visible
```

## Dependencies
Only one: [Fscreen](https://github.com/rafrex/fscreen) - ~60 lines of 
[code](https://github.com/rafrex/fscreen/blob/master/src/index.js) (used for vendor agnostic access to the 
[Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API))

## Matrix of supported devices and browsers
See [Matrix](docs/MATRIX.md)

## Engine explanation
See [Engine](docs/ENGINE.md)