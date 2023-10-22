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

    getTotalPeoplebySchool(){
        return http.get(`api/totalPeoplebySchool`);
    }

    getTotalCoderCurrentYear(){
        return http.get(`api/totalCoderCurrentYear`);
    }

}

export default new StatisticsDataService();




