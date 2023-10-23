import { useEffect, useState } from "react";
import StatisticsDataService from "../../services/crmService/statistics.service";

export default function BarGraphicTotalGenderPercentages() {
  const [genderData, setGenderData] = useState([]);
  const colors = [
    "blue",
    "red",
    "purple",
    "orange",
    "emerald",
    "indigo",
    "yellow",
  ];

  useEffect(() => {
    StatisticsDataService.getTotalGenderPercentages()
      .then(async (response) => {
        console.log("Response:", response);
        if (Array.isArray(response.data.data)) {
          setGenderData(response.data.data);
        } else {
          console.error("Response data is not an array:", response);
        }
      })
      .catch((error) => {
        console.error("Error fetching gender data:", error);
      });
  }, []);

  console.log("GenderData:", genderData);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Estudiantes por género
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="thead-light">
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Género
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Coders
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th>
              </tr>
            </thead>
            <tbody>
              {genderData.map((genderItem, index) => (
                <tr key={genderItem.gender}>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    {genderItem.gender}
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {genderItem.count}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2">{genderItem.percentage}%</span>
                      <div
                        className={`relative w-full overflow-hidden h-2 text-xs flex rounded bg-${colors[index]}-200`}
                      >
                        <div
                          style={{ width: `${genderItem.percentage}%` }}
                          className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${colors[index]}-500`}
                        ></div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
