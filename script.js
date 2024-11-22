document.addEventListener("DOMContentLoaded", () => {
    // Sample Data
    const categories = ["Electronics", "Fashion", "Home Appliances", "Books", "Toys"];
    const monthlySales = [5000, 3000, 4000, 2000, 2500];
    const yearlyGrowth = [10, 15, 8, 5, 12];
  
    // Bar Chart Configuration
    const barChartCtx = document.getElementById("barChart").getContext("2d");
    const barChart = new Chart(barChartCtx, {
      type: "bar",
      data: {
        labels: categories,
        datasets: [
          {
            label: "Monthly Sales ($)",
            data: monthlySales,
            backgroundColor: ["#4caf50", "#2196f3", "#ff5722", "#ffc107", "#9c27b0"]
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: (tooltipItem) => `$${tooltipItem.raw}`
            }
          }
        }
      }
    });
  
    // Pie Chart Configuration
    const pieChartCtx = document.getElementById("pieChart").getContext("2d");
    const pieChart = new Chart(pieChartCtx, {
      type: "pie",
      data: {
        labels: categories,
        datasets: [
          {
            data: yearlyGrowth,
            backgroundColor: ["#ff5722", "#4caf50", "#2196f3", "#9c27b0", "#ffc107"]
          }
        ]
      }
    });
  
    // Add animations using Anime.js
    anime({
      targets: "#barChart, #pieChart",
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 1500,
      easing: "easeInOutQuad"
    });
  });
  