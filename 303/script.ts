const btnM = document.getElementById('btn-mobile')
const navBar = document.getElementById('nav')


function handleClick(event: MouseEvent){
    console.log('BOTÃO FUNCIONA')
    const expanded = btnM?.getAttribute('aria-expanded')
    const abreFecha = btnM?.getAttribute('aria-label')
    console.log(expanded)
    if(navBar?.classList.contains('active')){
        navBar.classList.remove('active')
        btnM?.setAttribute('aria-label', 'Abrir Menu')
        console.log(expanded)
        console.log(abreFecha)
    }else{
        navBar?.classList.add('active')
        btnM?.setAttribute('aria-expanded', 'true')
        btnM?.setAttribute('aria-label', 'Fechar Menu')
        console.log(expanded)
        console.log(abreFecha)
    }
}

btnM?.addEventListener('click', handleClick)