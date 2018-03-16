import { Chart } from './chart/chart'
import * as Schema from './schemas'
import '../stylus/main.styl'

new Chart(document.getElementById('doughnut'), Schema.Doughnut)
new Chart(document.getElementById('board'), Schema.Board)