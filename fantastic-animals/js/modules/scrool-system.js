export default function scrollSystem() {
    const menuList = document.querySelectorAll('[data-menu="soft"] a[href^="#"]')

    function scrollToSection(event) {
        event.preventDefault()

        const href = this.getAttribute('href')
        const section = document.querySelector(href)

        section.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
        })
    }

    menuList.forEach((menuItem) => {
        menuItem.addEventListener('click', scrollToSection)
    })
}