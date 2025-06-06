"use strict";
const arr = [1, 2, 3];
// console.log(arr instanceof Array)
function isString(value) {
    return typeof value === 'string';
}
function isProduto(value) {
    if (value &&
        typeof value === 'object' &&
        "nome" in value &&
        "preco" in value) {
        return true;
    }
    return false;
}
function handleProduto(data) {
    if (isProduto(data)) {
        console.log(data.nome);
    }
}
const p = {
    nome: 'teste',
    preco: 1
};
handleProduto(p);
