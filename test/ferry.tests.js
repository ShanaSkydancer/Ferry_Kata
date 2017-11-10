'use strict';

const Ferry = require('../ferry.js');
const assert = require('assert');

describe('The ferry function', () => {
    let bigferry = new Ferry(20, 'Accepted', 80, 'red');
    let max = 100;
    let ferryPassenger = 5;

    it('should give the number of cars allowed on the ferry correctly', () => {
        assert.equal(bigferry.car_Count(), 20);
    });
    it('should Accept or Reject passengers on the ferry correctly', () => {
        assert.equal(bigferry.board(), 'Accepted');
    });
    it('should Accept or Reject passengers on the ferry correctly', () => {
        assert.equal(bigferry.board(), 'Rejected');
    });
    it('should Accept or Reject passengers on the ferry correctly', () => {
        assert.equal(bigferry.board(), 'Half price!');
    });
    it('should Accept or Reject passengers on the ferry correctly', () => {
        assert.equal(bigferry.board(), 'You go free!');
    });
    it('should give the number of passengers allowed on the ferry correctly', () => {
        assert.equal(bigferry.people_Count(), 80);
    });
    it('should give the number of a specific car color (red) on the ferry correctly', () => {
        assert.equal(bigferry.car_Color(), 1);
    });
});