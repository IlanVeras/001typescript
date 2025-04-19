"use strict";
function preencherDados(dados) {
    document.body.innerHTML += `
        <div>
            <h2>${dados.nome}</h2>
            <p>R$ ${dados.preco}</h2>
            <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'}
        </div>
    `;
}
preencherDados({ nome: 'notebook', preco: 1200, teclado: true });
preencherDados({ nome: 'Iphone 16', preco: 4000, teclado: false });
