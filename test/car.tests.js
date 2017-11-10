'use strict';

const Car = require('../car.js');
const assert = require('assert');

describe('The car function', () => {
    let redCar = new Car('red', 5, 'CA503179');

    it('should give the cars color correctly', () => {
        assert.equal(redCar.car_Color(), 'red');
    });
    it('should give the number of car passengers correctly', () => {
        assert.equal(redCar.car_Passengers(), 5);
    });
    it('should give the registration number of the car correctly', () => {
        assert.equal(redCar.regi_Number(), 'CA503179');
    });
});