import React, { useEffect, useState } from 'react';
import CardDashboardAtom from "../components/atoms/CardDashboardAtom";
import GenderCardDashboardAtom from '../components/atoms/GenderCardDashboardAtom';
import SelectionDayDataService from "../services/recruitmentService/selectionDay.service";
import PersonDataService from "../services/crmService/person.service";

export default function Dashboard() {
  const [nextSelectionDay, setNextSelectionDay] = useState({});
  const [attendees, setAttendees] = useState(0);
  const [totalWomen, setTotalWomen] = useState(0);
  const [femalePercentage, setFemalePercentage] = useState(0);

  useEffect(() => {
    // Obtiene el porcentaje y el número de mujeres utilizando PersonDataService
    PersonDataService.showByGender()
      .then((response) => {
        setTotalWomen(response.data.female_count);
        setFemalePercentage(response.data.female_percentage);
      })
      .catch((error) => console.error('Error:', error));

    // Obtiene otros datos, como la próxima jornada de selección
    SelectionDayDataService.getNextSelectionDay()
      .then((response) => {
        const nextSelectionDay = response.data.data;
        setNextSelectionDay(nextSelectionDay);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);


  return (
    <div className="h-screen flex flex-col pt-4 pl-64">
      <div className="flex flex-grow">
        <div className="h-1/2 bg-teal-700 md:block md:absolute md:top-[80px] md:left-64 md:right-2 lg:bottom-1000 w-auto p-2 pb-5">
          <div className="px-4 mt-5 md:px-10 mx-auto w-full">
            <h2 className="mb-4 text-xl font-bold leading-none tracking-tight text-white text-center md:text-5xl lg:text-4xl dark:text-white">
              CAPTACIÓN
            </h2>
            <div className="flex flex-wrap pt-4 pb-20">
              <CardDashboardAtom
                title="Próxima Jornada de Selección"
                school={nextSelectionDay.school}
                date={nextSelectionDay.date}
                attendees={attendees}
                statIconColor="bg-orange-500"
                statIconImage={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                    />
                </svg> }
              />
             
              <GenderCardDashboardAtom
                statTitle="Mujeres aspirantes 2023"
                statDescription={totalWomen}
                statArrow={femalePercentage > 0 ? "up" : "down"}
                statPercent={femalePercentage.toFixed(2)}
                statPercentColor={"text-red-500"}
                statDescripiron={""}
                statIconColor={"bg-blue-500"}
                statIconImage={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
              }
              />
            </div>
          </div>
        </div>

        <div className="h-1/2 bg-orange-500 md:block md:absolute md:bottom-0 md:left-64 md:right-2 w-auto">
          <div className="md:px-10 w-full">
            <h2 className="text-xl font-bold leading-none tracking-tight text-white text-center md:text-5xl lg:text-4xl dark:text-white">
              SEGUIMIENTO
            </h2>
            <div className="flex flex-wrap py-20">
              <CardDashboardAtom
                title="Próxima Jornada de Selección"
                school={nextSelectionDay.school}
                date={nextSelectionDay.date}
                attendees={attendees}
                statIconColor="bg-teal-500"
                statIconImage={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    {/* ... Icono SVG ... */}
                  </svg>
                }
              />
              {/* ... Otras tarjetas de estadísticas ... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
