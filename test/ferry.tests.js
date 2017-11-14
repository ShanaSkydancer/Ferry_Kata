'use strict';

const Ferry = require('../ferry.js');
const Car = require('../car.js');
const assert = require('assert');

describe('The ferry class function', () => {

    it('should "Accept" passengers on the ferry correctly', () => {
        let bigFerry = new Ferry(80, 100);
        let redCar = new Car('red', 15, 'CA503111');

        assert.equal(bigFerry.board(redCar), 'Accepted');
    });

    it('should "Reject" passengers on the ferry correctly', () => {
        let smallFerry = new Ferry(10, 30);
        let redCar = new Car('red', 15, 'CA503111');
        let whiteCar = new Car('white', 35, 'CA577777');
        smallFerry.board(redCar);

        assert.equal(smallFerry.board(whiteCar), 'Rejected');
    });

    it('should give "Half price" if the car has been on the ferry three times correctly', () => {
        let bigFerry = new Ferry(80, 100);
        let greenCar = new Car('green', 5, 'CA503111')

        let i = 0;
        while (i < 3) {
            bigFerry.board(greenCar);
            i++;
        }

        assert.equal(bigFerry.board(greenCar), 'Half price!');
    });

    it('should give "You go free" if the car has been on the ferry seven times correctly', () => {
        let bigFerry = new Ferry(80, 100);
        let mediumFerry = new Ferry(35, 65)
        let smallFerry = new Ferry(10, 30);
        let greenCar = new Car('green', 5, 'CA503311')

        let i = 0;
        while (i < 4) {
            bigFerry.board(greenCar);
            i++;
        }

        while (i <= 7) {
            bigFerry.board(greenCar);
            i++;
        }

        assert.equal(bigFerry.board(greenCar), 'You go free!');
    });

    it('should give the number of cars allowed on the ferry correctly', () => {
        let bigFerry = new Ferry(80, 100);

        assert.equal(bigFerry.car_Count(), 80);
    });

    it('should give the number of passengers allowed on the ferry correctly', () => {
        let bigFerry = new Ferry(80, 100);

        assert.equal(bigFerry.people_Count(), 100);
    });

    it('should give the number of a specific car color (blue) on the ferry correctly', () => {
        let bigFerry = new Ferry(80, 100);

        let mixedCars = [
            new Car('red', 10, 'CA503112'),
            new Car('red', 10, 'CA503113'),
            new Car('blue', 10, 'CA503115'),
            new Car('red', 10, 'CA503116'),
            new Car('blue', 10, 'CA503118')
        ];

        mixedCars.forEach((car) => bigFerry.board(car));

        assert.equal(bigFerry.certain_Color('red'), 3);
        assert.equal(bigFerry.certain_Color('blue'), 2);
        
    });
});