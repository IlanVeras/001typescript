"use strict";
// function retorno<variavel>(a:variavel) : variavel{
//     return a
// }
// console.log(retorno('a'))
// console.log(retorno(1))
// console.log(retorno(['banana', 'maçã', 'tangerina']))
// console.log(retorno({nome:'ilan',sobrenome:'veras',idade:21}))
// console.log(retorno(true))
// const numeros = [1,2,3,4,5,6,7,8,9]
// const frutas = ["Banana", "Pêra", "Uva", 'Laranja', "Limão", "Maçã"]
// //                 TIPO do que       Tipo do que   Tipo do que
// //                 está dentro       a função      a função
// //                 da lista          recebe        retorna
// function firstFive<TipoLista>(lista: TipoLista[]) : TipoLista[]{
//     return lista.slice(0, 5)
// }
// console.log(firstFive(frutas))
// console.log(firstFive(numeros))
function extractText(el) {
    return {
        texto: el.innerText,
        el
    };
}
const link = document.getElementById('origamid');
if (link) {
    console.log(extractText(link));
}
