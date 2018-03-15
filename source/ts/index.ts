import '../stylus/main.styl'

const Chart = window['Chart']
const ctx = document.getElementById('doughnut')

new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{ 
            data: [50, 30, 20], 
            backgroundColor: ['#cd29d5', '#792ad5', '#3a86fe']
        }]
    },
    options: {
        cutoutPercentage: 70,
        rotation: 55,
        responsive: true,
        maintainAspectRatio: true
    }
})