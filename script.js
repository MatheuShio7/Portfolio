const selectedLang = document.querySelector('.selected-lang');

const flag_selected_lang = document.querySelector('.selected-lang img')
const icon = document.querySelector('.selected-lang i')
const language_menu = document.querySelector('.lang-menu ul')

const pt_br_container = document.querySelector('.pt-br')
const pt_br_title = pt_br_container.querySelector('a');

const english_container = document.querySelector('.english')
const english_title = english_container.querySelector('a');

/*

// Scrollbar
let progress = document.querySelector('.progress-bar')
let totalHeight = document.body.scrollHeight - window.innerHeight

window.onscroll = function() {
    let progressHeight = (window.scrollY / totalHeight) * 100
    progress.style.height = progressHeight + "%"
}
    
*/

// Header items
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        const targetId = this.getAttribute('href')
        const targetSection = document.querySelector(targetId)
        
        event.preventDefault()
        
        targetSection.scrollIntoView({ behavior: 'smooth' })
        
        history.replaceState(null, '', ' ')
    })
})

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

function activateLinkOnScroll() {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', activateLinkOnScroll)

// Translation
window.addEventListener('load', function() {
    const selectedLanguage = localStorage.getItem('language')
       
    if (selectedLanguage === 'pt-br') {
        pt_br_title.classList.add('selected')
        flag_selected_lang.src = 'images/brazil.png'

        this.document.querySelector('.about-item').innerHTML = 'Sobre'
        this.document.querySelector('.projects-item').innerHTML = 'Projetos'
        this.document.querySelector('.contact-item').innerHTML = 'Contato'

        this.document.querySelector('.about-tittle').innerHTML = 'Sobre'
        this.document.querySelector('#about p').innerHTML = 'Sou <span>Matheus Shiokawa Silva</span>, estudante do 4º semestre de Ciência da Computação, tenho interesse em <span>desenvolvimento de software</span>. Nascido em Framingham, Massachusetts e atualmente morando no Brasil, estou constantemente explorando novas tecnologias e ampliando meus conhecimentos através de cursos e experiências práticas. Almejo criar <span>soluções de software inovadoras</span> que possam impactar positivamente a sociedade.'
        this.document.querySelector('.skills-title').innerHTML = 'Habilidades'

        // Verify here
        const techsHr = document.querySelector('.techs_hr');

        if (techsHr) {
            if (window.innerWidth <= 320) {
                techsHr.style.width = '155px'
            } else if (window.innerWidth <= 768) {
                techsHr.style.width = '155px'
            } else {
                techsHr.style.width = '180px'
            }
        }

        this.document.querySelector('.projects-tittle').innerHTML = 'Projetos'
        this.document.querySelector('.stock-tracker-div p').innerHTML = 'Stock Tracker é uma plataforma para monitorar seu portfólio de ativos em tempo real. Habilitando o cadastro e obtendo dados importantes como histórico de preços e os últimos 12 ganhos daquele ativo em formato de gráfico. Software disponível em inglês, chinês e português. Todos os dados obtidos através do <a href="https://finance.yahoo.com/" target="_blank">Yahoo Finance</a>.'
        this.document.querySelector('.seeongit-btn').innerHTML = 'Ver no GitHub'

        this.document.querySelector('.contact-tittle').innerHTML = 'Contato'
        this.document.querySelector('.btn-cv').innerHTML = 'Baixar CV'
        this.document.querySelector('.btn-cv').href = 'images/CV(pt-br).pdf'
    } else {
        english_title.classList.add('selected')
        flag_selected_lang.src = 'images/usa.png'
    }
})

var openLanguageMenu = false

function openMenu() {
    language_menu.classList.toggle('show')
    openLanguageMenu = true
}

function closeMenu() {
    language_menu.classList.remove('show')
    openLanguageMenu = false
}

// Add event click to language menu
selectedLang.addEventListener('click', function(event) {
    icon.classList.toggle('rotate')
    openMenu()
})

// Close menu on document click
document.addEventListener('click', function(event) {
    if (!language_menu.contains(event.target) && !selectedLang.contains(event.target)) {
        if (openLanguageMenu) {
            icon.classList.toggle('rotate')
        }
        closeMenu()
    }
})

// Portuguese selected
pt_br_container.addEventListener('click', function() {
    flag_selected_lang.src = 'images/brazil.png'

    icon.classList.remove('rotate')
    language_menu.classList.remove('show')

    document.querySelectorAll('.lang-menu ul li a').forEach(link => {
        link.classList.remove('selected');
    });

    pt_br_title.classList.add('selected')
    localStorage.setItem('language', 'pt-br');
    location.reload(true);
})

// English selected
document.querySelector('.english').addEventListener('click', function() {
    const flag_selected_lang = document.querySelector('.selected-lang img')
    flag_selected_lang.src = 'images/usa.png'

    icon.classList.toggle('rotate')

    language_menu.classList.toggle('show')

    document.querySelectorAll('.lang-menu ul li a').forEach(link => {
        link.classList.remove('selected');
    });

    english_title.classList.add('selected')
    localStorage.setItem('language', 'english');
    location.reload(true);
})