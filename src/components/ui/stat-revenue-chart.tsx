import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);

interface Props {
    title?: string;
}

const StatChart: React.FC<Props> = ({ title }) => {
    const [reportType, setReportType] = useState("daily");
    const [chartData, setChartData] = useState({
        labels: ["Morning", "Evening", "Night"],
        datasets: [
            {
                label: "Revenue",
                data: [180, 280, 380],
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 2,
                fill: false,
            },
        ],
    });

    const handleReportTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedReportType = event.target.value;
        let generatedLabels: string[] = [];

        switch (selectedReportType) {
            case "daily":
                generatedLabels = ["Morning", "Evening", "Night"];
                break;
            case "weekly":
                generatedLabels = ["Week 1", "Week 2", "Week 3"];
                break;
            case "monthly":
                generatedLabels = ["January", "February", "March"];
                break;
            default:
                generatedLabels = [];
        }

        const randomData = Array.from({ length: 3 }, () =>
            Math.floor(Math.random() * 100)
        );

        setReportType(selectedReportType);
        setChartData({
            labels: generatedLabels,
            datasets: [
                {
                    label: "Revenue",
                    data: randomData,
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 2,
                    fill: false,
                },
            ],
        });
    };

    return (
        <div className="bg-white p-2 mt-4">
            <h1 className="font-bold text-4xl text-start my-5">{title}</h1>
            <div>
                <select value={reportType} onChange={handleReportTypeChange} className="border-2">
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                </select>
                <Line data={chartData} />
            </div>
        </div>
    );
};

export default StatChart;
