import http from "./http-common";

class StatisticsDataService{

    getTotalGenderPercentages(){
        return http.get(`api/totalGenderPercentage`);
    }

    getTotalAgePercentages(){
        return http.get(`api/totalAgePercentage`);
    }

    getTotalWomenByYear(){
        return http.get(`api/totalWomenByYear`);
    }

}

export default new StatisticsDataService();




