
// Total Purchases Over Time (Line Chart)
// const totalPurchasesCtx = document.getElementById('totalPurchasesChart').getContext('2d');
// new Chart(totalPurchasesCtx, {
//     type: 'bar',
//     data: {
//         labels: ['1-5', '6-10', '11-15', '16-20', '21-25', '26-30'],
//         datasets: [{
//             label: 'Total Purchases',
//             data: [1200, 1900, 3000, 2500, 3200, 1200],
//             borderColor: 'rgba(75, 192, 192)',
//             backgroundColor: 'rgba(75, 192, 192, 0.2)',
//             tension: 0.4
//         }]
//     },
//     options: {
//         responsive: true
//     }
// });



// Nearest deadline
const ctx = document.getElementById('nearDeadline').getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Task one', 'Task Nine', 'Task Four', 'Task Six', 'Task Five', 'Management Task', 'Team Task', 'test', 'test'],
        datasets: [{
            label: 'Days Until Deadline',
            data: [2, 5, 2, 3, 6, 5, 9, 5, 7], // Number of days left for each task
            backgroundColor: '#256fd1ca', // red bars
            maxBarThickness: 60
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                ticks: {
                    autoSkip: false,
                    maxRotation: 45,
                    minRotation: 30,
                    font: {
                        size: 12 // Set font size to 12px
                    }
                },
                title: {
                    display: true,
                    text: 'Task Name'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Days Left'
                },
                ticks: {
                    stepSize: 1
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }

});



// common opetions
const commonOptions = {
    responsive: true,
    plugins: {
        datalabels: {
            formatter: (value, ctx) => {
                const data = ctx.chart.data.datasets[0].data;
                const total = data.reduce((acc, cur) => acc + cur, 0);
                const percentage = ((value / total) * 100).toFixed(0) + '%';
                return percentage;
            },
            color: '#222',
            font: {
                weight: 'bold',
                size: 14
            }
        }
    }
};


// regularChart
const regularChart = document.getElementById('regularChart').getContext('2d');
new Chart(regularChart, {
    type: 'doughnut',
    data: {
        labels: ['Completed', 'Uncompleted'],
        datasets: [{
            label: 'Task',
            data: [70, 30],
            backgroundColor: ['#1878F2', '#ededed'],
            hoverOffset: 4
        }]
    },
    options: commonOptions,
    plugins: [ChartDataLabels]
});



// assignChart
const assignChart = document.getElementById('assignChart').getContext('2d');
new Chart(assignChart, {
    type: 'doughnut',
    data: {
        labels: ['Completed', 'Uncompleted'],
        datasets: [{
            label: 'Task',
            data: [40, 60],
            backgroundColor: ['#1878F2', '#ededed'],
            hoverOffset: 4
        }]
    },
    options: commonOptions,
    plugins: [ChartDataLabels]
});
