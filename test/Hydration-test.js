const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/HydrationClass');
const testHydrationData = require('../data/test-hydration-data.js');

describe ('Hydration', () => {
  let hydration1, hydration2;

  beforeEach(() => {
    hydration1 = new Hydration(testHydrationData[0]);
    hydration2 = new Hydration(testHydrationData[1]);
  });

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  })

  it('should have a user ID', function() {
    expect(hydration1.userID).to.equal(1);
    expect(hydration2.userID).to.equal(2);
  })

  it('should have a date', function() {
    expect(hydration1.date).to.equal('2019/06/15');
    expect(hydration2.date).to.equal('2019/06/15');
  })

  it('should recall number of Fluid Ounces drank', function() {
    expect(hydration1.numOunces).to.equal(37);
    expect(hydration2.numOunces).to.equal(75);
  })


});
