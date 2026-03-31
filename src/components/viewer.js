export function render(modulo) {
  const container = document.getElementById("content")

  container.innerHTML = `
    <h1 class="text-3xl font-bold mb-6">${modulo.titulo}</h1>

    ${modulo.secoes.map(sec => `
      <div class="card">
        <h3 class="text-xl font-bold mb-2">${sec.titulo}</h3>
        <p class="text-slate-600 whitespace-pre-line">${sec.texto}</p>
      </div>
    `).join("")}
  `
}
