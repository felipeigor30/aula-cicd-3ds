import './style.css'
import { soma } from './soma.js'

const resultado = soma(2, 3)

document.querySelector('#resultado').textContent =
  `2 + 3 = ${resultado}`
