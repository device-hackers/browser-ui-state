import BrowserUiState from "../../src/browser-ui-state/index";

var {defineSupportCode} = require('cucumber');

defineSupportCode(function(context) {
    var setWorldConstructor = context.setWorldConstructor;
    var Given = context.Given
    var When = context.When
    var Then = context.Then

    var CustomWorld = function() {};

    CustomWorld.prototype.scr = { width: 0, height: 0}
    CustomWorld.prototype.wnd = { innerWidth: 0, innerHeight: 0}

    CustomWorld.prototype.browserUiState = null;

    CustomWorld.prototype.setTo = function(number) {
        this.variable = parseInt(number);
    };

    CustomWorld.prototype.incrementBy = function(number) {
        this.variable += parseInt(number);
    };

    setWorldConstructor(CustomWorld);

    Given('a user agent equals to {string}', function (string) {
        console.log('BG: ', string)
        this.browserUiState = new BrowserUiState(string, this.scr, this.wnd)
    });

    Given('screen object equals to {string}', function (string) {
        console.log(string)
        this.scr.width = string.width
        this.scr.height = string.height
    });

    Given('window object equals to {string}', function (string) {
        console.log('1st window is ', string)
        console.log('1st innerHeight is ', /(innerHeight)/.search(string))
        this.wnd.innerWidth = string.innerWidth
        this.wnd.innerHeight = string.innerHeight
    });

    When('window object changes to {string}', function (string) {
        console.log('2nd window is ', string)
        console.log('2nd innerHeight is ', string.innerHeight)
        this.wnd.innerWidth = string.innerWidth
        this.wnd.innerHeight = string.innerHeight
    });

    Then('browser ui state should be {string}', function (string) {
        console.log(this.browserUiState.state)
    });
})