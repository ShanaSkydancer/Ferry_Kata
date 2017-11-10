'use strict';

module.exports = class Ferry {
    constructor(car, ferryPassenger, people_count, color){
        this.car = car;
        this.ferryPassenger = ferryPassenger;
        this.people_count = people_count;
        this.color = color;
    }

    board(){
        var allPassengers = [];
        var ferryPassenger = 0;
        var max = 100;
            if(ferryPassenger <= max){
                allPassengers.push({Car});
                return "Accepted";
                // console.log("Accepted");
            } else if(allPassengers.Car.regi_Num === 3){
                return "Half price!"
            } else if(allPassengers.Car.regi_Num === 7){
                return "You go free!"
            } else {
                return "Rejected";
                // console.log("Rejected");
            }
    }

    car_Count(){
        var count = 0;
        let car = count ++;
        return this.car; 
        console.log(car);
    }

    people_Count(){
        return this.people_count;
        console.log(people_count);
    }

    car_Color(){
        var count = 0;
        if(color = this.color){
            count ++;
            return count;
        } else {
            return count;
        }
    }
}