'use strict';

module.exports = class Car {
    constructor(color, car_passenger, regi_Num){
        this.color = color;
        this.car_passenger = car_passenger;
        this.regi_Num = regi_Num;
    }

    car_Color(){
        return this.color;
    }

    car_Passengers(){
        return this.car_passenger;
    }
    
    regi_Number(){
        return this.regi_Num;
    }

}