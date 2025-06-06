"use strict";
async function fetchCursos() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const json = await response.json();
    handleCursos(json);
}
fetchCursos();
function isCurso1(value) {
    if (value && typeof value === "object" && "nome" in value) {
        return true;
    }
    return false;
}
function handleCursos(data) {
    if (Array.isArray(data)) {
        data.filter(isCurso1).forEach(item => {
            document.body.innerHTML += `
      <h1>${item.nome}</h1>
      <p>Horas: ${item.horas}</p>
      <p>${item.tags.join(", ")}</p>
      `;
        });
    }
}
