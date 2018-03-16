export const Doughnut = {
    type: 'doughnut',
    data: {
        labels: ['Banho & Tosa', 'Consultas', 'Medicamentos'],
        datasets: [{
            data: [50, 30, 20],
            backgroundColor: ['#cd29d5', '#792ad5', '#3a86fe']
        }]
    },
    options: {
        cutoutPercentage: 70,
        rotation: 55,
        responsive: true,
        maintainAspectRatio: true,
        layout: {
            padding: {
                top: 0
            }
        }
    }
}