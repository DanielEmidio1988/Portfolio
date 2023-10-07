const dataSkills = [
    {title: 'HTML',
    percentage: 90},
    {title: 'CSS',
    percentage: 90},
    {title: 'JavaScript',
    percentage: 90},
    {title: 'BootStrap',
    percentage: 70},
    {title: 'AppScript',
    percentage: 80},
    {title: 'TypeScript',
    percentage: 70},
    {title: 'HubSpotCMS',
    percentage: 70},
    {title: 'WordPress',
    percentage: 60},
    {title: 'ReactJs',
    percentage: 80},
    {title: 'NextJs',
    percentage: 60},
    {title: 'MongoDB',
    percentage: 60},
    {title: 'SQLite',
    percentage: 70},
    {title: 'Jest',
    percentage: 50},
    {title: 'Java',
    percentage: 40},
    {title: 'Kotlin',
    percentage: 40},
]

const dataPortfolio = [
    {title: 'LP - Unycos',
    category: 'FrontEnd',
    previewImg: './assets/layoutUnycos.png',
    link: 'https://github.com/DanielEmidio1988/unycos',
    },
    {title: 'Athena',
    category: 'FrontEnd',
    previewImg: './assets/layoutAthena.png',
    link: 'https://github.com/DanielEmidio1988/athena',
    },
    {title: 'dFood',
    category: 'BackEnd',
    previewImg: './assets/layoutDFood.png',
    link: 'https://github.com/DanielEmidio1988/dFood',
    },
    {title: 'Labeddit',
    category: 'FullStack',
    previewImg: './assets/layoutLabeddit.png',
    link: 'https://github.com/DanielEmidio1988/Labeddit-FrontEnd',
    },
    {title: 'Yu-gi-oh Card Shop',
    category: 'FullStack', 
    previewImg: './assets/layoutYGOShop.png',
    link: 'https://github.com/DanielEmidio1988/yu-gi-oh-shop-card',
    },
    {title: 'Pokedex',
    category: 'FrontEnd',
    previewImg: './assets/layoutPokedex.png',
    link: 'https://github.com/DanielEmidio1988/pokedex',
    },
]

function toggleMenu() {
    let menu = document.getElementById("main-options-menu");
    menu.classList.toggle("visible");
}

function ligaDesliga() {
    let imagem = document.getElementById('iconLamp')
    let container = document.getElementById('container')
    let h1 = document.getElementById('h1')
    let texto = document.getElementById('texto')
    const logoDark = "./assets/logo-top-dark.svg"
    const logoLight = "./assets/logo-top-light.svg"
    if (imagem.className === "on") {
        document.getElementById('iconLamp').src = logoDark
        imagem.className = 'off'
        container.className = 'container-off'
        h1.className = 'h1Off'
        texto.className = 'textoOff'

    } else {
        document.getElementById('iconLamp').src = logoLight
        imagem.className = 'on'
        container.className = 'container-on'
        h1.className = 'h1On'
        texto.className = 'textoOn'
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function browserSkills(){
    const section = document.querySelector('.skills-info')

    dataSkills.forEach((skill)=>{
        const data = document.createElement('div')
        data.classList.add('skill')
        data.innerHTML = `
            <p>${skill.title}</p>
            <div class="bar-progress">
                <div class="bg-bar-progress bar-progress-${skill.title}">
                </div>
            </div> 
        `
        section.appendChild(data)
    })
}

function browserPortfolio(){
    const section = document.querySelector('.main-projects-options')

    dataPortfolio.forEach((portfolio)=>{
        const card = document.createElement('div')
        card.classList.add('card_project')
        card.setAttribute('onclick', `window.open('${portfolio.link}')`, '_blank')
        card.setAttribute('data-anime', 'bottom')
        card.innerHTML = `
        <div class="card_project_img">
            <img src="${portfolio.previewImg}" alt="projeto "/>
        </div>
        <div class="card_project_about">
            <h3>${portfolio.title}</h3>
            <p>${portfolio.category}</p>
        </div>
        `

        section.appendChild(card)
    })
}

function boxTop(idBox){
    const box = document.querySelector(idBox)
    const boxPosition = box.getBoundingClientRect()
    return boxPosition.top + window.scrollY
}

function handleScroll() {
    console.log('init')
    const documentTop = window.scrollY;

    ['presentation-about', 'presentation-photo', 'experience-logo', 'box-skills-title', 'skills-info', 'box-experience','portfolio-title', 'main-projects-options', 'portfolio-cta', 'footer'].forEach(id => {
        const element = document.getElementById(id);

        if (element) {
            const boxTopPosition = boxTop(`#${id}`);
            if (documentTop > boxTopPosition - 500) {
                element.classList.add('animation-on');
            } 
        }
    });
}
window.addEventListener('scroll', handleScroll)

handleScroll()

window.onload = function(){
    browserSkills()
    browserPortfolio()
    
    
}