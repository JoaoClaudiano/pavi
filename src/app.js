import { fundamentos } from "./data/fundamentos.js"
import { render } from "./components/viewer.js"

window.openModule = function(nome) {
  const modulo = fundamentos[nome]
  render(modulo)
}
