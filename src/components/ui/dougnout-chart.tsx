import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};
Chart.register({ id: "doughnut-chart", ...data });

const DoughnutChart = () => {
  return (
    <div className="chart-container" data-aos="fade-in">
      <Pie data={data} />
    </div>
  );
};

export default DoughnutChart;
