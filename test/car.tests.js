'use strict';

const Car = require('../car.js');
const assert = require('assert');

describe('The car class function', () => {
    let pinkCar = new Car('pink', 5, 'CA269777');

    it('should give the cars color (pink) correctly', () => {
        assert.equal(pinkCar.car_Color(), 'pink');
    });

    it('should give the number of car passengers correctly', () => {
        assert.equal(pinkCar.car_Passengers(), 5);
    });
    
    it('should give the registration number of the car correctly', () => {
        assert.equal(pinkCar.regi_Number(), 'CA269777');
    });
});