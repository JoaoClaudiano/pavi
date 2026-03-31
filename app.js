lucide.createIcons()

// NAV
function switchTab(tab) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"))
  document.getElementById("section-" + tab).classList.add("active")

  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"))
  document.getElementById("nav-" + tab).classList.add("active")
}

// LAB
let currentExp = "ip"
let chart

function changeExperiment(exp) {
  currentExp = exp
}

function calcular() {
  const v1 = parseFloat(document.getElementById("input1").value)
  const v2 = parseFloat(document.getElementById("input2").value)

  let resultado

  if (currentExp === "ip") {
    const logPen = Math.log10(v1)
    resultado = (20 * v2 + 500 * logPen - 1952) / (v2 - 50 * logPen + 120)
  }

  if (currentExp === "viscosidade") {
    resultado = 1000 * Math.exp(-0.05 * v1)
  }

  document.getElementById("resultado").innerText = "Resultado: " + resultado.toFixed(2)

  atualizarGrafico(resultado)
}

// GRÁFICO
function atualizarGrafico(val) {
  const ctx = document.getElementById("grafico")

  if (chart) chart.destroy()

  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [1,2,3,4,5],
      datasets: [{ data: [val-1, val, val+1, val+2, val+3] }]
    }
  })
}

// QUIZ
const perguntas = [
  {
    pergunta: "Penetração mede:",
    opcoes: ["Viscosidade","Dureza","Temperatura"],
    correta: 1,
    explicacao: "Mede a consistência do CAP"
  }
]

let i = 0
let score = 0

function loadQuiz() {
  const q = perguntas[i]

  document.getElementById("pergunta").innerText = q.pergunta
  const opDiv = document.getElementById("opcoes")
  opDiv.innerHTML = ""

  q.opcoes.forEach((op, index) => {
    const btn = document.createElement("button")
    btn.innerText = op
    btn.className = "btn block w-full"
    btn.onclick = () => responder(index)
    opDiv.appendChild(btn)
  })
}

function responder(index) {
  const q = perguntas[i]

  if (index === q.correta) {
    score++
    document.getElementById("feedback").innerText = "Correto!"
  } else {
    document.getElementById("feedback").innerText = "Errado!"
  }

  document.getElementById("explicacao").innerText = q.explicacao

  salvar()
}

// PROGRESSO
function salvar() {
  localStorage.setItem("pavi", JSON.stringify({score}))
}

function carregar() {
  const data = JSON.parse(localStorage.getItem("pavi"))
  if (data) score = data.score

  document.getElementById("score").innerText = "Acertos: " + score
}

carregar()
loadQuiz()
