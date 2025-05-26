"use strict";
const l1 = [1, 2, 3];
function getFirst(lista) {
    return lista[0];
}
// console.log( getFirst(l1))
function duplicateList(lista) {
    lista.map((item) => {
        lista.push(item);
    });
    return lista;
}
// console.log(duplicateList(l1))
function filterByProp(lista, prop, value) {
    return lista.filter((item) => item[prop] === value);
}
const pessoas = [
    { nome: "Ana", idade: 30 },
    { nome: "João", idade: 25 },
    { nome: "Bia", idade: 30 },
];
// console.log(filterByProp(pessoas, "idade", 30))
function mapList(lista, transformador) {
    return lista.map(transformador);
}
const produtos = [
    { nome: "Camiseta", preco: 50 },
    { nome: "Calça", preco: 120 },
    { nome: "Tênis", preco: 200 }
];
console.log(mapList(produtos, (produto) => produto.nome));
