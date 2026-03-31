export function renderModulo(modulo) {
  const container = document.getElementById("content")

  container.innerHTML = `
    <h1 class="text-3xl font-bold mb-6">${modulo.titulo}</h1>

    ${modulo.secoes.map(sec => `
      <div class="card">
        <div class="section-title">${sec.titulo}</div>
        <p class="text-slate-600 whitespace-pre-line">${sec.texto}</p>
      </div>
    `).join("")}
  `
}
