
import CardAtom from "../../components/atoms/CardAtom";
import selection from "../../assets/img/selection.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SelectionDayDataService from "./../../services/recruitmentService/selectionDay.service";
import TableAtom from "../../components/atoms/TableAtom";

export default function CardAtomSocialTraffic() {
  const [selectionDay, setSelectionDay] = useState([]);
  const columns = [
    'Escuela',
    'Fecha',
    'Asistentes',
    'Personas admitidas'
  ];

  useEffect(() => {
    SelectionDayDataService.getAll()
      .then((response) => {
        setSelectionDay(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error al mostrar las jornadas de selección", error);
      });
  }, []);

  const currentDate = new Date();

  const nextSelections = selectionDay.filter((day) => {
    const eventDate = new Date(day.date);
    return eventDate >= currentDate;
  });

  const previousSelections = selectionDay.filter((day) => {
    const eventDate = new Date(day.date);
    return eventDate < currentDate;
  });

  // Mapear las jornadas de selección pasadas
  const formattedPreviousSelections = previousSelections.map((day) => {
    return {
      'Escuela': day.school,
      'Fecha': new Date(day.date).toLocaleDateString("es-ES", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      }),
      'Asistentes': day.attendees,
      'Personas admitidas': day.admittedPeople
      
    };
  });

  return (
    <>
      <div className="flex flex-col items-center">
        <Link to="/recruitment/selectionday/add">
          <button className="bg-orange-500 text-white px-4 py-2 rounded mt-4">
            Añadir jornada de selección
          </button>
        </Link>
        <div className="max-w-screen-lg flex justify-center gap-4 mt-4">
          {nextSelections.map((day, index) => {
            const formattedDate = new Date(day.date).toLocaleDateString("es-ES", {
              day: "numeric",
              month: "numeric",
              year: "numeric",
            });

            const eventDate = new Date(day.date);
            const timeDifference = eventDate - currentDate;
            const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const remainingInfo = `${daysRemaining} días`;

            return (
              <CardAtom
                key={index}
                name={day.school}
                imageUrl={selection}
                stats={[
                  { label: "Fecha", value: formattedDate },
                  { label: "Faltan", value: remainingInfo },
                ]}
                buttonText="Ver Detalles"
                buttonLink={`/recruitment/selectiondayshow/${day.id}`}
                style={{ width: "20%" }}
              />
            );
          })}
        </div>
      </div>

      {/* Tabla con jornadas anteriores */}
      <TableAtom
        tableTitle="Jornadas de selección anteriores"
        data={formattedPreviousSelections}
        columns={columns}
      />
    </>
  );
}
