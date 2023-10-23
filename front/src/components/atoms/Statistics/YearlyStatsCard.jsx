const YearlyStatsCard = ({ currentYearTotal, lastYearTotal, cardTitle, totalPeople }) => {
    const difference = currentYearTotal - lastYearTotal;

    
    const percentage =
        lastYearTotal !== 0
            ? ((difference / Math.abs(lastYearTotal)) * 100).toFixed(2)
            : 100;

    const textColorClass = difference >= 0 ? "text-green-600" : "text-red-600";
    const arrowClass = difference >= 0 ? "text-green-600" : "text-red-600";
    const arrowIcon = difference >= 0 ? "↑" : "↓";

    return (
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold">{cardTitle}</h3>
                <div className="text-center">
                    <div className={`w-12 h-12 rounded-full ${textColorClass} mx-auto mb-2`}>
                        <p className="text-3xl font-semibold">{totalPeople}</p>
                    </div>
                    <p className="text-teal-900 font-semibold">
                        Total en {new Date().getFullYear()}: {currentYearTotal}
                    </p>
                    <p className="text-gray-500">
                        Diferencia con respecto a {new Date().getFullYear() - 1}: +{difference} ({percentage}%)
                        <span className={`ml-2 ${arrowClass}`}>{arrowIcon}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default YearlyStatsCard;
