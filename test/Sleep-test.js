const chai = require('chai');
const expect = chai.expect;

const Sleep = require('../src/SleepClass');
const testSleepData = require('../data/test-sleep-data.js');

describe('Sleep', () => {
  let sleep;

  beforeEach(() => {
    sleep = new Sleep(testSleepData);
  });

  it('Should be a function', () => {
    expect(Sleep).to.be.a('function');
  })

  it('Should instantiate the Sleep', () => {
    expect(sleep).to.be.an.instanceof(Sleep);
  })

  it('should locate a users data by ID', () => {
    expect(sleep.findUserById(1)).to.be.an('array');
  })

  it('should recall all-time average hours slept per night for a user', () =>{
    expect()
  })

})
