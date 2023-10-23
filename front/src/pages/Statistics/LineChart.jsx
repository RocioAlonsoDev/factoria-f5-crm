import { useEffect } from "react";
import Chart from "chart.js/auto";

export default function LineChartTotalSchoolPeople() {


  useEffect(() => {
    // Configuración del gráfico
    var config = {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: false,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: "#00FF7F",
            borderColor: "#00FF7F",
            data: [40, 68, 86, 74, 56, 60, 87],
          },
        ],
      },
      options: {
        // ... opciones ...
      },
    };

    // Obtén el canvas
    var canvas = document.getElementById("line-chart");

    // Si ya existe un gráfico en este canvas, destrúyelo
    if (canvas && canvas.chart) {
      canvas.chart.destroy();
    }

    // Crea un nuevo gráfico
    var ctx = canvas.getContext("2d");
    var newChart = new Chart(ctx, config);

    // Asigna el nuevo gráfico al canvas
    canvas.chart = newChart;
  }, []);

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700 bg-white">
      <div className="rounded-t mb-0 px-4 py-3 bg-white">
        <div className="flex flex-wrap items-center bg-white">
          <div className="relative w-full max-w-full flex-grow flex-1 bg-white">
            <h6 className="uppercase text-black-100 mb-1 text-xs font-semibold">
              Overview
            </h6>
            <h2 className="text-black-800 text-xl font-semibold">Sales value</h2>
          </div>
        </div>
      </div>
      <div className="p-4 flex-auto">
        {/* Canvas para el gráfico */}
        <canvas id="line-chart"></canvas>
      </div>
    </div>
  );
}

