// import React from "react";
// import Chart from "chart.js";
// // import { Line } from "react-chartjs-2";

// export default function LineChartTotalSchoolPeople() {
//   React.useEffect(() => {
//     var config = {
//       type: "line",
//       data: {
//         labels: [
//           "January",
//           "February",
//           "March",
//           "April",
//           "May",
//           "June",
//           "July",
//         ],
//         datasets: [
//           {
//             label: new Date().getFullYear(),
//             backgroundColor: "#4c51bf",
//             borderColor: "#4c51bf",
//             data: [65, 78, 66, 44, 56, 67, 75],
//             fill: false,
//           },
//           {
//             label: new Date().getFullYear() - 1,
//             fill: false,
//             backgroundColor: "#fff",
//             borderColor: "#fff",
//             data: [40, 68, 86, 74, 56, 60, 87],
//           },
//         ],
//       },
//       options: {
//         maintainAspectRatio: false,
//         responsive: true,
//         title: {
//           display: false,
//           text: "Sales Charts",
//           fontColor: "white",
//         },
//         legend: {
//           labels: {
//             fontColor: "white",
//           },
//           align: "end",
//           position: "bottom",
//         },
//         tooltips: {
//           mode: "index",
//           intersect: false,
//         },
//         hover: {
//           mode: "nearest",
//           intersect: true,
//         },
//         scales: {
//           xAxes: [
//             {
//               ticks: {
//                 fontColor: "rgba(255,255,255,.7)",
//               },
//               display: true,
//               scaleLabel: {
//                 display: false,
//                 labelString: "Month",
//                 fontColor: "white",
//               },
//               gridLines: {
//                 display: false,
//                 borderDash: [2],
//                 borderDashOffset: [2],
//                 color: "rgba(33, 37, 41, 0.3)",
//                 zeroLineColor: "rgba(0, 0, 0, 0)",
//                 zeroLineBorderDash: [2],
//                 zeroLineBorderDashOffset: [2],
//               },
//             },
//           ],
//           yAxes: [
//             {
//               ticks: {
//                 fontColor: "rgba(255,255,255,.7)",
//               },
//               display: true,
//               scaleLabel: {
//                 display: false,
//                 labelString: "Value",
//                 fontColor: "white",
//               },
//               gridLines: {
//                 borderDash: [3],
//                 borderDashOffset: [3],
//                 drawBorder: false,
//                 color: "rgba(255, 255, 255, 0.15)",
//                 zeroLineColor: "rgba(33, 37, 41, 0)",
//                 zeroLineBorderDash: [2],
//                 zeroLineBorderDashOffset: [2],
//               },
//             },
//           ],
//         },
//       },
//     };
//     var ctx = document.getElementById("line-chart").getContext("2d");
//     window.myLine = new Chart(ctx, config);
//   }, []);
//   return (
//     <>
//       <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
//         <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
//           <div className="flex flex-wrap items-center">
//             <div className="relative w-full max-w-full flex-grow flex-1">
//               <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
//                 Overview
//               </h6>
//               <h2 className="text-white text-xl font-semibold">Sales value</h2>
//             </div>
//           </div>
//         </div>
//         <div className="p-4 flex-auto">
//           {/* Chart */}
//           <div className="relative h-350-px">
//             <canvas id="line-chart"></canvas>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }






// import { useEffect } from "react";
// import { Line } from "react-chartjs-2";

// export default function LineChartTotalSchoolPeople() {
//   const data = {
//     labels: [
//       "January",
//       "February",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//     ],
//     datasets: [
//       {
//         label: new Date().getFullYear(),
//         backgroundColor: "#4c51bf",
//         borderColor: "#4c51bf",
//         data: [65, 78, 66, 44, 56, 67, 75],
//         fill: false,
//       },
//       {
//         label: new Date().getFullYear() - 1,
//         fill: false,
//         backgroundColor: "#fff",
//         borderColor: "#fff",
//         data: [40, 68, 86, 74, 56, 60, 87],
//       },
//     ],
//   };

//   const options = {
//     maintainAspectRatio: false,
//     responsive: true,
//     title: {
//       display: false,
//       text: "Sales Charts",
//       fontColor: "white",
//     },
//     legend: {
//       labels: {
//         fontColor: "white",
//       },
//       align: "end",
//       position: "bottom",
//     },
//   };

