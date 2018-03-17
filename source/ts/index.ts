import { Chart } from './chart/chart'
import * as Schemas from './schemas'
import '../stylus/main.styl'

new Chart(document.getElementById('doughnut'), Schemas.Doughnut)
new Chart(document.getElementById('board'), Schemas.Board)