export default function clickOutside(element, events, callback) {
    const html = document.documentElement
    const outside = 'data-outside'

    // Verifica se o atributo outside existe no elemento
    if (!element.hasAttribute(outside)) {
        events.forEach(userEvent => {
            html.addEventListener(userEvent, removeOutside)
        })

        element.setAttribute(outside, '')
    }

    function removeOutside(event) {
        // Verifica se o clique foi fora do dropdown menu
        if (!element.contains(event.target)) {
            element.removeAttribute(outside)
            events.forEach(userEvent => {
                html.removeEventListener(userEvent, removeOutside)
            })
            callback()
        }
    }
}