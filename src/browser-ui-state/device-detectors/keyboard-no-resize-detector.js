export default class KeyboardNoResizeDetector {
    constructor(win) {
        this.keyboardShown = false
        win.document.documentElement.addEventListener('focus', getKeyboardShownHandler(true).bind(this), true)
        win.document.documentElement.addEventListener('blur', getKeyboardShownHandler(false).bind(this), true)
        win.document.documentElement.addEventListener('focusout', getKeyboardShownHandler(false).bind(this), true)

        function getKeyboardShownHandler(shown) {
            return function (e) {
                if (isEditableInput(e.target) && !isEditableInput(e.relatedTarget)) {
                    this.keyboardShown = shown
                    win.dispatchEvent(new Event('resize'))
                }
            }
        }

        function isEditableInput(element) {
            if (!element) {
                return false
            }

            let type = element.getAttribute('type')
            let ignoredTypes = ['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'reset', 'submit']
            let tagName = element.tagName.toLowerCase()

            return (tagName === 'textarea' || tagName === 'select' ||
                (tagName === 'input' && ignoredTypes.indexOf(type) === -1))
        }
    }
}