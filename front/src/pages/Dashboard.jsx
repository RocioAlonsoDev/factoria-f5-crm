import React, { useEffect, useState } from 'react';
import CardDashboardAtom from "../components/atoms/CardDashboardAtom";
import CardStatsAtom from '../components/atoms/Statistics/CardStatsAtom';
import SelectionDayDataService from "../services/recruitmentService/selectionDay.service"

export default function Dashboard() {
  const [nextSelectionDay, setNextSelectionDay] = useState({});
  const [attendees, setAttendees] = useState(0);

  useEffect(() => {
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

    <>
  <div className= "h-screen flex flex-col pt- pl-64">
  <div className='"h-1/2 bg-teal-700 md:block md:absolute md:top-[80px] md:left-64 md:right-2 lg:bottom-1000 w-auto p-2 pb-5'>
  <div className="px-4 mt-5 md:px-10 mx-auto w-full">
    <h2 className="mb-4 text-xl font-bold leading-none tracking-tight text-white text-center md:text-5xl lg:text-4xl dark:text-white">CAPTACIÓN</h2>
    <div className="flex flex-wrap pt-4 pb-20">
            <CardDashboardAtom
              title="Próxima Jornada de Selección"
              school={nextSelectionDay.school}
              date={nextSelectionDay.date}
              attendees={attendees}
              statIconColor={"bg-orange-500"}
                        statIconImage={<svg
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
        
        <CardDashboardAtom
              title="Muejeres por Bootcamp"
              school={nextSelectionDay.school}
              date={nextSelectionDay.date}
              attendees={attendees}
              statIconColor={"bg-orange-500"}
                        statIconImage={<svg
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
              statSubtitle="Total Mujeres 2023"
              statTitle="350,897"
              
              statPercentColor="text-emerald-500"
              statIconColor="bg-green-500"
              statIconImage={(
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  {/* ... (código del icono) */}
                </svg>
              )}
            />

<CardStatsAtom
              statSubtitle="Total Mujeres 2023"
              statTitle="350,897"
              
              statPercentColor="text-emerald-500"
              statIconColor="bg-green-500"
              statIconImage={(
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  {/* ... (código del icono) */}
                </svg>
              )}
            />

<CardStatsAtom
              statSubtitle="Total Mujeres 2023"
              statTitle="350,897"
              
              statPercentColor="text-emerald-500"
              statIconColor="bg-green-500"
              statIconImage={(
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  {/* ... (código del icono) */}
                </svg>
              )}
            />
       
            <CardStatsAtom
              statSubtitle="Total Mujeres 2023"
              statTitle="350,897"
        
              statPercentColor="text-emerald-500"
              statIconColor="bg-orange-500"
              statIconImage={(
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  {/* ... (código del icono) */}
                </svg>
              )}
            /> 
        </div>
    </div>
  </div>


  <div className='h-1/2 bg-orange-500 md:block md:absolute md:bottom-0 md:left-64 md:right-2 w-auto'>
  <div className="md:px-10 w-full">
    <h2 className="text-xl font-bold leading-none tracking-tight text-white text-center md:text-5xl lg:text-4xl dark:text-white">SEGUIMIENTO</h2>
    <div className="flex flex-wrap py-20">
            <CardDashboardAtom
              title="Próxima Jornada de Selección"
              school={nextSelectionDay.school}
              date={nextSelectionDay.date}
              attendees={attendees}
              statIconColor="bg-orange-500"
              statIconImage={(
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  {/* ... (código del icono) */}
                </svg>
              )}
            />
        

         
            <CardStatsAtom
              className="py-4"
              statSubtitle="Total Mujeres 2023"
              statTitle="350,897"
             
              statPercentColor="text-emerald-500"
              statIconColor="bg-green-500"
              statIconImage={(
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  {/* ... (código del icono) */}
                </svg>
              )}
            />
      
      <CardStatsAtom
              statSubtitle="Total Mujeres 2023"
              statTitle="350,897"
              
              statPercentColor="text-emerald-500"
              statIconColor="bg-green-500"
              statIconImage={(
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  {/* ... (código del icono) */}
                </svg>
              )}
            />

<CardStatsAtom
              statSubtitle="Total Mujeres 2023"
              statTitle="350,897"
              
              statPercentColor="text-emerald-500"
              statIconColor="bg-green-500"
              statIconImage={(
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  {/* ... (código del icono) */}
                </svg>
              )}
            />

<CardStatsAtom
              statSubtitle="Total Mujeres 2023"
              statTitle="350,897"
              
              statPercentColor="text-emerald-500"
              statIconColor="bg-green-500"
              statIconImage={(
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  {/* ... (código del icono) */}
                </svg>
              )}
            />
       
            <CardStatsAtom
              statSubtitle="Total Mujeres 2023"
              statTitle="350,897"
        
              statPercentColor="text-emerald-500"
              statIconColor="bg-orange-500"
              statIconImage={(
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  {/* ... (código del icono) */}
                </svg>
              )}
            />
        </div>
    </div>
    </div>
  </div>
  </>
  ); 




}