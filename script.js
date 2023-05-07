function toggleMenu() {
    let menu = document.getElementById("main-options-menu");
    menu.classList.toggle("visible");
}

    function ligaDesliga(){
    let imagem = document.getElementById('iconLamp')
    let container = document.getElementById('container')
    let h1 = document.getElementById('h1')
    let texto= document.getElementById('texto')
    const logoDark = "./assets/logo-top-dark.svg"
    const logoLight = "./assets/logo-top-light.svg"
    if(imagem.className === "on"){
        document.getElementById('iconLamp').src = logoDark
        imagem.className='off'
        container.className='container-off'
        h1.className='h1Off'
        texto.className='textoOff'

    }else{
        document.getElementById('iconLamp').src = logoLight
        imagem.className='on'
        container.className='container-on'
        h1.className='h1On'
        texto.className='textoOn'
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }