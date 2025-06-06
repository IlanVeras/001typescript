async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const json = await response.json();

  handleCursos(json);
}

fetchCursos();

function isCurso1(value: unknown) : value is Curso{
  if (value && typeof value === "object" && "nome" in value) {
        return true;
      }
      return false;
}

function handleCursos(data: unknown) {
  if (Array.isArray(data)) {
    data.filter(isCurso1).forEach(item => {
      document.body.innerHTML += `
      <h1>${item.nome}</h1>
      <p>Horas: ${item.horas}</p>
      <p>${item.tags.join(", ")}</p>
      `
    });
  }
}

interface Curso {
  nome: string;
  horas: number;
  tags: string[];
}
