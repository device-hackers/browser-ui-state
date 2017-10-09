Feature: State Provider

  Scenario Outline: Unit testing each method of state-provider.js

    Given testing state provider with a user agent equals to <user-agent-string>
      And screen dimensions is <screen-w-l> x <screen-h-l>
      And window dimensions is <win-w-init-l> x <win-h-init-l>

    Then stateProvider.screenAspectRatio should be equal <screen-h-l>/<screen-w-l>
      And stateProvider.viewportAspectRatio should be equal <win-w-init-l>/<win-h-init-l>
      And orientation should be equal "LANDSCAPE"
      And delta should be equal |stateProvider.screenAspectRatio - stateProvider.viewportAspectRatio|
      And deviation should be equal stateProvider.delta / stateProvider.screenAspectRatio times 100
      And stateProvider.collapsedThreshold should be equal <th-l-col>
      And stateProvider.keyboardThreshold should be equal <th-l-key>
      And stateProvider.state should be equal "COLLAPSED"
      And stateProvider.viewportWidthAdjustedIfNeeded should be correct
      And stateProvider.isIphoneX should correspond to "<device>"

    When after swipe up window dimensions changes to <win-w-swiped-l> x <win-h-swiped-l>

    Then stateProvider.screenAspectRatio should be equal <screen-h-l>/<screen-w-l>
      And stateProvider.viewportAspectRatio should be equal <win-w-swiped-l>/<win-h-swiped-l>
      And orientation should be equal "LANDSCAPE"
      And delta should be equal |stateProvider.screenAspectRatio - stateProvider.viewportAspectRatio|
      And deviation should be equal stateProvider.delta / stateProvider.screenAspectRatio times 100
      And stateProvider.state should be equal "EXPANDED"


    When browser is rotated to portrait
      And screen dimensions changes to <screen-w-p> x <screen-h-p>
      And window dimensions changes to <win-w-init-p> x <win-h-init-p>

    Then stateProvider.screenAspectRatio should be equal <screen-h-p>/<screen-w-p>
      And stateProvider.viewportAspectRatio should be equal <win-h-init-p>/<win-w-init-p>
      And orientation should be equal "PORTRAIT"
      And delta should be equal |stateProvider.screenAspectRatio - stateProvider.viewportAspectRatio|
      And deviation should be equal stateProvider.delta / stateProvider.screenAspectRatio times 100
      And stateProvider.collapsedThreshold should be equal <th-p-col>
      And stateProvider.keyboardThreshold should be equal <th-p-key>
      And stateProvider.state should be equal "COLLAPSED"
      And stateProvider.viewportWidthAdjustedIfNeeded should be correct
      And stateProvider.isIphoneX should correspond to "<device>"

    When after swipe up window dimensions changes to <win-w-swiped-p> x <win-h-swiped-p>

    Then stateProvider.screenAspectRatio should be equal <screen-h-p>/<screen-w-p>
      And stateProvider.viewportAspectRatio should be equal <win-h-swiped-p>/<win-w-swiped-p>
      And orientation should be equal "PORTRAIT"
      And delta should be equal |stateProvider.screenAspectRatio - stateProvider.viewportAspectRatio|
      And deviation should be equal stateProvider.delta / stateProvider.screenAspectRatio times 100
      And stateProvider.state should be equal "EXPANDED"


  Examples:
    | device   | os-ver | ua-ver    | ua-mode | screen-w-l  | screen-h-l | win-w-init-l | win-h-init-l | win-w-swiped-l | win-h-swiped-l | screen-w-p  | screen-h-p | win-w-init-p | win-h-init-p | win-w-swiped-p | win-h-swiped-p | th-l-col | th-l-key | th-p-col | th-p-key | user-agent-string |
    | iPhone 7 | 10.2   | Safari 10 |         | 375         | 667        | 667          | 331          | 667            | 375            | 375         | 667        | 375          | 559          | 375            | 627            | 6.75     | 48.0     | 12.0     | 32.7     | "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/10.0 Mobile/14D27 Safari/602.1" |
    | iPhone X | 11.0   | Safari 11 |         | 375         | 812        | 724          | 325          | 667            | 375            | 375         | 812        | 375          | 635          | 375            | 748            | 6.75     | 48.0     | 12.0     | 32.7     | "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1" |
