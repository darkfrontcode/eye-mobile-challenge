export const Board = {
    type: 'roundedBar',
    data: {
        labels: ['', ''],
        datasets: [
            {
                data: [12, 4],
                backgroundColor: ['#00ddaa', '#ff4f64']
            }
        ]
    },
    options: {
        barRoundness: 1,
        borderSkipped: 'top',
        scales: {
            yAxes: [{
                gridLines: {
                    display: true,
                    offsetGridLines: false,
                    drawBorder: false,
                    zeroLineColor: '#E0E1E3'
                },
                ticks: {
                    fontSize: 10,
                    stepSize: 2,
                    max: 12,
                    min: 2,
                    callback: (label, index, labels) => (`R$ ${label}.000,00`)
                }
            }],
            xAxes: [{
                barPercentage: 0.35,
                gridLines: {
                    display: false,
                    offsetGridLines: false
                }
            }]
        },
        responsive: true,
        maintainAspectRatio: false
    }
}