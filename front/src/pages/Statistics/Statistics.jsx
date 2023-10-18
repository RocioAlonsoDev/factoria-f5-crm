import { useEffect, useState } from "react";
import CardStatsAtom from "../../components/atoms/Statistics/CardStatsAtom";
import BarGraphicTotalGenderPercentages from "./BarGraphicTotalGenderPercentages";
// import LineChart from "./LineChart";
import StatisticsDataService from "../../services/crmService/statistics.service";
import BarChartTotalSchoolsPeople from "./BarChartTotalSchoolsPeople";

function Statistics() {
  const [ageData, setAgeData] = useState([]);
  const [coderData, setCoderData] = useState([]);
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
        
        // Extrae los datos específicos y actuliza los estados
        const { current_year, previous_year} = response.data;
        setWomenDataCurrentYear(current_year);
        setWomenDataPreviousYear(previous_year);

      })
      .catch((error) => {
        console.error("Error fetching gender data:", error);
      });
  }, []);

  console.log("WomenData", womenData.percentage_difference);
  
  useEffect(() => {
    StatisticsDataService.getTotalCoderCurrentYear()
      .then(async (response) => {
        console.log("ResponseCoder:", response.data);
        setCoderData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching gender data:", error);
      });
  }, []);

  console.log("CodersData", coderData);

  return (
    <>
    <div className="px-4 mt-5 md:px-10 mx-auto w-full">
        <div className="flex flex-wrap">
            <CardStatsAtom
                statSubtitle={"Total Mujeres 2023"}
                statTitle={"350,897"}
                statArrow={"up"}
                statPercent={"3.48"}
                statPercentColor={"text-emerald-500"}
                statDescripiron={"Since last month"}
                statIconColor={"bg-orange-500"}
            ></CardStatsAtom>

            <CardStatsAtom
                statSubtitle={"Total Mujeres 2023"}
                statTitle={"350,897"}
                statArrow={"down"}
                statPercent={"3.48"}
                statPercentColor={"text-red-500"}
                statDescripiron={"Since last month"}
                statIconColor={"bg-orange-500"}
            ></CardStatsAtom>

            <CardStatsAtom
                statSubtitle={"Total Mujeres 2023"}
                statTitle={"350,897"}
                statArrow={"up"}
                statPercent={"3.48"}
                statPercentColor={"text-emerald-500"}
                statDescripiron={"Since last month"}
                statIconColor={"bg-orange-500"}
            ></CardStatsAtom>
        </div>
    </div>

    <div className="px-4 mt-5 md:px-10 mx-auto w-2/4">
        <div className="flex flex-wrap">
            <BarGraphicAtom></BarGraphicAtom>
        </div>
    </div>
    </>
  );
}

export default Statistics;
