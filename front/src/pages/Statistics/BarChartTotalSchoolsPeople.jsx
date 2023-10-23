
import { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import StatisticsDataService from "../../services/crmService/statistics.service";

export default function BarChartTotalSchoolsPeople() {
  const [schoolData, setSchoolData] = useState([]);

  useEffect(() => {
    StatisticsDataService.getTotalPeoplebySchool()
      .then(async (response) => {
        console.log("Response:", response);
        if (Array.isArray(response.data.data)) {
          setSchoolData(response.data.data);
        } else {
          console.error("Response data is not an array:", response);
        }
      })
      .catch((error) => {
        console.error("Error fetching gender data:", error);
      });
  }, []);

  console.log("SchoolData", schoolData)

  useEffect(() => {
    if (!schoolData.length) {
      return;
    }

    const labels = schoolData.map((item) => item.school);
    const currentYearData = schoolData.map((item) => item.currentCount);
    const previousYearData = schoolData.map((item) => item.previousCount);

    let config = {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "orange",
            borderColor: "orange",
            data: currentYearData,
            fill: false,
            barThickness: 8,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: "green",
            borderColor: "#green",
            data: previousYearData,
            barThickness: 8,
          },
        ],
      },
      options: {
        // Resto de las opciones...
      },
    };

    let ctx = document.getElementById("bar-chart").getContext("2d");

    // Destruir el gráfico existente si hay uno
    if (window.myBar) {
      window.myBar.destroy();
    }

    window.myBar = new Chart(ctx, config);
  }, [schoolData]);

  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-grow flex-1">
          <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
            {schoolData.length > 0 ? schoolData[0].currentYear : ""}
          </h6>
            <h2 className="text-blueGray-700 text-xl font-semibold">
              Total personas por escuelas
            </h2>
          </div>
        </div>
      </div>
      <div className="p-4 flex-auto">
        {/* Chart */}
        <div className="relative h-350-px">
          <canvas id="bar-chart"></canvas>
        </div>
      </div>
    </div>
  );
}
