import clickOutside from "./click-outside.js"

export default function dropDownMenu() {
    const dropdownItens = document.querySelectorAll('[data-dropdown]')
    

    dropdownItens.forEach(dropdownItem => {
        ['touchstart', 'click'].forEach(userEvent => {
            dropdownItem.addEventListener(userEvent, toggleDropDown)
        })
    })
    
    function toggleDropDown(event) {
        event.preventDefault()
    
        this.classList.toggle('ativo')
        clickOutside(this, ['touchstart', 'click'], () => {
            this.classList.remove('ativo')
        })
    }
}