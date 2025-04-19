"use strict";
async function fetchCursos() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const data = await response.json();
    console.log(data);
    mostrarCursos(data);
}
fetchCursos();
function mostrarCursos(cursos) {
    cursos.forEach(curso => {
        let color;
        if (curso.nivel === 'iniciante') {
            color = 'blue';
        }
        else if (curso.nivel === 'avancado') {
            color = 'red';
        }
        document.body.innerHTML += `
        <div>
            <div style="color: ${color}">
                <h1>${curso.nome}</h1>
                <p>Horas: ${curso.horas}</p>
                <p>Aulas: ${curso.aulas}</p>
                <p>Gratuito: ${curso.gratuito ? 'Sim' : 'Não'}</p>
                <p>Tags: ${curso.tags.join(', ')}</p>
                <p>Aulas: ${curso.idAulas.join(' | ')}</p>
            </div>
        </div>
        `;
    });
}
