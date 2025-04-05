document.addEventListener('DOMContentLoaded', () => {
    // Mock data for charts
    const ipoPerformanceData = {
      labels: ['TechCorp', 'FinServe', 'HealthPlus'],
      datasets: [{
        label: 'Listing Gain (%)',
        data: [15, 8, -5], // Mock data for listing gains
        backgroundColor: [
          'rgba(52, 152, 219, 0.5)', // --secondary-color with opacity
          'rgba(52, 152, 219, 0.5)',
          'rgba(52, 152, 219, 0.5)'
        ],
        borderColor: [
          'rgba(52, 152, 219, 1)', // --secondary-color
          'rgba(52, 152, 219, 1)',
          'rgba(52, 152, 219, 1)'
        ],
        borderWidth: 1
      }]
    };
  
    const userActivityData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
        label: 'Active Users',
        data: [120, 150, 180, 200, 220], // Mock data for user activity
        backgroundColor: 'rgba(52, 152, 219, 0.5)', // --secondary-color with opacity
        borderColor: 'rgba(52, 152, 219, 1)', // --secondary-color
        borderWidth: 1,
        fill: true
      }]
    };
  
    // IPO Performance Chart (Bar Chart)
    const ipoPerformanceChart = new Chart(document.getElementById('ipo-performance-chart'), {
      type: 'bar',
      data: ipoPerformanceData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Listing Gain (%)',
              color: '#2c3e50', // --primary-color
              font: {
                weight: 'bold'
              }
            },
            ticks: {
              color: '#2c3e50'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Company',
              color: '#2c3e50',
              font: {
                weight: 'bold'
              }
            },
            ticks: {
              color: '#2c3e50'
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: '#2c3e50'
            }
          }
        }
      }
    });
  
    // User Activity Chart (Line Chart)
    const userActivityChart = new Chart(document.getElementById('user-activity-chart'), {
      type: 'line',
      data: userActivityData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Active Users',
              color: '#2c3e50',
              font: {
                weight: 'bold'
              }
            },
            ticks: {
              color: '#2c3e50'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Month',
              color: '#2c3e50',
              font: {
                weight: 'bold'
              }
            },
            ticks: {
              color: '#2c3e50'
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: '#2c3e50'
            }
          }
        }
      }
    });
  });