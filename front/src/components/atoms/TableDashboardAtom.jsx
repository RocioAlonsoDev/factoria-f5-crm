import React, { useState, useEffect } from "react";
import SelectionDayDataService from "../../services/recruitmentService/selectionDay.service";

export default function TableDashboardAtom() {
  const [nextSelections, setNextSelections] = useState([]);
  const [convocados, setConvocados] = useState({});

useEffect(() => {
    SelectionDayDataService.getAll()
      .then((response) => {
        const sortedSelections = response.data.data.sort((a, b) => {
          return new Date(a.date) - new Date(b.date);
        });
        setNextSelections(sortedSelections);
  
        // Calcular el número de personas convocadas para cada SelectionDay
        const convocadosData = {};
        sortedSelections.forEach((selection) => {
          const selectionDayId = selection.id;
  
          SelectionDayDataService.getPeopleInSelectionDay(selectionDayId)
            .then((response) => {
              const convocadosCount = response.data.data.length;
              convocadosData[selectionDayId] = convocadosCount;
  
              // Actualizar el estado de convocados
              setConvocados({ ...convocadosData });
            })
            .catch((error) => {
              console.error("Error al obtener el número de personas convocadas", error);
            });
        });
      })
      .catch((error) => {
        console.error("Error al mostrar las jornadas de selección", error);
      });
  }, []);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Próximas jornadas de selección
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button
                className="bg-teal-900 text-white active-bg-teal-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Ver todas
              </button>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr className= "bg-gray-200">
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Escuela
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Fecha
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Convocad@s
                </th>
                {/* <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Confirmad@s
                </th> */}
              </tr>
            </thead>

            <tbody>

            {nextSelections.length > 0 ? (
            nextSelections.map((selection, index) => (
            <tr key={index}>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                {selection.school}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {new Date(selection.date).toLocaleDateString("es-ES", {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                })}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {convocados[selection.id] || 0} {/* Mostrar el número de convocados */}
                </td>
            </tr>
        ))
        ) : (
            <tr>
            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4" colSpan="3">
            No hay próximas jornadas de selección disponibles.
            </td>
            </tr>
            )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
