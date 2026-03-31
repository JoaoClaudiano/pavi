import { fundamentos } from "./data/fundamentos.js"
import { renderModulo } from "./components/viewer.js"

const menu = document.getElementById("menu")

fundamentos.forEach(mod => {
  const btn = document.createElement("button")
  btn.innerText = mod.titulo
  btn.className = "nav-btn"

  btn.onclick = () => {
    renderModulo(mod)
  }

  menu.appendChild(btn)
})
