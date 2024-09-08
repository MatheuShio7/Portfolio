const selectedLang = document.querySelector('.selected-lang');

const flag_selected_lang = document.querySelector('.selected-lang img')
const icon = document.querySelector('.selected-lang i')
const language_menu = document.querySelector('.lang-menu ul')

const pt_br_container = document.querySelector('.pt-br')
const pt_br_title = pt_br_container.querySelector('a');

const english_container = document.querySelector('.english')
const english_title = english_container.querySelector('a');

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
        this.document.querySelector('.techs_hr').style.width = '43%'

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

function openMenu() {
    language_menu.classList.toggle('show')
}

function closeMenu() {
    language_menu.classList.remove('show')
}

selectedLang.addEventListener('click', function(event) {
    icon.classList.toggle('rotate')
    openMenu()
})

// Close menu on click
document.addEventListener('click', function(event) {
    if (!language_menu.contains(event.target) && !selectedLang.contains(event.target)) {
        icon.classList.toggle('rotate')
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