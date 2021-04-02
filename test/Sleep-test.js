const chai = require('chai');
const expect = chai.expect;

const Sleep = require('../src/SleepClass');
const testSleepData = require('../data/test-sleep-data.js');

describe('Sleep', () => {
  let sleep;

  beforeEach(() => {
    sleep = new Sleep(testSleepData);
  });

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  })

})
