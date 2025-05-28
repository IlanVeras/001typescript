"use strict";
// function soma(a:number, b:number, c?:number): number{
//     if(c){
//         return a + b + c
//     }
//     return a + b
// }
//função que recebe um valor que pode ser string ou number e retorna um valor que pode ser string ou number
function arredonda(valor) {
    //se o tipo do valor repassado for number
    if (typeof valor === "number") {
        //arredondar para cima esse valor
        return Math.ceil(valor);
    }
    //se o tipo repassado for string
    //converter esse valor para number
    valor = Number(valor);
    //depois retornar esse valor arredondado para cima como string
    return String(Math.ceil(valor));
}
console.log(arredonda("7.89").length);
console.log(arredonda(2.3).toPrecision());
