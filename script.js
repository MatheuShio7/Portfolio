const flag_selected_lang = document.querySelector('.selected-lang img')
const icon = document.querySelector('.selected-lang i')
const lang_menu = document.querySelector('.lang-menu ul')

const pt_br_container = document.querySelector('.pt-br')
const pt_br_title = pt_br_container.querySelector('a');

const english_container = document.querySelector('.english')
const english_title = english_container.querySelector('a');

window.addEventListener('load', function() {
    english_title.classList.add('selected')
})

// Open n close language menu
document.querySelector('.selected-lang').addEventListener('click', function() {
    icon.classList.toggle('rotate')
    lang_menu.classList.toggle('show')
})

pt_br_container.addEventListener('click', function() {
    flag_selected_lang.src = 'images/brazil.png'

    icon.classList.remove('rotate')
    lang_menu.classList.remove('show')

    document.querySelectorAll('.lang-menu ul li a').forEach(link => {
        link.classList.remove('selected');
    });

    pt_br_title.classList.add('selected')
})

document.querySelector('.english').addEventListener('click', function() {
    const flag_selected_lang = document.querySelector('.selected-lang img')
    flag_selected_lang.src = 'images/usa.png'

    icon.classList.toggle('rotate')

    lang_menu.classList.toggle('show')

    document.querySelectorAll('.lang-menu ul li a').forEach(link => {
        link.classList.remove('selected');
    });

    english_title.classList.add('selected')
})