import { useEffect, useState } from 'react';
import CardStatsAtom from '../components/atoms/Statistics/CardStatsAtom';
import CardDashboardAtom from "../components/atoms/CardDashboardAtom";
import SelectionDayDataService from "../services/recruitmentService/selectionDay.service";
import PersonDataService from "../services/crmService/person.service";
import StatisticsDataService from "../services/crmService/statistics.service";

export default function Dashboard() {
  const [nextSelectionDay, setNextSelectionDay] = useState({});
  const [attendees, setAttendees] = useState(0);
  const [totalWomen, setTotalWomen] = useState(0);
  const [femalePercentage, setFemalePercentage] = useState(0);
  const [ageData, setAgeData] = useState([]);
  const [womenData, setWomenData] = useState({
    current_year: {
      year: '',
      total_women: '',
      percentage: '',
    },
    previous_year: {
      year: '',
      total_women: '',
      percentage: '',
    },
    percentage_difference: '',
  });
  const [womenDataCurrentYear, setWomenDataCurrentYear] = useState([]);
  const [womenDataPreviousYear, setWomenDataPreviousYear] = useState([]);

  useEffect(() => {
    PersonDataService.showByGender()
      .then((response) => {
        setTotalWomen(response.data.female_count);
        setFemalePercentage(response.data.female_percentage);
      })
      .catch((error) => console.error('Error:', error));

    SelectionDayDataService.getNextSelectionDay()
      .then((response) => {
        const nextSelectionDay = response.data.data;
        setNextSelectionDay(nextSelectionDay);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  useEffect(() => {
    StatisticsDataService.getTotalAgePercentages()
      .then(async (response) => {
        console.log("ResponseAge:", response.data);
          setAgeData(response.data)
      })
      .catch((error) => {
        console.error("Error fetching gender data:", error);
      });
  }, []);

  console.log("AgeData:", ageData);
  
  useEffect(() => {
    StatisticsDataService.getTotalWomenByYear()
      .then(async (response) => {
        console.log("ResponseWomen:", response.data);
        setWomenData(response.data);
        
        const { current_year, previous_year} = response.data;
        setWomenDataCurrentYear(current_year);
        setWomenDataPreviousYear(previous_year);

      })
      .catch((error) => {
        console.error("Error fetching gender data:", error);
      });
  }, []);

  console.log("WomenData", womenData.percentage_difference);

return (
  <div className="h-screen flex flex-col">
    <div className="flex flex-grow">
      <div className="h-1/2 bg-teal-700 md:block md:absolute md:top-[48px] md:left-64 md:right-2 lg:bottom-1000 w-auto p-2 pb-5">
        <div className="px-4 mt-20 md:px-10 mx-auto w-full">
            <h2 className="text-xl font-bold leading-none tracking-tight text-white text-center md:text-5xl lg:text-4xl dark:text-white">
              CAPTACIÓN
            </h2>
              <div className="flex flex-wrap pt-20 pb-20">

                <CardDashboardAtom
                title="Próxima Jornada de Selección"
                school={nextSelectionDay.school}
                date={nextSelectionDay.date}
                attendees={attendees}
                statIconColor="bg-orange-200"
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
             
              <CardStatsAtom
              statSubtitle={`Total Mujeres en ${womenDataCurrentYear.year}`}
              statTitle={womenDataCurrentYear.total_women}
              statPercent={womenData.percentage_difference}
              statPercentColor={"text-black-800 text-lg"}
              statDescripiron={`Diferencia con respecto al ${womenDataPreviousYear.year}`}
              statIconColor={"bg-violet-300"}
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
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                  />
                </svg>
              }
            />

              <CardStatsAtom
              statSubtitle={`Menores 30 años en ${ageData.currentYear}`}
              statTitle={ageData.totalPeopleUnder30}
              statPercent={ageData.percentageUnder30}
              statPercentColor={"text-black-800 text-lg"}
              statDescripiron={"sobre el total de personas"}
              statIconColor={"bg-cyan-400"}
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
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              }
            />
            </div>
          </div>
        </div>

    <div className="h-1/2 bg-orange-500 md:block md:absolute md:bottom-0 md:left-64 md:right-2 w-auto">
      <div className="pt-12 md:px-10 w-full">
        <h2 className="text-xl font-bold leading-none tracking-tight text-white text-center md:text-5xl lg:text-4xl dark:text-white">
          SEGUIMIENTO
        </h2>
          <div className="flex flex-wrap py-20">
              
            <CardStatsAtom
              statSubtitle={`Total CODERS en ${ageData.currentYear}`}
              statTitle={345}
              statPercent={15}
              statPercentColor={"text-black-800 text-lg"}
              statDescripiron={"Diferencia con respecto al 2022"}
              statIconColor={"bg-teal-400"}
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
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              }
              /> 

              <CardStatsAtom
              statSubtitle={`CODERS menores 30 años en ${ageData.currentYear}`}
              statTitle={35}
              statPercent={25}
              statPercentColor={"text-black-800 text-lg"}
              statDescripiron={"sobre el total de Coders"}
              statIconColor={"bg-cyan-400"}
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
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              }
              /> 


              <CardStatsAtom
              statSubtitle={`CODERS MUJERES en ${ageData.currentYear}`}
              statTitle={50}
              statPercent={60}
              statPercentColor={"text-black-800 text-lg"}
              statDescripiron={"sobre el total de Coders"}
              statIconColor={"bg-violet-300"}
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
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              }
              /> 

          
              </div>
        </div>
      </div>
    </div>
  </div>
  );
}
