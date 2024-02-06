import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

interface Props {
    title?: string;
}

const AverageOrdersChart: React.FC<Props> = ({ title }) => {
    const [reportType, setReportType] = useState("daily");
    const [chartData, setChartData] = useState({
        labels: ["Morning", "Afternoon", "Evening", "Night"],
        datasets: [
            {
                label: "Orders",
                data: [200, 300, 250, 400],
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
            },
            {
                label: "Average Orders",
                data: [150, 250, 200, 350],
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 2,
            },
        ],
    });

    const handleReportTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedReportType = event.target.value;
        let generatedLabels: string[] = [];
        let Orders: number[] = [];
        let averageOrders: number[] = [];

        switch (selectedReportType) {
            case "daily":
                generatedLabels = ["Morning", "Afternoon", "Evening", "Night"];
                Orders = [200, 300, 250, 400];
                averageOrders = [150, 250, 200, 350];
                break;
            case "weekly":
                generatedLabels = ["Week 1", "Week 2", "Week 3", "Week 4"];
                Orders = [500, 600, 550, 700];
                averageOrders = [450, 550, 500, 650];
                break;
            case "monthly":
                generatedLabels = ["Jan", "Feb", "Mar", "Apr"];
                Orders = [800, 900, 850, 1000];
                averageOrders = [750, 850, 800, 950];
                break;
            default:
                generatedLabels = [];
                Orders = [];
                averageOrders = [];
        }

        setReportType(selectedReportType);
        setChartData({
            labels: generatedLabels,
            datasets: [
                {
                    label: "Orders",
                    data: Orders,
                    backgroundColor: 'rgba(75,192,192,0.2)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderWidth: 2,
                },
                {
                    label: "Average Orders",
                    data: averageOrders,
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 2,
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
                <Bar data={chartData} />
            </div>
        </div>
    );
};

export default AverageOrdersChart;
