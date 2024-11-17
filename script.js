// Navigation header items scroll function
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        const targetId = this.getAttribute('href')
        const targetSection = document.querySelector(targetId)

        event.preventDefault()

        const headerHeight = document.querySelector('header').offsetHeight;
        const sectionPosition = targetSection.offsetTop - headerHeight;

        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });

        history.replaceState(null, '', ' ') // clean URL
    })
})

// Progress Bar
function updateProgressBar() {
    const {scrollTop, scrollHeight} = document.documentElement
    const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%'
    document.querySelector('.progress-bar').style.setProperty('--progress', scrollPercent)
}

document.addEventListener('scroll', updateProgressBar) 

// Language
const language_icon = document.querySelector('.selected-language')

const flagSelectedLanguage = document.querySelector('.selected-language img')
const icon = document.querySelector('.selected-language i')
const language_menu = document.querySelector('.language-menu ul')

var languageMenuOpen = false

function openMenu() {
    language_menu.classList.toggle('show')
    languageMenuOpen = true
}

function closeMenu() {
    language_menu.classList.remove('show')
    languageMenuOpen = false
}

// Add event click to language menu
language_icon.addEventListener('click', function() {
    icon.classList.toggle('rotate')
    openMenu()
})

// Close menu on document click
document.addEventListener('click', function(event) {
    if (!language_menu.contains(event.target) && !language_icon.contains(event.target)) {
        if (languageMenuOpen) {
            icon.classList.toggle('rotate')
        }
        closeMenu()
    }
})

// Portuguese selected
const pt_br_container = document.querySelector('.pt-br')
const pt_br_title = pt_br_container.querySelector('a')

pt_br_container.addEventListener('click', function() {
    flagSelectedLanguage.src = 'images/brazil.png'

    icon.classList.remove('rotate')
    language_menu.classList.remove('show')

    document.querySelectorAll('.language-menu ul li a').forEach(link => {
        link.classList.remove('selected')
    });

    pt_br_title.classList.add('selected')
    localStorage.setItem('language', 'pt-br')
    location.reload(true)
})


// English selected
const english_container = document.querySelector('.english')
const english_title = english_container.querySelector('a')

document.querySelector('.english').addEventListener('click', function() {
    const flagSelectedLanguage = document.querySelector('.selected-language img')
    flagSelectedLanguage.src = 'images/usa.png'

    icon.classList.toggle('rotate')

    language_menu.classList.toggle('show')

    document.querySelectorAll('.language-menu ul li a').forEach(link => {
        link.classList.remove('selected');
    });

    english_title.classList.add('selected')
    localStorage.setItem('language', 'english')
    location.reload(true)
})

// Translation
window.addEventListener('load', function() {
    const selectedLanguage = localStorage.getItem('language')
       
    if (selectedLanguage === 'pt-br') {
        pt_br_title.classList.add('selected')
        flagSelectedLanguage.src = 'images/brazil.png'

        this.document.querySelector('.about-item').innerHTML = 'Sobre'
        this.document.querySelector('.projects-item').innerHTML = 'Projetos'
        this.document.querySelector('.contact-item').innerHTML = 'Contato'

        this.document.querySelector('.about-title').innerHTML = 'Sobre'
        this.document.querySelector('.about-section p').innerHTML = 'Sou <span>Matheus Shiokawa Silva</span>, estudante do 4º semestre de Ciência da Computação, tenho interesse em <span>desenvolvimento de software</span>. Nascido em Framingham, Massachusetts e atualmente morando no Brasil, estou constantemente explorando novas tecnologias e ampliando meus conhecimentos através de cursos e experiências práticas. Almejo criar <span>soluções de software inovadoras</span> que possam impactar positivamente a sociedade.'
        this.document.querySelector('.skills-title').innerHTML = 'Habilidades'

        this.document.querySelector('.projects-title').innerHTML = 'Projetos'

        this.document.querySelector('.stocks-tracker-text').innerHTML = 'Stocks Tracker é uma plataforma para monitorar seu portfólio de ativos em tempo real. Habilitando o cadastro e obtendo dados importantes como histórico de preços e os últimos 12 ganhos daquele ativo em formato de gráfico. Software disponível em inglês, chinês e português. Todos os dados obtidos através do <a href="https://finance.yahoo.com/" target="_blank">Yahoo Finance</a>.'

        this.document.querySelector('.event-manager-text').innerHTML = 'O Event Manager é uma aplicação web que permite criar, gerenciar e participar de eventos. Desenvolvido com Django, HTML, CSS e JavaScript, o projeto utiliza SQLite como banco de dados e inclui funcionalidades como cadastro, login, compartilhamento de links e controle de visibilidade dos eventos.'

        this.document.querySelector('.seeOnGit-btn').innerHTML = 'Ver no GitHub'

        this.document.querySelector('.contact-title').innerHTML = 'Contato'
        this.document.querySelector('.btn-cv').innerHTML = 'Baixar CV'
        this.document.querySelector('.btn-cv').href = 'images/CV(pt-br).pdf'
    } else {
        english_title.classList.add('selected')
        flagSelectedLanguage.src = 'images/usa.png'
    }
})