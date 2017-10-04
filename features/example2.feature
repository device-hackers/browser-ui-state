Feature: Galaxy S3, Chrome

  Background:
    Given a user agent equals to "Mozilla/5.0 (Linux; Android 4.3; GT-I9300 Build/JSS15J) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.85 Mobile Safari/537.36"

  Scenario: Landscape, before swipe up
    Given screen object equals to "{ width: 640, height: 360 }"
    And window object equals to "{ innerWidth: 640, innerHeight: 279}"
    Then browser ui state should be "COLLAPSED"
    When window object changes to "{ innerWidth: 640, innerHeight: 335}"
    Then browser ui state should be "EXPANDED"