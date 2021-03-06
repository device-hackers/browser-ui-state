# Synopsis
- Idea behind this spreadsheet is to write down mobile browsers readings in context of screen and viewport dimensions.

- So that it will be possible to calculate (in this very spreadsheet) the aspect ratio, its delta and deviation between 
ideal screen and current viewport dimensions.

- To then find min and max of derivative within each unique browser per each its unique mode (initial, after swiping up, 
after switching to browser proprietary full screen, after on screen keyboard is shown, etc).

- So then having min and max - declare appropriate min and max thresholds to identify current browser state (does 
browser panels currently displayed, or does they hidden after swiping up or after switching to proprietary full screen 
mode, or does on-screen keyboard is currently displayed (if it resizes viewport, otherwise it won't be possible to 
identify it)).

- And providing this browser state as public API to developers will allow them to implement full screen solutions e.g.: 
displaying overlay (only when needed) with text like 'Please swipe up to use this web app'.


# Terminology
- **Aspect ratio** - wider side divided to narrower side.
- **Screen dimensions** - screen.width x screen.height, ideal screen size defined by manufacturer.
- **Viewport dimensions** - window.innerWidth x window.innerHeight - current window size which depends on current 
browser UI state (address bar, on-screen keyboard, etc).


# Illustration
![Engine illustration](assets/swipe-up.jpg)

# Design decisions
1. Unfortunately cross-browser solution is not possible due to unresolvable collisions, so design should rely on 
threshold values calculated for each browser separately.

1. Same browsers but on different operating systems may also introduce collisions, so in such cases it may be 
needed to split same browser for different OS, e.g.: Chrome 57 on Nexus 7 2013 Android 5.1 has deviation of 39.4% 
for initial state and 13.8% after swiping up; but Chrome 50 on iPad Pro iOS 9.3 has 12.8% and 2.3% respectively. 
Which means if you want to display 'swipe up' on both these run-time environments you will have to split threshold 
for at least Android Chrome and iOS Chrome so that they does not collide. Even though there is no real sense to disturb 
users with 'swipe up' on iPads due to enough of screen space, but this library is not an 'swipe up' implementation but 
just 'browser UI state reporter' so it is up to consumers of this API is to decide wether to show or not 'swipe up' 
on iPads.

1. Thresholds should also be differentiated per landscape and portrait due to collisions.

1. Unfortunately even within Android Chrome browser group - there are unresolvable collisions which have to be 
addressed on per conflict device matter (e.g. Galaxy Note Edge)
