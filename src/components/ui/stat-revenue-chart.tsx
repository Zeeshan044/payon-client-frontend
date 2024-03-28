import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import LineImg from "@/assets/images/lineGraph.svg"
import Image from 'next/image';
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
                data: [180, 280, 380],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(54, 162, 235, 0.3)',
                    'rgba(54, 162, 235, 0.1)'
                ],
                borderWidth: 2,
                fill: 'start',
            },
        ],
    });

    const handleReportTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedReportType = event.target.value;
        let generatedLabels: string[] = [];
        let randomData: number[] = [];

        switch (selectedReportType) {
            case "daily":
                generatedLabels = ["Morning", "Evening", "Night"];
                randomData = [180, 280, 380];
                break;
            case "weekly":
                generatedLabels = ["Week 1", "Week 2", "Week 3", "Week 4"];
                randomData = Array.from({ length: 4 }, () => Math.floor(Math.random() * 100));
                break;
            case "monthly":
                generatedLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
                randomData = Array.from({ length: 12 }, () => Math.floor(Math.random() * 100));
                break;
            default:
                generatedLabels = [];
                randomData = [];
        }

        setReportType(selectedReportType);
        setChartData({
            labels: generatedLabels,
            datasets: [
                {
                    data: randomData,
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.5)',
                        'rgba(54, 162, 235, 0.3)',
                        'rgba(54, 162, 235, 0.1)'
                    ],
                    borderWidth: 2,
                    fill: 'start',
                },
            ],
        });
    };

    return (
        <div className="rounded-2xl shadow-md p-6 border border-gray-300">
            <div className='flex justify-between items-center flex-col lg:flex-row '>
                <div className="flex flex-col gap-2 text-center lg:text-start">
                    <h2 className="font-medium text-base">{title}</h2>
                    <p className="text-xs text-gray-400">Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className=" mt-4 lg:mt-0">
                    <select value={reportType} onChange={handleReportTypeChange} className=" bg-blue-50 rounded cursor-pointer p-3 font-bold text-primary">
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                </div>
            </div>
            <div className=' my-10 flex justify-between flex-col lg:flex-row '>
                <div className=' flex gap-3 items-center justify-center lg:items-start'>
                    <Image src={LineImg} alt='graph' className=" mt-2" />
                    <div className=' gap-1'>
                        <p className=' text-xs font-normal'>Income</p>
                        <p className=' text-lg font-semibold'>$126,000</p>
                    </div>
                </div>
                <div className=' flex gap-2 justify-between text-xs mt-4 lg:mt-0'>
                    <button className={`px-4 py-3 border rounded ${reportType === 'allFood' ? 'border-blue-500 text-blue-500' : ''}`} onClick={() => setReportType('allFood')}>All Food</button>
                    <button className={`px-4 py-3 border rounded ${reportType === 'food' ? 'border-blue-500 text-blue-500' : ''}`} onClick={() => setReportType('food')}>Food</button>
                    <button className={`px-4 py-3 border rounded ${reportType === 'beverages' ? 'border-blue-500 text-blue-500' : ''}`} onClick={() => setReportType('beverages')}>Beverages</button>
                </div>
            </div>
            <Line data={chartData} options={{
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }} />

        </div>
    );
};

export default StatChart;
