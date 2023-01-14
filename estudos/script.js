const techname = document.querySelectorAll('.tech-name')
const techitens = document.querySelectorAll('.tech-itens')

function showInfo() {
    this.nextElementSibling.classList.toggle('ativo')
    this.classList.toggle('ativo')
}

techname.forEach(item => {
    item.addEventListener('click', showInfo)
})