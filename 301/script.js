"use strict";
class Produto {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
// const telefone = new Produto('Telefone', 1900);
// console.log(telefone);
class Livro extends Produto {
    autor;
    constructor(nome, autor) {
        super(nome);
        this.autor = autor;
    }
}
class Jogo extends Produto {
    jogadores;
    constructor(nome, jogadores) {
        super(nome);
        this.jogadores = jogadores;
    }
}
function buscaritem(busca) {
    if (busca === 'O Ceifador') {
        return new Livro('O Ceifador', 'Neal Shusterman');
    }
    if (busca === 'The Last Of Us') {
        return new Jogo('The Last Of Us', 2);
    }
    return null;
}
const item = buscaritem('O Ceifador');
if (item instanceof Livro) {
    console.log(item);
}
else if (item instanceof Jogo) {
    console.log(item);
}
console.log(item instanceof Produto);
