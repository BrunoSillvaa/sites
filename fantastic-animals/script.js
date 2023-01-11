function initTabNav() {
    const tabList = document.querySelectorAll('.js-tablist li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')

    // Verifies if exists section content
    if (tabList.length && tabContent.length) {
        tabContent[0].classList.add('active')

        function tabActive(index) {
            // Removes the 'Active' class from all elements
            tabContent.forEach((item) => {
                item.classList.remove('active')
            })
            // Adds the 'active' class in the descriticion of the selected image
            tabContent[index].classList.add('active')
        }

        tabList.forEach((item, index) => {
            item.addEventListener('click', () => {
                tabActive(index)
            })
        })
    }
}
initTabNav()

function initAccordion() {
    const faqQuestion = document.querySelectorAll('.js-accordion dt')
    const activeClass = 'active'

    // Verifies if exists descriptions
    if (faqQuestion.length) {
        faqQuestion[0].classList.add(activeClass)
        faqQuestion[0].nextElementSibling.classList.add(activeClass)
    
        function openQuestion() {
            this.classList.toggle(activeClass)
            this.nextElementSibling.classList.toggle(activeClass)
        }

        faqQuestion.forEach((question) => {
            question.addEventListener('click', openQuestion)
        })
    }
}
initAccordion()