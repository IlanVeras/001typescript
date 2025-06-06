"use strict";
const body = document.body;
function isCurso(value) {
    if (value &&
        typeof value === "object" &&
        "nome" in value &&
        "horas" in value &&
        "tags" in value) {
        return true;
    }
    return false;
}
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }
        const data = await response.json();
        function handleCurso(data) {
            if (isCurso(data)) {
                return true;
            }
            return false;
        }
        console.log(data);
        let count = 0;
        for (let i = 0, n = data.length; i < n; i++) {
            if (handleCurso(data[i]) === false) {
                count += 1;
            }
        }
        if (count === 0) {
            data.map((curso) => (body.innerHTML += `
            <h1>${curso.nome}</h1>
            <p>Horas: ${curso.horas}</p>
            <ul>
            ${curso.tags.map((tag) => `<li>${tag}</li>`)}</ul>
            `));
        }
        return data;
    }
    catch (error) {
        if (error && typeof error === "object" && "message" in error) {
            console.error("Erro ao buscar dados");
            console.error(error.message);
        }
        return undefined;
    }
}
const urlOrigamid = "https://api.origamid.dev/json/cursos.json";
const dados = fetchData(urlOrigamid);
