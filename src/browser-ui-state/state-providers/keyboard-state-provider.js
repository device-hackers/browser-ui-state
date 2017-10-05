import StateProvider from './state-provider'
import States from "./states";

export default class KeyboardStateProvider extends StateProvider {
    constructor(win, thresholds) {
        super(win, thresholds)
    }

    get state() {
        if (this._win.navigator.standalone) {
            return States.SAFARI_HOMESCREEN
        } else {
            return super.state
        }
    }

    _handleKeyboard() {
        this._win.document.documentElement.addEventListener('focus', getKeyboardShownHandler(true).bind(this), true);
        this._win.document.documentElement.addEventListener('blur', getKeyboardShownHandler(false).bind(this), true);
        this._win.document.documentElement.addEventListener('focusout', getKeyboardShownHandler(false).bind(this), true);

        function getKeyboardShownHandler(shown) {
            return function (e) {
                if (isEditableInput(e.target) && !isEditableInput(e.relatedTarget)) {
                    this._keyBoardShown = shown
                    this._win.dispatchEvent(new Event('resize'));
                }
            }
        }

        function isEditableInput(element) {
            if (!element) {
                return false;
            }

            let type = element.getAttribute('type');
            let ignoredTypes = ['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'reset', 'submit'];
            let tagName = element.tagName.toLowerCase();

            return (tagName === 'textarea' || tagName === "select" ||
                (tagName === 'input' && ignoredTypes.indexOf(type) === -1));
        }
    }
}