//   useEffect(() => {
//     // Código de useEffect para crear y destruir gráficos Chart.js (ya no es necesario destruirlo manualmente)
//   }, []); // Asegúrate de proporcionar las dependencias adecuadas si es necesario

//   return (
//     <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
//       <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
//         <div className="flex flex-wrap items-center">
//           <div className="relative w-full max-w-full flex-grow flex-1">
//             <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
//               Overview
//             </h6>
//             <h2 className="text-white text-xl font-semibold">Sales value</h2>
//           </div>
//         </div>
//       </div>
//       <div className="p-4 flex-auto">
//         {/* Chart */}
//         <div className="relative h-350-px">
//           <Line data={data} options={options} />
//         </div>
//       </div>
//     </div>
//   );
// }




// import React from "react";
// import Chart from "chart.js/auto";

// export default function LineChartTotalSchoolPeople() {
//   React.useEffect(() => {
//     var config = {
//       type: "line",
//       data: {
//         labels: [
//           "January",
//           "February",
//           "March",
//           "April",
//           "May",
//           "June",
//           "July",
//         ],
//         datasets: [
//           {
//             label: new Date().getFullYear(),
//             backgroundColor: "#4c51bf",
//             borderColor: "#4c51bf",
//             data: [65, 78, 66, 44, 56, 67, 75],
//             fill: false,
//           },
//           {
//             label: new Date().getFullYear() - 1,
//             fill: false,
//             backgroundColor: "#fff",
//             borderColor: "#fff",
//             data: [40, 68, 86, 74, 56, 60, 87],
//           },
//         ],
//       },
//       options: {
//         maintainAspectRatio: false,
//         responsive: true,
//         title: {
//           display: false,
//           text: "Sales Charts",
//           fontColor: "white",
//         },
//         legend: {
//           labels: {
//             fontColor: "white",
//           },
//           align: "end",
//           position: "bottom",
//         },
//         tooltips: {
//           mode: "index",
//           intersect: false,
//         },
//         hover: {
//           mode: "nearest",
//           intersect: true,
//         },
//         scales: {
//           xAxes: [
//             {
//               ticks: {
//                 fontColor: "rgba(255,255,255,.7)",
//               },
//               display: true,
//               scaleLabel: {
//                 display: false,
//                 labelString: "Month",
//                 fontColor: "white",
//               },
//               gridLines: {
//                 display: false,
//                 borderDash: [2],
//                 borderDashOffset: [2],
//                 color: "rgba(33, 37, 41, 0.3)",
//                 zeroLineColor: "rgba(0, 0, 0, 0)",
//                 zeroLineBorderDash: [2],
//                 zeroLineBorderDashOffset: [2],
//               },
//             },
//           ],
//           yAxes: [
//             {
//               ticks: {
//                 fontColor: "rgba(255,255,255,.7)",
//               },
//               display: true,
//               scaleLabel: {
//                 display: false,
//                 labelString: "Value",
//                 fontColor: "white",
//               },
//               gridLines: {
//                 borderDash: [3],
//                 borderDashOffset: [3],
//                 drawBorder: false,
//                 color: "rgba(255, 255, 255, 0.15)",
//                 zeroLineColor: "rgba(33, 37, 41, 0)",
//                 zeroLineBorderDash: [2],
//                 zeroLineBorderDashOffset: [2],
//               },
//             },
//           ],
//         },
//       },
//     };

//     var ctx = document.getElementById("line-chart").getContext("2d");
//     window.myLine = new Chart(ctx, config);
//   }, []);

//   return (
//     <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
//       <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
//         <div className="flex flex-wrap items-center">
//           <div className="relative w-full max-w-full flex-grow flex-1">
//             <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
//               Overview
//             </h6>
//             <h2 className="text-white text-xl font-semibold">Sales value</h2>
//           </div>
//         </div>
//       </div>
//       <div className="p-4 flex-auto">
//         {/* Chart */}
//         <div className="relative h-350-px">
//           <canvas id="line-chart"></canvas>
//         </div>
//       </div>
//     </div>
//   );
// }




import { useEffect } from "react";
import Chart from "chart.js/auto"; // Importar Chart.js v3

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

