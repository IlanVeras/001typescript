"use strict";
//ex 01
function getLast(lista) {
    //retorna o ultimo item utilizando o tamanho da lista subtraído de um
    return lista[lista.length - 1];
}
const l1 = ['Elphaba', 'Glinda', 'Emerald City', 'Oz', 'Munchkin', 'Elphaba', 'Glinda', 'Emerald City', 'Oz', 'Munchkin', 'Elphaba', 'Oz', 'Elphaba', 'Glinda', 'Munchkin', 'Munchkin'];
// console.log(getLast(l1))
//ex 02
function toList(item) {
    //retorna um array com apenas um item
    return [item];
}
// console.log(toList('Dr. Dillamon'))
//ex03
//1)são declarados os tipos T, o 2)tipo é usado para declarar o que o parâmetro espera 3) e é esperado que a função retorn um boolean
function isEmpty(lista) {
    if (lista.length > 0) {
        return false;
    }
    return true;
}
// console.log(isEmpty([]))
//ex04
//1) é declarado um tipo genérico, 2) o tipo genérico é utilizado para determinar o que os parâmetros das funções devem esperar sendo o primeiro parâmetro um array e o segundo um tipo genérico qualquer já que pode ser um number, string, booolean etc.. 3) é esperado que essa fuunção retorne um number
function countItem(lista, item) {
    let count = 0;
    for (let i = 0, n = lista.length; i < n; i++) {
        if (lista[i] === item) {
            count += 1;
        }
    }
    return count;
}
// console.log(countItem(l1,'Elphaba'))
//ex05
function firstTwo(lista) {
    if (lista.length > 1) {
        return [lista[0], lista[1]];
    }
    return [];
}
// console.log(firstTwo(l1))
//ex 06
function reverseList(lista) {
    if (lista.length > 1) {
        return [...lista].reverse();
    }
    return [];
}
// console.log(reverseList([1,2,3,4,5]))
//ex 07
function removeItem(lista, item) {
    if (lista.length > 1) {
        return lista.filter((e) => e != item);
    }
    return [];
}
const frutas = ["Maçã", "Pêra", "Maçã", "Uva"];
// console.log(removeItem(frutas,'Maçã'))
//ex 08
function isEqual(a, b) {
    if (a === b) {
        return true;
    }
    return false;
}
// ex 09
// function stringiFyAll<T>(lista: T[]): string[]{
//     if(lista.length > 1){
//         return lista.map((e) => e.toString())
//     }
// }
// console.log(stringiFyAll([1,2,3]))
// ex 10
function contantFunction(valor) {
    return () => valor;
}
//ex11
function findById(lista, id) {
    let resposta;
    for (let i = 0, n = lista.length; i < n; i++) {
        if (lista[i].id == id) {
            resposta = lista[i];
        }
    }
    return resposta;
}
const users = [{ id: 1, nome: "Ana" }, { id: 2, nome: "Bruno" }];
// console.log(findById(users, 2))
//ex 12
// function groupByProp<T, K extends keyof T>(lista: T[], prop: K): Record<string, T[]>{
//     return
// }
// const items = [
//   { tipo: 'fruta', nome: 'Maçã' },
//   { tipo: 'fruta', nome: 'Banana' },
//   { tipo: 'legume', nome: 'Cenoura' }
// ]
