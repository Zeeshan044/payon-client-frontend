import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";

type ChartData = {
    // labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string[];
    }[];
};

const OrderSummary: React.FC = () => {
    const [chartData, setChartData] = useState<ChartData>({
        // labels: ["In Progress", "Ready", "Completed"],
        datasets: [
            {
                label: "Order Status",
                data: [25, 7, 72],
                backgroundColor: ["#fcd34d", "#34d399", "#6366f1"],
            },
        ],
    });

    const [statusData, setStatusData] = useState<number[]>([25, 7, 72]);
    const [activeTab, setActiveTab] = useState<string>("Today");
    let chartInstance: Chart | null = null;

    useEffect(() => {
        const ctx = document.getElementById("orderChart") as HTMLCanvasElement | null;

        if (!ctx) return;

        if (chartInstance !== null) {
            chartInstance.destroy();
        }

        chartInstance = new Chart(ctx, {
            type: "doughnut",
            data: chartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
            },
        });

        return () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }, [chartData]);

    const handleButtonClick = (button: string) => {
        let newData: number[] = [25, 7, 72];
        switch (button) {
            case "Monthly":
                newData = [0, 400, 400];
                break;
            case "Weekly":
                newData = [0, 100, 100];
                break;
            case "Today":
                newData = [10, 30, 60];
                break;
            default:
                break;
        }
        setChartData({
            ...chartData,
            datasets: [
                {
                    ...chartData.datasets[0],
                    data: newData,
                },
            ],
        });
        setStatusData(newData);
        setActiveTab(button);
    };

    return (
        <div className="rounded-2xl shadow-md p-6 border border-gray-300">
            <div className="flex justify-between flex-col lg:flex-row ">
                <div className="flex flex-col gap-2 text-center lg:text-start">
                    <h2 className="font-medium text-base">Orders Summary</h2>
                    <p className="text-xs text-gray-400">Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="gap-8 flex justify-between mt-4 lg:mt-0">
                    <button
                        className={`hover:underline focus:underline ${activeTab === "Monthly" ? "underline" : ""
                            } text-primary`}
                        onClick={() => handleButtonClick("Monthly")}
                    >
                        Monthly
                    </button>
                    <button
                        className={`hover:underline focus:underline ${activeTab === "Weekly" ? "underline" : ""
                            } text-primary`}
                        onClick={() => handleButtonClick("Weekly")}
                    >
                        Weekly
                    </button>
                    <button
                        className={`hover:underline focus:underline ${activeTab === "Today" ? "underline" : ""
                            } text-primary`}
                        onClick={() => handleButtonClick("Today")}
                    >
                        Today
                    </button>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-4 gap-0  justify-between items-center mb-10">
                <div className="w-[200px]">
                    <canvas id="orderChart"></canvas>
                </div>
                <div className="mt-10 flex flex-col gap-4 items-center max-w-56">
                    <h1 className="text-2xl font-semibold">$456,005.56</h1>
                    <p className="text-sm font-normal">from $500,000.00</p>
                    <p className="text-center px-2">Lorem ipsum dolor sit amet, consectetur elit, sed do</p>
                    <button className="bg-slate-200 text-primary py-2 px-4 rounded-md">More Details</button>
                </div>
            </div>
            <div className="flex justify-between gap-3 flex-col lg:flex-row">
                <div className="pl-3 py-4 gap-2 border min-w-36 border-gray-300 text-center lg:text-start rounded-2xl">
                    <h1 className="font-semibold text-2xl">{statusData[0]}</h1>
                    <p className="text-sm font-normal text-gray-400">In Progress</p>
                </div>
                <div className="px-3 py-4 gap-2 border min-w-36 border-gray-300 text-center lg:text-start rounded-2xl">
                    <h1 className="font-semibold text-2xl">{statusData[1]}</h1>
                    <p className="text-sm font-normal text-gray-400">Ready</p>
                </div>
                <div className="px-3 py-4 gap-2 border min-w-36 border-gray-300 text-center lg:text-start rounded-2xl">
                    <h1 className="font-semibold text-2xl">{statusData[2]}</h1>
                    <p className="text-sm font-normal text-gray-400">Completed</p>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
