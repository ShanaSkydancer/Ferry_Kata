'use strict';

module.exports = class Ferry {
    constructor(maxCars, maxPassengers){
        this.maxCars = maxCars;
        this.maxPassengers = maxPassengers;
        this.ferryRides = {};
        this.allCars = [];
        this.allPassengers = 0;
    }

    getCar(car){
        this.allCars.push({
            color : car.car_Color(),
            car_passenger : car.car_Passengers(),
            regi_Num : car.regi_Number()
        })
    }

    board(car){
        if(! this.ferryRides[car.regi_Number()]){
            this.ferryRides[car.regi_Number()] = 0;
        }
        
        if(this.ferryRides[car.regi_Number()] === 3){
            // this.ferryRides[car.regi_Number()] = 0;
            return "Half price!"
        }
        
        if(this.ferryRides[car.regi_Number()] === 7){
            // this.ferryRides[car.regi_Number()] = 0;
            return "You go free!"
        }
        
        if(car.car_Passengers() + this.allPassengers > this.maxPassengers || this.allCars.length >= this.maxCars){
            return "Rejected";
        }
        
        this.getCar(car);
        this.ferryRides[car.regi_Number()]++;
            return "Accepted";
    }

    car_Count(){
        return this.maxCars;
    }

    people_Count(){
        return this.maxPassengers;
    }

    certain_Color(color){
        return this.allCars.filter((car) => car.color === color).length;
    }
    
}