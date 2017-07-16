# Browser UI State
Unfortunately browsers does not provide any API to allow us to determine their UI state in context of address or other bars visibility, on-screen keyboard presence, etc.

Such need exist for [SPAs](https://en.wikipedia.org/wiki/Single-page_application) (usually games or video content) which does not have long body to scroll through so that browser UI disappears. So they need some way to "expand" the browser to some kind of "full screen" to provide immersive user-experience. 

There is [HTML5 Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API) to solve this problem, but [it is not supported cross-browser](http://caniuse.com/#feat=fullscreen) (for example not supported in iOS or Android stock browser).

Fortunately with the help of a bit of mathematics, spreadsheets and some gathered browser's statistics - it is possible to determine the state by calculating deviation between current viewport aspect ratio (reported by window.innerWidth and height) and static screen aspect ratio (reported by screen.width and height).

This, being packaged into library, allows to build on top of it cross-browser full screen solutions like displaying overlay (only when needed) with message to the user e.g. "To use this app please swipe up the page".

This very library does not provide (and does not intended to) any out-of-the-box full screen solutions.

[Live Example](http://to.be.done)

## Installation
```shell
$ npm install --save ... //TBD
```

## Usage
The library's API intended to be called whenever browser resize or orientation change happens:

```javascript
import BrowserUiState from 'browser-ui-state'
  
const browserUiState = new BrowserUiState()
  
const resizeHandler = () => {
    console.log(browserUiState.orientation) //LANDSCAPE or PORTRAIT
    console.log(browserUiState.state) //COLLAPSED or EXPANDED or KEYBOARD or other, see states.js
}
  
window.addEventListener('load', resizeHandler)
window.addEventListener('resize', resizeHandler)
window.addEventListener('orientationchange', resizeHandler)
```

## Advanced
Library also allows to access its internal calculations for whatever advanced usage:
```javascript
console.log(browserUiState.screenAspectRatio.toFixed(2)) //Wider side devided to narrower side (screen.width & screen.height)
console.log(browserUiState.viewportAspectRatio.toFixed(2)) //Same as above but for window.innerWidth & window.innerHeight
console.log(browserUiState.delta.toFixed(2)) //Absolute delta between the 2 above
console.log(`${browserUiState.deviation.toFixed(2)}%`) //Deviation between delta and screen aspect ratio
console.log(`${browserUiState.collapsedThreshold}%`) //Deviation threshold for current user agent to treat state as collapsed (with address bar visible, usually initial)
console.log(`${browserUiState.keyboardThreshold}%`) //Deviation threshold for current user agent to treat state as the one when on-screen keyboard is visible
```