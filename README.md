# Browser UI State
[Live Demo](https://thebit.github.io/browser-ui-state/) - Open in Chrome, emulate to Nexus 5X and play with 
different modes
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
$ npm install --save ... //TBD
```

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
Only one: [Fscreen](https://github.com/rafrex/fscreen)

## Matrix of supported devices and browsers
<table>
  <thead>
    <tr>
      <th>Header content 1</th>
      <th>Header content 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="background-color:red">Body content 1</td>
      <td bgcolor="blue">Body content 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr bgcolor="#FF0000">
      <td>Footer content 1</td>
      <td>Footer content 2</td>
    </tr>
  </tfoot>
</table>

-- | Chrome | Samsung Browser | Android 4 Stock | Android 5 Stock | Android 6 Stock | Safari | UC
------------ | ------------- | -------------- | ------------- | -------------- | ------------- | -------------- | ------------- 
iPhone 7 | :white_check_mark: | :black_large_square: | :black_large_square: | :black_large_square: | :black_large_square: | :white_check_mark: | :black_large_square:
iPhone 6S Plus | :white_check_mark: | :black_large_square: | :black_large_square: | :black_large_square: | :black_large_square: | :white_check_mark: | :black_large_square:
iPhone 5S | :white_check_mark: | :black_large_square: | :black_large_square: | :black_large_square: | :black_large_square: | :white_check_mark: | :black_large_square:
-- | | | | | | | | 
iPad Pro | :white_check_mark: | :black_large_square: | :black_large_square: | :black_large_square: | :black_large_square: | :white_check_mark: | :black_large_square:
iPad Air | :white_large_square: | :black_large_square: | :black_large_square: | :black_large_square: | :black_large_square: | :white_large_square: | :black_large_square:
iPad Mini |