const links = document.querySelectorAll('.link')
console.log(links)
links.forEach((link) => {
    // if(link instanceof HTMLAnchorElement){
    //     console.log(link)
    //     link.style.color = 'green'
    // }else{
    //     if(link instanceof HTMLButtonElement){
    //         link.style.border = '1px solid red'
    //     }
    // }
    // console.dir(link)
    if(link instanceof HTMLElement){
        mudaElemento(link)
    }
})

function mudaElemento(e:HTMLElement){
    e.style.color = 'red'
    e.style.border = '1px solid red'
}