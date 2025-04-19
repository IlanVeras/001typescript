"use strict";
async function fetchProduct() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const data = await response.json();
    showProduct(data);
}
fetchProduct();
function showProduct(data) {
    document.body.innerHTML = `
      <div>
        <h2>${data.nome}</h2>
        <p>R$ ${data.preco}</p>
        <p>${data.descricao}</p>
        <p>Garantia de ${Number(data.garantia) === 1 ? `${data.garantia} ano` : `${data.garantia} anos`}
        <p>Seguro contra acidentes: ${data.seguroAcidentes ? 'Sim' : 'Não'}</p>
        <h3>Dados do Fabricante</h3>
        <p>Empresa: ${data.empresaFabricante.nome}</p>
        <p>Fundação: ${data.empresaFabricante.fundacao}, ${data.empresaFabricante.pais}</p>
        <h3>Dados da Montadora</h3>
        <p>Empresa: ${data.empresaMontadora.nome}</p>
        <p>Fundação: ${data.empresaMontadora.fundacao}, ${data.empresaMontadora.pais}</p>
      </div>
    `;
}
