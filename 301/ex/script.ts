let link = document.getElementById('origamid')
//apesar do código abaixo funcionar, vemos que o TypeScript revela erros, pois caso o valor retornado do getElementById fosse null ele não poderia ser executado
// link.href = link.href.replace('http://', 'https//')
// console.log(link)

//então por isso devemos primeiro verificar se link é uam intância de HTMLAnchorElemnt, que é uma classe da tag <a/>, se essa verificação for verddeira o código será executado, e se for falsa ele não trará nenhum erro
if(link instanceof HTMLAnchorElement){
    link.href = link.href.replace('http://', 'https//')
    console.dir(link)
}