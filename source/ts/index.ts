import '../stylus/main.styl'

const Chart = window['Chart']
const ctx = document.getElementById('pie')

new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Banho & Tosa', 'Consultas', 'Medicamentos'],
        datasets: [{ 
            data: [10, 20, 30], 
            backgroundColor: ['#cd29d5', '#792ad5', '#3a86fe']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true
    }
})