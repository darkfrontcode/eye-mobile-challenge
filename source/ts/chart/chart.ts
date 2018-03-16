import { drawRoundedTopRectangle } from './draw-rounded-top-rectangle'
import { RoundedTopRectangle } from './rounded-top-rectangle'

export const Chart = window['Chart']

Chart.defaults.global.tooltips = false
Chart.defaults.scale.ticks.beginAtZero = true
Chart.defaults.global.legend.display = false
Chart.helpers.drawRoundedTopRectangle = drawRoundedTopRectangle
Chart.elements.RoundedTopRectangle = Chart.elements.Rectangle.extend(RoundedTopRectangle)
Chart.defaults.roundedBar = Chart.helpers.clone(Chart.defaults.bar)
Chart.controllers.roundedBar = Chart.controllers.bar.extend({
    dataElementType: Chart.elements.RoundedTopRectangle
})