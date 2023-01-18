export default function clickOutside(element, events, callback) {
    const html = document.documentElement
    const outside = 'data-outside'

    if (!element.hasAttibute(outside)) {
        events.forEach(userEvent => {
            html.addEventListener(userEvent, removeside)
        })
        element.setAttribute(outside, '')
    }

    function removeside(event) {
        if (!element.contains(event.target)) {
            element.removeAttribute(outside)
            events.forEach(userEvent => {
                html.removeEventListener(userEvent, removeside)
            })
            callback()
        }
    }
}