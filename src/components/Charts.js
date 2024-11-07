import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../App.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const App = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "User Engagement",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "User Engagement Over Time",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw} users`,
        },
      },
    },
  };

  return (
    <div className="container">
      <div className="graph-container">
        <h3>User Engagement</h3>
        <div className="graph">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default App;
