import React from "react";

import Chart from "chart.js/auto";

import { Bar } from "react-chartjs-2";

const BarChart = () => {
  
  const labels = ["January", "February", "March", "April", "May", "June"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Working Days in Months",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [15, 10, 5, 2, 20, 30, 25],
      },
    ],
  };
 
  return (
    <div style={{ width: "600px", height: "200px" }}>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
