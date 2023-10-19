// import CardStatsAtom from "../../components/atoms/Statistics/CardStatsAtom";
import BarGraphicAtom from "../../components/atoms/Statistics/BarGraphicAtom";
import { useEffect, useState } from "react";
import PersonDataService from "../../../services/crmService/person.service";

function Statistics() {

    const [genderData, setGenderData] = useState([]);
    const colors = ['blue', 'red', 'purple', 'orange', 'emerald', 'indigo', 'yellow'];
  
    useEffect(() => {
      PersonDataService.getGenderPercentages()
        .then(async (response) => {
          console.log("Response:", response)
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
    <div className='md:block md:absolute md:top-[117px] md:left-64 md:right-0 w-auto p-2'>
            {/* <div className="px-4 mt-5 md:px-10 mx-auto w-full">
                <div className="flex flex-wrap">
                    <CardStatsAtom
                        statSubtitle={"Total Mujeres 2023"}
                        statTitle={"350,897"}
                        statArrow={"up"}
                        statPercent={"3.48"}
                        statPercentColor={"text-emerald-500"}
                        statDescripiron={"Since last month"}
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
                    ></CardStatsAtom>

                    <CardStatsAtom
                        statSubtitle={"Total Mujeres 2023"}
                        statTitle={"350,897"}
                        statArrow={"down"}
                        statPercent={"3.48"}
                        statPercentColor={"text-red-500"}
                        statDescripiron={"Since last month"}
                        statIconColor={"bg-blue-500"}
                        statIconImage={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                            </svg>
                        }
                    ></CardStatsAtom>

                    <CardStatsAtom
                        statSubtitle={"Total Mujeres 2023"}
                        statTitle={"350,897"}
                        statArrow={"up"}
                        statPercent={"3.48"}
                        statPercentColor={"text-emerald-500"}
                        statDescripiron={"Since last month"}
                        statIconColor={"bg-green-500"}
                        statIconImage={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                            </svg>
                        }
                    ></CardStatsAtom>
                </div>
            </div> */}

            <div className="px-4 mt-5 md:px-10 mx-auto w-2/4">
                <div className="flex flex-wrap">
                    <BarGraphicAtom
                    
                    ></BarGraphicAtom>
                </div>
            </div>
        </div>
    </>
  )
}

export default Statistics

