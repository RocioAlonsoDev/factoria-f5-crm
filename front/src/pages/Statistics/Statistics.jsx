import CardStatsAtom from "../../components/atoms/Statistics/CardStatsAtom";
import BarGraphicAtom from "../../components/atoms/Statistics/BarGraphicAtom";

function Statistics() {
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
  )
}

export default Statistics

